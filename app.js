/* ==========================================================================
   APP · rendu, onglets, thème, mode focus, quiz, chronomètre
   ========================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     STATE
     ------------------------------------------------------------------ */
  const STORE = 'cge-vrai-du-faux-v1';
  let saved = { theme: null, last: null, focusOn: null, focus: {}, scores: {} };
  try {
    const raw = localStorage.getItem(STORE);
    if (raw) saved = Object.assign(saved, JSON.parse(raw));
  } catch (e) {}
  function persist() {
    try { localStorage.setItem(STORE, JSON.stringify(saved)); } catch (e) {}
  }

  const app = document.getElementById('main');
  const tabbar = document.getElementById('tabbar');
  let afterTab = null;   // raccordé plus bas par le mode focus
  let pendingI = null;   // index imposé au prochain rendu focus

  /* ------------------------------------------------------------------
     THEME
     ------------------------------------------------------------------ */
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    document.getElementById('themeBtn').setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', t === 'dark' ? '#12141a' : '#f5f2ea');
  }
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved.theme || (prefersDark ? 'dark' : 'light'));
  document.getElementById('themeBtn').addEventListener('click', function () {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    saved.theme = next; persist(); applyTheme(next);
  });

  /* ------------------------------------------------------------------
     TABS
     ------------------------------------------------------------------ */
  CHAPTERS.forEach(function (ch) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'tab';
    b.id = 'tab-' + ch.id;
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-controls', 'panel-' + ch.id);
    b.setAttribute('aria-selected', 'false');
    b.innerHTML = '<span class="tab__num">' + ch.num + '</span>' + ch.title;
    b.addEventListener('click', function () { switchTab(ch.id); });
    tabbar.appendChild(b);
  });

  function switchTab(id) {
    CHAPTERS.forEach(function (ch) {
      const btn = document.getElementById('tab-' + ch.id);
      const pnl = document.getElementById('panel-' + ch.id);
      const on = ch.id === id;
      if (btn) {
        btn.setAttribute('aria-selected', on ? 'true' : 'false');
        btn.tabIndex = on ? 0 : -1;
      }
      if (pnl) pnl.classList.toggle('is-active', on);
    });
    saved.last = id; persist();
    if (afterTab) afterTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ------------------------------------------------------------------
     PANELS
     ------------------------------------------------------------------ */
  function panelHTML(ch) {
    return '<div class="chap-head">' +
      '<span class="chap-head__eyebrow">Chapitre ' + ch.num + '</span>' +
      '<h1>' + ch.title + '</h1>' +
      '<p>' + ch.tagline + '</p>' +
    '</div>' + ch.html;
  }

  CHAPTERS.forEach(function (ch) {
    const sec = document.createElement('section');
    sec.className = 'panel';
    sec.id = 'panel-' + ch.id;
    sec.setAttribute('role', 'tabpanel');
    sec.setAttribute('aria-labelledby', 'tab-' + ch.id);
    sec.innerHTML = panelHTML(ch);
    app.appendChild(sec);
  });

  /* Flashcards : révélation déléguée */
  document.addEventListener('click', function (e) {
    const f = e.target.closest('.flash');
    if (!f) return;
    f.setAttribute('aria-expanded', f.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
  });

  /* ------------------------------------------------------------------
     QUIZ ENGINE
     ------------------------------------------------------------------ */
  const LETTERS = ['A', 'B', 'C', 'D'];

  function mountQuiz(root, data, key) {
    if (!root || !data || !data.length) return;
    let idx = 0, score = 0, locked = false;

    function draw() {
      const q = data[idx];
      root.innerHTML =
        '<div class="quiz__meta"><span>Question ' + (idx + 1) + ' / ' + data.length + '</span><span>Score ' + score + '</span></div>' +
        '<div class="quiz__q">' + q.q + '</div>' +
        '<div class="quiz__opts" role="group" aria-label="Réponses possibles">' +
          q.opts.map(function (o, i) {
            return '<button class="opt" type="button" data-i="' + i + '"><span class="opt__key" aria-hidden="true">' + LETTERS[i] + '</span><span>' + o + '</span></button>';
          }).join('') +
        '</div>' +
        '<div class="feedback" aria-live="polite"></div>' +
        '<div class="quiz__foot"><button class="btn" type="button" data-next hidden>Question suivante</button></div>';
      root.querySelectorAll('.opt').forEach(function (b) {
        b.addEventListener('click', function () { answer(parseInt(b.dataset.i, 10)); });
      });
      root.querySelector('[data-next]').addEventListener('click', function () {
        if (idx + 1 >= data.length) finish(); else { idx++; draw(); }
      });
      locked = false;
    }

    function answer(i) {
      if (locked) return;
      locked = true;
      const q = data[idx];
      const opts = root.querySelectorAll('.opt');
      opts.forEach(function (b, k) {
        b.disabled = true;
        if (k === q.a) b.classList.add('is-good');
        else if (k === i) b.classList.add('is-bad');
      });
      const fb = root.querySelector('.feedback');
      if (i === q.a) { score++; fb.innerHTML = '<b>Juste.</b> ' + q.why; }
      else fb.innerHTML = '<i>Raté.</i> ' + q.why;
      root.querySelector('.quiz__meta').lastElementChild.textContent = 'Score ' + score;
      const next = root.querySelector('[data-next]');
      next.hidden = false;
      next.textContent = idx + 1 >= data.length ? 'Voir le score' : 'Question suivante';
    }

    function finish() {
      const pct = Math.round(score / data.length * 100);
      saved.scores[key] = pct; persist();
      root.innerHTML =
        '<div class="quiz__q">Résultat : ' + score + ' / ' + data.length + ' — ' + pct + ' %</div>' +
        '<p class="hint">' + (pct >= 80 ? 'Niveau solide, tu peux passer à autre chose.' :
          pct >= 50 ? 'Les bases sont là. Reprends les cartes ratées, pas la page entière.' :
          'Retourne aux recettes de méthode : la compréhension seule ne suffit pas à l\'épreuve.') + '</p>' +
        '<div class="quiz__foot"><button class="btn" type="button" data-retry>Refaire le quiz</button></div>';
      root.querySelector('[data-retry]').addEventListener('click', function () {
        idx = 0; score = 0; draw();
      });
    }

    draw();
  }

  document.querySelectorAll('.quiz[data-quiz]').forEach(function (el) {
    const key = el.getAttribute('data-quiz');
    mountQuiz(el, QUIZZES[key], key);
  });

  /* ------------------------------------------------------------------
     CHRONOMÈTRE 3 H
     ------------------------------------------------------------------ */
  const PHASES = [
    { name: 'Phase 1 · Lecture et annotation', secs: 20 * 60, hint: 'Nature, date, auteur, thèse, procédés, exemples. Rien sur la copie.' },
    { name: 'Phase 2 · Questions sur le corpus', secs: 85 * 60, hint: '8 à 15 lignes par question. La confrontation cite tous les documents.' },
    { name: 'Phase 3 · Essai', secs: 65 * 60, hint: '10 min de plan, 45 min de rédaction, 10 min de relecture de l\'essai.' },
    { name: 'Phase 4 · Relecture globale', secs: 10 * 60, hint: 'Accords, participes passés, numéros de documents.' }
  ];

  (function timer() {
    const root = document.getElementById('cgeTimer');
    if (!root) return;
    const elPhase = root.querySelector('#timerPhase');
    const elClock = root.querySelector('#timerClock');
    const elHint = root.querySelector('#timerHint');
    const elFill = root.querySelector('#timerFill');
    const bStart = root.querySelector('#timerStart');
    const bNext = root.querySelector('#timerNext');
    const bReset = root.querySelector('#timerReset');

    let phase = 0, remaining = PHASES[0].secs, running = false, tick = null, endAt = 0;

    function fmt(s) {
      s = Math.max(0, Math.round(s));
      const m = Math.floor(s / 60), sec = s % 60;
      return (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
    }

    function paint() {
      const p = PHASES[phase];
      elPhase.textContent = p.name;
      elClock.textContent = fmt(remaining);
      elHint.textContent = p.hint;
      elFill.style.width = (100 - (remaining / p.secs) * 100) + '%';
      root.classList.toggle('is-warn', remaining <= 120 && remaining > 0);
      root.classList.toggle('is-done', remaining <= 0);
    }

    function stop() {
      running = false;
      if (tick) { clearInterval(tick); tick = null; }
      bStart.textContent = 'Reprendre';
    }

    function start() {
      if (running) { stop(); return; }
      running = true;
      bStart.textContent = 'Pause';
      endAt = Date.now() + remaining * 1000;
      tick = setInterval(function () {
        remaining = (endAt - Date.now()) / 1000;
        if (remaining <= 0) {
          remaining = 0;
          paint();
          const nextPhase = phase + 1;
          if (nextPhase < PHASES.length) {
            stop();
            phase = nextPhase;
            remaining = PHASES[phase].secs;
            bStart.textContent = 'Démarrer';
            paint();
          } else {
            stop();
            elHint.textContent = 'Temps écoulé. Pose le stylo.';
          }
          return;
        }
        paint();
      }, 500);
    }

    bStart.addEventListener('click', start);
    bNext.addEventListener('click', function () {
      stop();
      phase = Math.min(phase + 1, PHASES.length - 1);
      remaining = PHASES[phase].secs;
      bStart.textContent = 'Démarrer';
      paint();
    });
    bReset.addEventListener('click', function () {
      stop();
      phase = 0;
      remaining = PHASES[0].secs;
      bStart.textContent = 'Démarrer';
      paint();
    });
    paint();
  })();

  /* ------------------------------------------------------------------
     MODE FOCUS · une unité par écran
     ------------------------------------------------------------------ */
  const DECKS = Object.create(null);
  const state = { on: saved.focusOn !== false, ch: null, i: 0 };
  let mounted = [];

  const view = document.createElement('section');
  view.className = 'panel';
  view.id = 'focus-view';
  view.setAttribute('role', 'tabpanel');
  view.innerHTML =
    '<div class="focus-head">' +
      '<span class="focus-eyebrow" id="focusEyebrow">Focus</span>' +
      '<h1 class="focus-title" id="focusTitle"></h1>' +
    '</div>' +
    '<div class="focus-top">' +
      '<span class="focus-count" id="focusCount">1 / 1</span>' +
      '<div class="focus-bar"><div class="focus-fill" id="focusFill"></div></div>' +
    '</div>' +
    '<p class="focus-label" id="focusLabel"></p>' +
    '<div class="focus-stage" id="focusStage" aria-live="polite"></div>' +
    '<nav class="focus-nav" aria-label="Navigation du mode focus">' +
      '<button class="btn btn--ghost" type="button" id="focusPrev" aria-label="Élément précédent">←</button>' +
      '<button class="btn" type="button" id="focusNext">Suivant →</button>' +
    '</nav>' +
    '<p class="focus-hint">Une seule unité à la fois. <kbd>←</kbd> <kbd>→</kbd> pour naviguer.</p>';
  app.appendChild(view);

  const stage = view.querySelector('#focusStage');
  const elCount = view.querySelector('#focusCount');
  const elFillF = view.querySelector('#focusFill');
  const elLabel = view.querySelector('#focusLabel');
  const elTitle = view.querySelector('#focusTitle');
  const elEyebrow = view.querySelector('#focusEyebrow');

  const CONTAINERS = ['recette', 'card', 'trap', 'flash', 'quote', 'timer', 'quiz', 'copy'];

  function labelOf(el, fallback) {
    if (!el.querySelector) return fallback;
    const t = el.querySelector('.recette__tag') || el.querySelector('h3') || el.querySelector('.ex__tag') || el.querySelector('cite');
    if (t && t.textContent.trim()) {
      const v = t.textContent.trim();
      return v.length > 46 ? v.slice(0, 44) + '…' : v;
    }
    return fallback;
  }

  function chunkBlock(block) {
    const groups = [];
    const titleEl = block.querySelector(':scope > .block__title');
    const title = titleEl ? titleEl.textContent.replace(/^[^A-Za-zÀ-ÿ0-9]+/, '').trim() : '';
    let buf = [];

    function flush() {
      if (!buf.length) return;
      groups.push({ els: buf.slice(), label: title || 'Repères', wrap: true });
      buf = [];
    }

    Array.prototype.forEach.call(block.children, function (el) {
      if (el === titleEl || el.classList.contains('hint')) return;

      if (el.classList.contains('quiz')) { flush(); groups.push({ els: [el], label: /quiz/i.test(title) ? title : 'Quiz · ' + title }); return; }
      if (el.classList.contains('flashdeck')) {
        flush();
        Array.prototype.forEach.call(el.children, function (f) { groups.push({ els: [f], label: 'Carte de rappel' }); });
        return;
      }
      if (el.classList.contains('recette')) { flush(); groups.push({ els: [el], label: labelOf(el, title) }); return; }
      if (el.classList.contains('quote')) { flush(); groups.push({ els: [el], label: labelOf(el, 'Citation') }); return; }
      if (el.classList.contains('timer')) { flush(); groups.push({ els: [el], label: 'Chronomètre 3 h' }); return; }
      if (el.classList.contains('card')) {
        flush();
        const traps = el.querySelectorAll(':scope > .trap');
        if (traps.length) {
          Array.prototype.forEach.call(traps, function (t) {
            const fl = t.querySelector('.trap__flag');
            groups.push({ els: [t], label: 'Piège · ' + (fl ? fl.textContent.trim() : ''), wrap: true });
          });
          return;
        }
        groups.push({ els: [el], label: labelOf(el, title) });
        return;
      }
      if (el.classList.contains('trap')) {
        flush();
        const fl = el.querySelector('.trap__flag');
        groups.push({ els: [el], label: 'Piège · ' + (fl ? fl.textContent.trim() : ''), wrap: true });
        return;
      }
      buf.push(el);
    });
    flush();
    return groups;
  }

  function buildDeck(chId) {
    const panel = document.getElementById('panel-' + chId);
    if (!panel) return [];
    let groups = [];
    panel.querySelectorAll(':scope > section.block').forEach(function (b) {
      groups = groups.concat(chunkBlock(b));
    });
    groups = groups.filter(function (g) { return g.els.length; });
    groups.forEach(function (g) {
      g.nodes = g.els.map(function (el) {
        const ph = document.createElement('span');
        ph.className = 'focus-ph';
        ph.hidden = true;
        if (el.parentNode) el.parentNode.insertBefore(ph, el);
        return { el: el, ph: ph };
      });
      delete g.els;
    });
    return groups;
  }

  function deckFor(chId) {
    if (!DECKS[chId]) DECKS[chId] = buildDeck(chId);
    return DECKS[chId];
  }

  function unmount() {
    mounted.forEach(function (n) {
      if (n.ph.parentNode) n.ph.parentNode.insertBefore(n.el, n.ph);
    });
    mounted = [];
    stage.innerHTML = '';
  }

  function render() {
    if (!state.on) return;
    let ch = CHAPTERS[0];
    CHAPTERS.forEach(function (c) { if (c.id === state.ch) ch = c; });
    state.ch = ch.id;

    const deck = deckFor(ch.id);
    if (!deck.length) return;
    const total = deck.length;
    const i = Math.min(Math.max(state.i, 0), total - 1);
    state.i = i;

    saved.focus = saved.focus || {};
    saved.focus[ch.id] = i;
    persist();

    unmount();
    const slide = deck[i];
    if (slide.wrap || slide.nodes.length > 1) {
      const w = document.createElement('div');
      w.className = 'card';
      slide.nodes.forEach(function (n) { w.appendChild(n.el); });
      stage.appendChild(w);
    } else {
      slide.nodes.forEach(function (n) { stage.appendChild(n.el); });
    }
    mounted = slide.nodes;

    // Évite le doublon : le libellé du haut répète parfois le titre de la carte.
    if (slide.label) {
      const first = stage.querySelector('h3, cite');
      if (first && first.textContent.trim() === slide.label) first.classList.add('dup-hidden');
    }

    elEyebrow.textContent = 'Chapitre ' + ch.num + ' · Focus';
    elTitle.textContent = ch.title;
    elLabel.textContent = slide.label || '';
    elCount.textContent = (i + 1) + ' / ' + total;
    elFillF.style.width = ((i + 1) / total * 100) + '%';
    view.querySelector('#focusPrev').disabled = i === 0;
    view.querySelector('#focusNext').textContent = i === total - 1 ? 'Section suivante →' : 'Suivant →';
  }

  function go(delta) {
    const deck = deckFor(state.ch);
    const next = state.i + delta;
    if (next < 0) return;
    if (next >= deck.length) {
      const idx = CHAPTERS.findIndex(function (c) { return c.id === state.ch; });
      if (idx > -1 && idx < CHAPTERS.length - 1) {
        pendingI = 0;
        switchTab(CHAPTERS[idx + 1].id);
      }
      return;
    }
    state.i = next;
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function syncTabs() {
    CHAPTERS.forEach(function (c) {
      const b = document.getElementById('tab-' + c.id);
      if (!b) return;
      const on = c.id === state.ch;
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
    });
  }

  function apply(on) {
    state.on = on;
    saved.focusOn = on;
    persist();
    document.body.classList.toggle('is-focus', on);
    const btn = document.getElementById('focusBtn');
    if (btn) btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    if (on) render();
    else unmount();
  }

  /* Raccord onglets -> vue focus */
  afterTab = function (id) {
    if (!state.on) return;
    state.ch = id;
    state.i = pendingI !== null ? pendingI : ((saved.focus && saved.focus[id]) || 0);
    pendingI = null;
    render();
    syncTabs();
  };

  document.addEventListener('click', function (e) {
    if (e.target.closest('#focusNext')) { go(1); return; }
    if (e.target.closest('#focusPrev')) { go(-1); return; }
    const t = e.target.closest('#focusBtn');
    if (t) { apply(!state.on); return; }
  });

  document.addEventListener('keydown', function (e) {
    if (!state.on) return;
    if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
  });

  let tx = null, ty = null;
  stage.addEventListener('touchstart', function (e) {
    if (e.touches.length !== 1) return;
    tx = e.touches[0].clientX; ty = e.touches[0].clientY;
  }, { passive: true });
  stage.addEventListener('touchend', function (e) {
    if (tx === null) return;
    const dx = e.changedTouches[0].clientX - tx;
    const dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.6) go(dx < 0 ? 1 : -1);
    tx = ty = null;
  }, { passive: true });

  /* BOOT */
  switchTab(saved.last && document.getElementById('panel-' + saved.last) ? saved.last : 'express');
  state.ch = saved.last && document.getElementById('panel-' + saved.last) ? saved.last : CHAPTERS[0].id;
  state.i = (saved.focus && saved.focus[state.ch]) || 0;
  apply(state.on);
  if (state.on) syncTabs();
})();
