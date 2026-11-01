/* ==========================================================================
   CONTENU · CGE BTS SIO · thème 2027 « Le vrai du faux »
   Source : arrêté du 13 juillet 2023 (JORF 04/08/2023), applicable session 2025.
   Ne jamais réviser le format « synthèse 4 h » : supprimé.
   ========================================================================== */

const CHAPTERS = [
{
  id: 'express',
  num: '⚡',
  title: 'Express',
  tagline: 'Ce qu\'il faut avoir en tête avant d\'entrer en salle. Format, temps, réflexes, références, et la dernière heure de révision.',
  html: `
  <section class="block">
    <h2 class="block__title"><span class="ic">◆</span> Le format, en clair</h2>
    <div class="card">
      <h3>3 h · coefficient 3 · deux parties à 10 points</h3>
      <dl class="kv">
        <dt>Durée</dt><dd>3 h — et non 4 h comme avant 2025.</dd>
        <dt>Partie 1</dt><dd>Questions sur le corpus — <strong>10 points</strong>, 2 à 4 questions.</dd>
        <dt>Partie 2</dt><dd>Essai — <strong>10 points</strong>, <strong>2 sujets au choix</strong>, un seul à traiter.</dd>
        <dt>Corpus</dt><dd>2 à 3 documents de nature différente : texte littéraire, texte non littéraire, iconographie, tableau statistique.</dd>
        <dt>Note</dt><dd>Directement sur 20. Plus de /60 ramené sur 20.</dd>
        <dt>Disparu</dt><dd>La synthèse de documents (/40) et l'« écriture personnelle » (/20). Toute méthode de synthèse est hors sujet.</dd>
      </dl>
    </div>

    <div class="card">
      <h3>La répartition des 3 heures, à appliquer telle quelle</h3>
      <ol class="steps">
        <li><strong>20 min — lecture et annotation</strong> du corpus entier : nature, date, auteur, thèse, procédés, exemples. Aucune écriture sur la copie.</li>
        <li><strong>1 h 25 — questions sur le corpus</strong> : environ 20 min par question, la dernière est souvent la question de confrontation.</li>
        <li><strong>1 h 05 — essai</strong> : 10 min de plan, 45 min de rédaction, 10 min de relecture de l'essai.</li>
        <li><strong>10 min — relecture globale</strong> : orthographe, accords, syntaxe. La langue est notée dans les deux parties.</li>
      </ol>
      <p class="hint">Règle de survie : si l'essai n'est pas commencé à 1 h 05 de la fin, on arrête les questions, même imparfaites. Un essai bâclé coûte plus qu'une question moyenne.</p>
    </div>

    <div class="card">
      <h3>Ce qui rapporte / ce qui coûte</h3>
      <p><strong>Rapporte :</strong></p>
      <ul>
        <li>Réponses <strong>rédigées</strong> qui <strong>confrontent</strong> les documents : ce que le doc A éclaire, contredit ou nuance dans le doc B.</li>
        <li>Relevés <strong>analysés</strong> : nommer le procédé et dire son effet, pas seulement citer.</li>
        <li>Essai avec position assumée, exemples d'origines différentes et références précises.</li>
        <li>Citations courtes, localisées (document + ligne), reformulées.</li>
      </ul>
      <p><strong>Coûte :</strong></p>
      <ul>
        <li>Répondre document par document comme un questionnaire de compréhension.</li>
        <li>Résumer au lieu d'interpréter ; paraphraser le texte.</li>
        <li>Essai sans référence précise, ou catalogue de noms non exploités.</li>
        <li>Avis mou en conclusion : « peut-être que », « on peut penser que ».</li>
        <li>Réponse en tirets ou en liste au lieu d'un paragraphe.</li>
      </ul>
    </div>

    <div class="card">
      <h3>Les 5 réflexes de la partie 1</h3>
      <ol class="steps">
        <li><strong>Surligner les verbes de consigne</strong> avant d'écrire : étudiez, comparez, montrez, expliquez, « portent-ils un regard critique » (réponse nuancée attendue, pas un oui/non).</li>
        <li><strong>Répondre dès la première phrase</strong> : la réponse, puis la preuve. Jamais l'inverse.</li>
        <li><strong>Numéroter les documents</strong> à chaque citation. Le correcteur doit voir une lecture, pas un copier-coller.</li>
        <li><strong>Identifier la question de confrontation</strong> : c'est celle qui rapporte le plus et qui est le plus souvent ratée.</li>
        <li><strong>Calibrer 8 à 15 lignes</strong> par question. Trop court = non traité. Trop long = essai sacrifié.</li>
      </ol>
    </div>

    <div class="card">
      <h3>La structure d'essai en 6 lignes</h3>
      <div class="copy">1. Amorce (2 phrases max, un fait ou une tension, pas une généralité)
2. Problématique (une question qui mérite une réponse)
3. Annonce du plan (2 ou 3 parties, annoncées sans jargon scolaire)
4. Développement : 1 argument + 1 exemple précis par paragraphe
5. Nuance : l'objection que ton plan doit traverser
6. Conclusion qui TRANCHE (une position, pas un résumé)</div>
      <p class="hint">1 page et demie à 2 pages. Trois exemples d'origines différentes : une œuvre, un fait daté, un document du corpus.</p>
    </div>

    <div class="card">
      <h3>Les 5 références à sortir en priorité</h3>
      <ul>
        <li><strong>1984</strong> (Orwell) — novlangue et doublethink : le faux qui s'installe dans le langage.</li>
        <li><strong>Arendt, « Vérité et politique »</strong> (1964) — vérité de fait contre opinion : le cadre conceptuel de la partie 1.</li>
        <li><strong>Eco, La Guerre du faux</strong> — hyperréalité, le faux qui produit du réel.</li>
        <li><strong>Magritte, La Trahison des images</strong> (1929) — « ceci n'est pas une pipe » : le faux assumé qui dit vrai.</li>
        <li><strong>Deepfake Zelensky</strong> (mars 2022) — la vitesse comme arme, le faux dans l'urgence.</li>
      </ul>
      <p class="hint">Deux par registre au maximum, chacune exploitée en une phrase. Un nom posé sans être exploité est une pénalité, pas un point.</p>
    </div>

    <div class="card">
      <h3>La dernière heure avant l'épreuve</h3>
      <ol class="steps">
        <li>Relire cette page et la fiche « Questions » uniquement. Zéro contenu nouveau.</li>
        <li>Réciter les 4 phases du temps à voix haute : 20 min / 1 h 25 / 1 h 05 / 10 min.</li>
        <li>Réciter 6 références : 2 œuvres, 2 concepts, 2 faits datés.</li>
        <li>Écrire une amorce d'essai à blanc sur le thème, 3 lignes, pour se mettre en voix.</li>
        <li>Matériel : 2 stylos noirs, correcteur interdit, montre au poignet (le portable ne sert pas de montre).</li>
      </ol>
    </div>
  </section>

  <section class="block">
    <h2 class="block__title"><span class="ic">↻</span> Cartes de rappel</h2>
    <p class="hint">Réponds à voix haute avant d'ouvrir.</p>
    <div class="flashdeck">
      <button class="flash" type="button" aria-expanded="false"><span class="flash__recto">Combien de points par partie ?</span><span class="flash__hint">cliquer pour révéler</span><span class="flash__verso">10 points pour les questions sur corpus, 10 points pour l'essai. Note directement sur 20.</span></button>
      <button class="flash" type="button" aria-expanded="false"><span class="flash__recto">Combien de sujets d'essai ?</span><span class="flash__hint">cliquer pour révéler</span><span class="flash__verso">Deux au choix, un seul à traiter. Choix en 2 minutes maximum.</span></button>
      <button class="flash" type="button" aria-expanded="false"><span class="flash__recto">Les 4 phases du temps ?</span><span class="flash__hint">cliquer pour révéler</span><span class="flash__verso">20 min lecture · 1 h 25 questions · 1 h 05 essai · 10 min relecture.</span></button>
      <button class="flash" type="button" aria-expanded="false"><span class="flash__recto">Ce qu'il faut repérer dans chaque document ?</span><span class="flash__hint">cliquer pour révéler</span><span class="flash__verso">Nature, date, auteur, thèse, procédés, exemples. Six lignes au brouillon par document.</span></button>
      <button class="flash" type="button" aria-expanded="false"><span class="flash__recto">Longueur d'une réponse de partie 1 ?</span><span class="flash__hint">cliquer pour révéler</span><span class="flash__verso">8 à 15 lignes rédigées, en un paragraphe structuré. Jamais de liste.</span></button>
      <button class="flash" type="button" aria-expanded="false"><span class="flash__recto">Les trois origines d'exemples pour l'essai ?</span><span class="flash__hint">cliquer pour révéler</span><span class="flash__verso">Une œuvre littéraire (ou étudiée en cours), un fait scientifique, social ou actuel, un document du corpus.</span></button>
      <button class="flash" type="button" aria-expanded="false"><span class="flash__recto">Ce que vaut une réponse en oui/non ?</span><span class="flash__hint">cliquer pour révéler</span><span class="flash__verso">Rien. Une question du type « portent-ils un regard critique ? » attend une réponse nuancée, pas un verdict.</span></button>
      <button class="flash" type="button" aria-expanded="false"><span class="flash__recto">Longueur de l'essai ?</span><span class="flash__hint">cliquer pour révéler</span><span class="flash__verso">1 page et demie à 2 pages. Amorce courte, problématique, 2 ou 3 parties, conclusion qui tranche.</span></button>
    </div>
  </section>

  <section class="block">
    <h2 class="block__title"><span class="ic">?</span> Quiz de rappel</h2>
    <div class="quiz" data-quiz="express"></div>
  </section>
  `
},
{
  id: 'epreuve',
  num: '01',
  title: 'L\'épreuve',
  tagline: 'Cadrage exact : ce que demande le sujet, ce que vaut chaque partie, comment sont construits les corpus. Aucune zone d\'ombre avant de réviser.',
  html: `
  <section class="block">
    <h2 class="block__title"><span class="ic">◆</span> Ce qui a changé en 2025</h2>
    <div class="card">
      <h3>Une épreuve refondue, pas aménagée</h3>
      <p>L'arrêté du <strong>13 juillet 2023</strong> (JORF du 04/08/2023) a réécrit l'épreuve de Culture générale et expression pour la session <strong>2025</strong>. Le format « synthèse de documents » encore présent dans les annales et les fiches de révision est <strong>hors sujet</strong>.</p>
      <dl class="kv">
        <dt>Avant 2025</dt><dd>Synthèse de documents /40 + écriture personnelle /20, 4 h, note ramenée sur 20.</dd>
        <dt>Depuis 2025</dt><dd>Questions sur le corpus /10 + essai /10, 3 h, note directe sur 20.</dd>
        <dt>Conséquence</dt><dd>Le travail d'écriture change : on ne fond plus 3 documents en un texte neutre, on <strong>répond à des questions</strong> puis on <strong>défend une position</strong>.</dd>
      </dl>
      <p class="hint">Seules les annales 2025 et 2026 sont représentatives du format. Tout le reste sert seulement de réservoir de thèmes.</p>
    </div>

    <div class="card">
      <h3>La nature des documents, et ce qu'on attend de chacun</h3>
      <ul>
        <li><strong>Texte littéraire</strong> (roman, essai, théâtre) : on attend une lecture analytique. Repérer la thèse, le registre, les procédés d'écriture, et le point de vue de l'auteur.</li>
        <li><strong>Texte non littéraire</strong> (article de presse, discours, document institutionnel) : on attend l'identification du locuteur, du destinataire, de l'intention et du degré d'objectivité.</li>
        <li><strong>Iconographie</strong> (peinture, photographie, publicité, affiche) : décrire sans interpréter trop vite, puis interpréter. Ce que montre l'image, ce qu'elle cache, ce qu'elle veut faire croire.</li>
        <li><strong>Tableau statistique</strong> : lire les unités et la source avant les chiffres, repérer la tendance, et surtout ce que le tableau <strong>ne dit pas</strong>.</li>
      </ul>
      <p>Chaque document est annoté au brouillon en six lignes : nature, date, auteur ou émetteur, thèse, procédés, exemples.</p>
    </div>

    <div class="card">
      <h3>Ce que le correcteur note vraiment</h3>
      <ol class="steps">
        <li><strong>La compréhension</strong> : as-tu identifié la thèse réelle de chaque document, pas son sujet ?</li>
        <li><strong>La mise en relation</strong> : les documents dialoguent-ils dans ta copie, ou restent-ils côte à côte ?</li>
        <li><strong>L'analyse</strong> : nommes-tu les procédés, ou paraphrases-tu le texte ?</li>
        <li><strong>L'argumentation personnelle</strong> : l'essai défend une position identifiable, avec des exemples précis.</li>
        <li><strong>La langue</strong> : elle est notée dans les deux parties. Une copie dense mais fautive perd plus qu'elle ne gagne.</li>
      </ol>
    </div>
  </section>

  <section class="block">
    <h2 class="block__title"><span class="ic">⚠</span> Les pièges qui coûtent des points</h2>
    <div class="card">
      <div class="trap"><span class="trap__flag">format</span><p>Réviser avec une fiche de « synthèse 4 h /60 ». L'épreuve dure 3 h et vaut /20 depuis 2025. <span class="fix">Travailler uniquement sur des sujets 2025 et 2026.</span></p></div>
      <div class="trap"><span class="trap__flag">temps</span><p>Passer 2 h sur les questions parce qu'elles « rapportent ». Les deux parties valent 10 points chacune : 1 h 25 maximum sur la partie 1. <span class="fix">Regarder la montre à 1 h 05 de la fin.</span></p></div>
      <div class="trap"><span class="trap__flag">thèse</span><p>Confondre le <em>sujet</em> du document et sa <em>thèse</em>. « Ce texte parle des fake news » n'est pas une thèse. <span class="fix">Formuler la thèse en une phrase qui pourrait être contestée.</span></p></div>
      <div class="trap"><span class="trap__flag">corpus</span><p>Traiter les documents dans l'ordre 1 → 2 → 3 comme un questionnaire. <span class="fix">Répondre à la question posée, en convoquant les documents qui la servent.</span></p></div>
      <div class="trap"><span class="trap__flag">essai</span><p>Choisir le sujet qui « inspire » le plus. On prend celui pour lequel on a <strong>immédiatement</strong> trois exemples précis. <span class="fix">Décision en 2 minutes, pas en 10.</span></p></div>
      <div class="trap"><span class="trap__flag">langue</span><p>Sacrifier la relecture parce que « le fond compte plus ». La langue est notée dans les deux parties et une copie illisible perd des points sur chaque question. <span class="fix">10 min de relecture sanctuarisées.</span></p></div>
    </div>
  </section>

  <section class="block">
    <h2 class="block__title"><span class="ic">↻</span> Cartes de rappel</h2>
    <div class="flashdeck">
      <button class="flash" type="button" aria-expanded="false"><span class="flash__recto">Depuis quelle session le nouveau format s'applique-t-il ?</span><span class="flash__hint">cliquer pour révéler</span><span class="flash__verso">Session 2025, par l'arrêté du 13 juillet 2023 publié au JORF du 04/08/2023.</span></button>
      <button class="flash" type="button" aria-expanded="false"><span class="flash__recto">Combien de documents dans le corpus ?</span><span class="flash__hint">cliquer pour révéler</span><span class="flash__verso">2 à 3, de nature différente : littéraire, non littéraire, iconographie, tableau statistique.</span></button>
      <button class="flash" type="button" aria-expanded="false"><span class="flash__recto">Que fait-on d'une iconographie ?</span><span class="flash__hint">cliquer pour révéler</span><span class="flash__verso">Décrire d'abord (ce qui est représenté, le cadrage, les couleurs), interpréter ensuite (ce que l'image veut faire croire).</span></button>
      <button class="flash" type="button" aria-expanded="false"><span class="flash__recto">Que fait-on d'un tableau statistique ?</span><span class="flash__hint">cliquer pour révéler</span><span class="flash__verso">Unités et source d'abord, tendance ensuite, et surtout ce que le tableau ne dit pas.</span></button>
      <button class="flash" type="button" aria-expanded="false"><span class="flash__recto">Quel est le vrai risque d'une bonne partie 1 ?</span><span class="flash__hint">cliquer pour révéler</span><span class="flash__verso">Manger le temps de l'essai. 10 points contre 10 points : la partie 1 plafonne à 1 h 25.</span></button>
      <button class="flash" type="button" aria-expanded="false"><span class="flash__recto">Comment reconnaître une thèse ?</span><span class="flash__hint">cliquer pour révéler</span><span class="flash__verso">Elle peut être contestée. Si ta phrase ne peut pas être contredite, c'est un sujet, pas une thèse.</span></button>
    </div>
  </section>
  `
},
{
  id: 'questions',
  num: '02',
  title: 'Questions /10',
  tagline: 'La partie qui se rate par méthode, pas par manque de lecture. Six recettes, une réponse modèle rédigée, et les verbes de consigne décodés.',
  html: `
  <section class="block">
    <h2 class="block__title"><span class="ic">▸</span> Les recettes</h2>

    <div class="recette">
      <span class="recette__tag">Recette 1 · Annoter le corpus</span>
      <h3>Lire les 3 documents en 20 minutes, sans écrire sur la copie</h3>
      <p class="recette__when"><strong>Quand :</strong> toujours, dès la distribution du sujet. C'est la seule phase où l'on a le droit de ne rien produire.</p>
      <ol class="steps">
        <li><strong>Survole chaque document 30 secondes</strong> : titre, source, date, première et dernière phrase. Le sujet du corpus apparaît immédiatement.</li>
        <li><strong>Lis intégralement</strong> en annotant dans la marge : ce que l'auteur <em>affirme</em> (thèse), et <em>comment</em> il le fait (procédé).</li>
        <li><strong>Note six informations par document</strong> : nature, date, auteur ou émetteur, thèse en une phrase, deux procédés, un exemple.</li>
        <li><strong>Cherche le désaccord</strong> entre documents : qui contredit qui, sur quoi exactement. C'est le matériau de la question de confrontation.</li>
      </ol>
      <div class="ex">
        <span class="ex__tag">Grille d'annotation · à recopier au brouillon</span>
        <span class="formula">DOC 1 — article de presse, 2024, Le Monde
thèse  : le fact-checking ne convainc pas, il conforte
procédés : étude citée, chiffre, concession au début
exemple : lecteurs qui persistent malgré le démenti

DOC 2 — extrait de roman, Orwell, 1984
thèse  : le pouvoir réécrit le passé pour rendre le faux vrai
procédés : paradoxe, passé composé de vérité officielle
exemple : « qui contrôle le passé contrôle le futur »</span>
      </div>
      <p class="ctrl"><strong>Contrôle en 5 secondes :</strong> si tu ne peux pas formuler la thèse de chaque document en une phrase contestable, tu n'as pas lu, tu as survolé.</p>
      <p class="blocage"><strong>Si ça bloque :</strong> un document reste opaque. Cherche sa <em>dernière phrase</em> : c'est presque toujours la conclusion, donc la thèse.</p>
    </div>

    <div class="recette">
      <span class="recette__tag">Recette 2 · Décoder la consigne</span>
      <h3>Chaque verbe de consigne appelle une forme de réponse différente</h3>
      <p class="recette__when"><strong>Quand :</strong> juste après la lecture, avant d'écrire. Surligner le verbe évite le hors-sujet le plus coûteux.</p>
      <ol class="steps">
        <li><strong>« Étudiez / analysez »</strong> : relever des procédés et dire leur effet. Pas de résumé.</li>
        <li><strong>« Comparez / confrontez »</strong> : deux documents au minimum, une phrase qui dit convergence <em>et</em> divergence.</li>
        <li><strong>« Montrez que »</strong> : la thèse est déjà donnée, tu dois la prouver par des citations. Ne discute pas la thèse, administre la preuve.</li>
        <li><strong>« Expliquez en quoi »</strong> : identifier le lien de cause ou de conséquence entre deux éléments, puis le démontrer.</li>
        <li><strong>« Les documents portent-ils un regard critique ? »</strong> : réponse <strong>nuancée obligatoire</strong>. Oui pour tel aspect, non pour tel autre, et pourquoi.</li>
        <li><strong>« Quelle vision de… »</strong> : dégager une conception cohérente, pas faire la liste des idées du texte.</li>
      </ol>
      <div class="ex">
        <span class="ex__tag">Déroulé · la consigne la plus piégeuse</span>
        <p>« Les documents portent-ils un regard critique sur la diffusion du faux ? »</p>
        <p>Une réponse en « oui, car ils dénoncent la désinformation » plafonne à la moitié des points : elle ignore que le corpus contient souvent un document qui <em>célèbre</em> ou <em>banalise</em> le faux. La forme attendue :</p>
        <span class="formula">« Les deux premiers documents dénoncent la diffusion du faux,
mais le troisième en fait un usage assumé et revendiqué :
le regard critique est donc partagé, et il porte moins sur
le faux que sur ceux qui le fabriquent. »</span>
      </div>
      <p class="ctrl"><strong>Contrôle en 5 secondes :</strong> ta première phrase répond-elle au verbe, ou raconte-t-elle le document ?</p>
      <p class="blocage"><strong>Si ça bloque :</strong> transforme la consigne en question directe (« est-ce que… ? ») et réponds oui / non / en partie, avant de rédiger.</p>
    </div>

    <div class="recette">
      <span class="recette__tag">Recette 3 · Le relevé analysé</span>
      <h3>Transformer une citation en analyse, pas en paraphrase</h3>
      <p class="recette__when"><strong>Quand :</strong> une question ne porte que sur un seul document. Elle attend un relevé analysé, jamais un résumé.</p>
      <ol class="steps">
        <li><strong>Cite court</strong> et localise : « doc 1, l. 12 » ou « doc 2, dernière phrase ». Jamais un paragraphe entier recopié.</li>
        <li><strong>Nomme le procédé</strong> : métaphore, énumération, question rhétorique, antithèse, modalisation, chiffre, témoignage.</li>
        <li><strong>Dis l'effet produit</strong> : ce que cela fait au lecteur, ce que cela installe comme crédibilité ou comme doute.</li>
        <li><strong>Relie à la thèse</strong> du document en une demi-phrase : ce procédé sert l'idée que…</li>
      </ol>
      <div class="ex">
        <span class="ex__tag">Déroulé · paragraphe modèle rédigé</span>
        <p>« Dans le premier document, la journaliste ne décrit pas la rumeur : elle la fait entendre. L'énumération des témoignages anonymes (« on m'a dit que… », « tout le monde sait que… ») mime le mécanisme même de la propagation, et le lecteur éprouve la force d'entraînement du faux avant d'en comprendre la fausseté. La thèse du texte apparaît alors moins comme un constat que comme une démonstration : ce n'est pas le mensonge qui circule, c'est la confiance qu'on lui accorde. »</p>
      </div>
      <p class="ctrl"><strong>Contrôle en 5 secondes :</strong> si tu remplaces la citation par une autre du même document et que la phrase tient encore, tu n'as rien analysé.</p>
      <p class="blocage"><strong>Si ça bloque :</strong> commence par « l'auteur insiste sur… parce que… ». La structure force le procédé et l'effet.</p>
    </div>

    <div class="recette">
      <span class="recette__tag">Recette 4 · La confrontation</span>
      <h3>Traiter la question qui mobilise 2 ou 3 documents</h3>
      <p class="recette__when"><strong>Quand :</strong> une question emploie « comparez », « dans quelle mesure », « ces documents… ». C'est la question la mieux notée et la plus souvent ratée.</p>
      <ol class="steps">
        <li><strong>Annonce la ligne de partage</strong> dès la première phrase : sur quoi les documents s'accordent, sur quoi ils divergent.</li>
        <li><strong>Traite le point d'accord</strong> en une phrase, avec un appui court dans chaque document.</li>
        <li><strong>Traite le désaccord</strong> : ce que le doc A affirme et que le doc B contredit, et pourquoi (époque, statut de l'auteur, nature du document).</li>
        <li><strong>Termine par ce que la confrontation fait apparaître</strong> : une idée qu'aucun document ne donne seul. C'est ce qui distingue 8/10 de 5/10.</li>
        <li><strong>N'oublie aucun document</strong> : un document laissé de côté dans une question comparative coûte immédiatement des points.</li>
      </ol>
      <div class="ex">
        <span class="ex__tag">Déroulé · structure d'une réponse de confrontation</span>
        <span class="formula">1. Ligne de partage
   « Les trois documents s'accordent sur la puissance du faux,
    mais divergent sur sa valeur. »

2. Accord (1 phrase + 1 appui par document)

3. Désaccord (doc A contre doc C, avec la raison du désaccord)

4. Ce que la confrontation révèle
   « Le faux n'est dangereux que lorsqu'il est cru ; assumé
    comme fiction, il devient un instrument de connaissance. »</span>
      </div>
      <p class="ctrl"><strong>Contrôle en 5 secondes :</strong> compte les numéros de documents cités. S'il en manque un, la réponse n'est pas finie.</p>
      <p class="blocage"><strong>Si ça bloque :</strong> cherche le mot que les documents n'emploient pas de la même façon. Le désaccord se loge presque toujours dans une définition.</p>
    </div>

    <div class="recette">
      <span class="recette__tag">Recette 5 · Rédiger et calibrer</span>
      <h3>La forme attendue : un paragraphe, une réponse, 8 à 15 lignes</h3>
      <p class="recette__when"><strong>Quand :</strong> à chaque question, sans exception. La forme est notée autant que le contenu.</p>
      <ol class="steps">
        <li><strong>Phrase 1 : la réponse.</strong> Pas d'introduction, pas de « dans un premier temps ». Le correcteur doit savoir en une ligne si tu as compris.</li>
        <li><strong>Phrases 2 à 4 : les preuves.</strong> Citations courtes, localisées, analysées.</li>
        <li><strong>Phrase finale : la portée.</strong> Ce que cela change pour la question posée.</li>
        <li><strong>Zéro tiret, zéro liste.</strong> Un paragraphe rédigé, avec des connecteurs logiques.</li>
        <li><strong>Numérote la question</strong> et saute une ligne entre deux réponses. La lisibilité est un point gratuit.</li>
      </ol>
      <p class="ctrl"><strong>Contrôle en 5 secondes :</strong> 8 à 15 lignes. En dessous, la question n'est pas traitée ; au-dessus, l'essai est en danger.</p>
      <p class="blocage"><strong>Si ça bloque :</strong> tu ne sais pas quoi mettre en phrase 1 ? C'est que la thèse du document n'est pas encore formulée. Retourne à la recette 1.</p>
    </div>

    <div class="recette">
      <span class="recette__tag">Recette 6 · Réponse modèle complète</span>
      <h3>Une réponse de confrontation entièrement rédigée</h3>
      <p class="recette__when"><strong>Quand :</strong> pour calibrer la longueur et le ton avant l'épreuve. À lire une fois, puis à imiter sans recopier.</p>
      <div class="ex">
        <span class="ex__tag">Sujet fictif · « Comparez le rapport au faux dans les documents 1 et 3 »</span>
        <p>« Les deux documents s'accordent sur la force du faux, mais ils ne lui accordent pas la même valeur. Le premier, un article de presse de 2024, présente le faux comme une menace à endiguer : la journaliste cite une étude montrant qu'un démenti renforce parfois la croyance initiale, et le procédé du chiffre (« 43 % des lecteurs ») transforme l'intuition en évidence mesurable. Le troisième document, un extrait d'essai, prend le contrepied : Umberto Eco y décrit des villages factices que des touristes visitent en connaissance de cause, et l'ironie du texte (« on y trouve de l'authentique en toc ») fait du faux non plus un danger mais un produit culturel. Le désaccord ne porte donc pas sur l'existence du faux, mais sur le statut de celui qui y croit : lecteur trompé pour l'un, consommateur complice pour l'autre. La confrontation éclaire ainsi une distinction qu'aucun des deux textes ne formule seul : le faux n'est pas un problème de vérité, c'est un problème de crédulité consentie. »</p>
      </div>
      <p class="hint">Longueur : 12 lignes. Structure : accord → désaccord → ce que la confrontation révèle. Aucune liste, deux citations localisées, une analyse par citation.</p>
    </div>
  </section>

  <section class="block">
    <h2 class="block__title"><span class="ic">⚠</span> Les pièges</h2>
    <div class="card">
      <div class="trap"><span class="trap__flag">questionnaire</span><p>Traiter la partie 1 comme une compréhension de texte. Un relevé exact mais sans mise en relation plafonne à la moitié des points. <span class="fix">Chaque réponse doit contenir au moins une mise en relation ou une analyse.</span></p></div>
      <div class="trap"><span class="trap__flag">paraphrase</span><p>Reformuler le document avec d'autres mots. « L'auteur dit que les fake news sont dangereuses » n'est pas une analyse. <span class="fix">Nommer le procédé et son effet.</span></p></div>
      <div class="trap"><span class="trap__flag">liste</span><p>Répondre en tirets ou en « 1) 2) 3) ». La forme attendue est un paragraphe rédigé. <span class="fix">Un connecteur logique entre chaque idée.</span></p></div>
      <div class="trap"><span class="trap__flag">citation</span><p>Citer sans numéro de document ni ligne. Le correcteur ne peut pas vérifier, donc ne crédite pas. <span class="fix">Toujours « doc n, l. x ».</span></p></div>
      <div class="trap"><span class="trap__flag">oui/non</span><p>Répondre par un verdict sec à une question qui demande une nuance. <span class="fix">Oui pour tel aspect, non pour tel autre, puis la raison.</span></p></div>
      <div class="trap"><span class="trap__flag">oubli</span><p>Laisser un document de côté dans une question comparative. C'est une faute immédiatement repérée. <span class="fix">Cocher mentalement chaque numéro cité avant de tourner la page.</span></p></div>
    </div>
  </section>

  <section class="block">
    <h2 class="block__title"><span class="ic">?</span> Quiz de rappel</h2>
    <div class="quiz" data-quiz="questions"></div>
  </section>
  `
},
{
  id: 'essai',
  num: '03',
  title: 'Essai /10',
  tagline: 'Dix points, 1 h 05, deux sujets au choix. La partie où l\'on gagne ou perd la mention : choix du sujet, structure, exemples d\'origines différentes, conclusion qui tranche.',
  html: `
  <section class="block">
    <h2 class="block__title"><span class="ic">▸</span> Les recettes</h2>

    <div class="recette">
      <span class="recette__tag">Recette 1 · Choisir le sujet</span>
      <h3>Décider en 2 minutes, pas en 10</h3>
      <p class="recette__when"><strong>Quand :</strong> immédiatement après la partie 1, avant toute écriture.</p>
      <ol class="steps">
        <li><strong>Lis les deux sujets une seule fois</strong>, en entier, avant de trancher. Les lire trois fois est déjà un signe de mauvais choix.</li>
        <li><strong>Test des trois exemples</strong> : pour chaque sujet, écris au brouillon trois exemples précis en 60 secondes. Celui qui en produit trois immédiatement gagne.</li>
        <li><strong>Ignore l'inspiration.</strong> Un sujet passionnant sans exemples datés vaut moins qu'un sujet tiède avec trois références solides.</li>
        <li><strong>Vérifie le verbe</strong> : « peut-on », « dans quelle mesure », « le faux est-il… ». Le verbe impose le type de plan.</li>
      </ol>
      <p class="ctrl"><strong>Contrôle en 5 secondes :</strong> si tu hésites encore après 2 minutes, prends celui pour lequel tu as déjà deux exemples écrits.</p>
      <p class="blocage"><strong>Si ça bloque :</strong> aucun des deux ne produit trois exemples. Prends celui dont le corpus parle le plus : les documents te fourniront le troisième exemple.</p>
    </div>

    <div class="recette">
      <span class="recette__tag">Recette 2 · La structure</span>
      <h3>Amorce, problématique, annonce : les trois premières phrases décident de la note</h3>
      <p class="recette__when"><strong>Quand :</strong> toujours. Le correcteur lit ces trois phrases en premier et elles conditionnent sa lecture du reste.</p>
      <ol class="steps">
        <li><strong>Amorce (2 phrases max)</strong> : un fait daté, une tension, une scène. Jamais « depuis la nuit des temps » ni « de nos jours, la société… ».</li>
        <li><strong>Problématique</strong> : une question qui mérite une réponse, formulée avec les mots du sujet. Pas de « quels sont les enjeux ? ».</li>
        <li><strong>Annonce du plan</strong> : deux ou trois parties, dites en une phrase, sans « dans un premier temps nous verrons ». Annoncer les idées, pas la mécanique.</li>
        <li><strong>Développement</strong> : un paragraphe = un argument + un exemple précis + une phrase qui relie à la thèse.</li>
        <li><strong>Conclusion</strong> : une position assumée, pas un résumé. Une phrase d'ouverture vers une question voisine est un bonus, pas une obligation.</li>
      </ol>
      <div class="ex">
        <span class="ex__tag">Déroulé · squelette type</span>
        <span class="formula">Amorce        En mars 2022, une vidéo du président ukrainien
              appelant à capituler circulait avant d'être démentie.
Problématique  Le faux est-il seulement une erreur à corriger,
              ou une force qui produit du réel ?
Annonce        Le faux trompe quand il imite le vrai ; il révèle
              quand il est assumé ; il se vend quand il devient
              un produit.
Partie 1      Tromper : imitation des codes du vrai (1984, deepfake)
Partie 2      Révéler : fiction et mimésis (Magritte, Aragon)
Partie 3      Vendre : hyperréalité, réputation (Eco, Theranos)
Conclusion    Position tranchée + ce que cela implique.</span>
      </div>
      <p class="ctrl"><strong>Contrôle en 5 secondes :</strong> ton annonce contient-elle les mots des parties ? Si non, le plan n'est pas prêt.</p>
      <p class="blocage"><strong>Si ça bloque :</strong> tu n'as pas de problématique. Prends le sujet, transforme-le en « est-ce que… », puis en « dans quelle mesure… » : la deuxième formulation est presque toujours la bonne.</p>
    </div>

    <div class="recette">
      <span class="recette__tag">Recette 3 · La triade d'exemples</span>
      <h3>Trois arguments, trois origines différentes, chacun exploité en une phrase</h3>
      <p class="recette__when"><strong>Quand :</strong> à chaque paragraphe de développement. C'est le critère de notation le plus discriminant.</p>
      <ol class="steps">
        <li><strong>Une œuvre littéraire ou étudiée en cours</strong> : c'est le critère qui départage les copies. Elle doit être citée précisément, pas seulement nommée.</li>
        <li><strong>Un fait daté et vérifiable</strong> : date, acteur, conséquence. Un fait sans date est une rumeur de plus.</li>
        <li><strong>Un document du corpus</strong> : il prouve que tu as lu le sujet, et il est déjà analysé.</li>
        <li><strong>Exploite chaque exemple en une phrase</strong> : référence + ce qu'elle prouve. Un catalogue de noms non exploités est pénalisé.</li>
      </ol>
      <div class="ex">
        <span class="ex__tag">Déroulé · exemple exploité vs catalogue</span>
        <p><strong>Catalogue (pénalisé) :</strong> « On peut penser à Orwell, à Arendt, à Eco, ou encore à Baudrillard. »</p>
        <p><strong>Exploité (noté) :</strong> « Dans 1984, la novlangue ne supprime pas les mots : elle les réduit jusqu'à rendre la contestation impensable, ce qui montre que le faux le plus efficace n'est pas celui qu'on croit, mais celui avec lequel on parle. »</p>
      </div>
      <p class="ctrl"><strong>Contrôle en 5 secondes :</strong> chaque nom de ta copie est-il suivi d'une phrase qui dit ce qu'il prouve ? Sinon, coupe-le.</p>
      <p class="blocage"><strong>Si ça bloque :</strong> tu n'as que des exemples littéraires. Ajoute un fait daté : Protocoles des Sages de Sion (1903), Wakefield (1998), Theranos (2015), deepfake Zelensky (2022).</p>
    </div>

    <div class="recette">
      <span class="recette__tag">Recette 4 · Trois plans disponibles</span>
      <h3>Choisir un plan en fonction du verbe du sujet</h3>
      <p class="recette__when"><strong>Quand :</strong> après la problématique. Le plan se déduit du sujet, il ne s'invente pas.</p>
      <ol class="steps">
        <li><strong>Plan dialectique</strong> (thèse / antithèse / dépassement) — pour « le faux est-il seulement nuisible ? ». Le dépassement doit apporter une idée neuve, pas un compromis mou.</li>
        <li><strong>Plan thématique par fonctions</strong> — pour « à quoi sert le faux ? » : tromper, révéler, vendre. Trois fonctions, trois parties.</li>
        <li><strong>Plan par acteurs</strong> — pour « qui fait le faux ? » : celui qui le fabrique, celui qui le diffuse, celui qui le croit. Utile quand le sujet parle de responsabilité.</li>
        <li><strong>Écarte le plan chronologique</strong> (« avant Internet / avec Internet ») : il raconte une histoire au lieu de démontrer.</li>
      </ol>
      <div class="ex">
        <span class="ex__tag">Déroulé · application au thème 2027</span>
        <span class="formula">« Le faux est-il l'ennemi du vrai ? »
→ dialectique : il le menace / il le révèle en creux
  / il le produit (le vrai n'existe que par contraste)

« À quoi sert le faux ? »
→ thématique : tromper, révéler, vendre

« Qui est responsable du faux ? »
→ acteurs : le fabricant, le diffuseur, le croyant</span>
      </div>
      <p class="ctrl"><strong>Contrôle en 5 secondes :</strong> chaque partie répond-elle à la problématique, ou seulement au sujet ?</p>
      <p class="blocage"><strong>Si ça bloque :</strong> tu tournes en rond avec deux idées. Cherche la troisième en te demandant « et si l'inverse était vrai ? ».</p>
    </div>

    <div class="recette">
      <span class="recette__tag">Recette 5 · La conclusion qui tranche</span>
      <h3>Nuancer n'est pas s'abstenir</h3>
      <p class="recette__when"><strong>Quand :</strong> les 5 dernières minutes de l'essai. C'est la phrase que le correcteur retient.</p>
      <ol class="steps">
        <li><strong>Reprends la réponse en une phrase</strong>, sans répéter mot pour mot l'annonce.</li>
        <li><strong>Prends position</strong> : « le faux n'est dangereux que lorsqu'il est cru » est une position. « Le faux a des avantages et des inconvénients » n'en est pas une.</li>
        <li><strong>Ouvre sur une conséquence</strong> concrète ou une question voisine, en une phrase maximum.</li>
        <li><strong>Bannis</strong> : « peut-être que », « on peut penser que », « chacun son avis ».</li>
      </ol>
      <div class="ex">
        <span class="ex__tag">Formules de conclusion utilisables</span>
        <span class="formula">« Le faux ne menace le vrai que là où le vrai n'est plus
 un travail mais une opinion. »

« Ce n'est donc pas le mensonge qu'il faut craindre,
 mais la vitesse à laquelle il devient crédible. »

« La fiction ne dit pas le faux : elle dit le vrai autrement,
 et c'est précisément ce que la désinformation ne fait pas. »</span>
      </div>
      <p class="ctrl"><strong>Contrôle en 5 secondes :</strong> ta dernière phrase pourrait-elle être contredite par quelqu'un ? Si non, ce n'est pas une position.</p>
      <p class="blocage"><strong>Si ça bloque :</strong> termine par « si … alors … » : la conditionnalité force la prise de position.</p>
    </div>

    <div class="recette">
      <span class="recette__tag">Recette 6 · Introduction modèle</span>
      <h3>Une introduction entièrement rédigée, à imiter</h3>
      <p class="recette__when"><strong>Quand :</strong> pour calibrer le ton et la longueur de l'amorce avant l'épreuve.</p>
      <div class="copy">Sujet : « Le faux est-il l'ennemi du vrai ? »

En mars 2022, une vidéo montrant le président ukrainien appeler à
déposer les armes a circulé pendant quelques heures avant d'être
démasquée : le faux n'avait pas eu besoin d'être cru longtemps pour
produire des effets réels.

On protège d'ordinaire le vrai en pourchassant le faux, comme si les
deux s'excluaient. Or la fiction, l'illusion théâtrale ou le trompe-l'œil
produisent de la connaissance sans jamais prétendre dire le vrai.
Le faux est-il donc l'ennemi du vrai, ou l'un des moyens par lesquels
le vrai se construit ?

Le faux menace le vrai lorsqu'il en imite les codes ; il le révèle
lorsqu'il est assumé comme fiction ; il finit par le remplacer
lorsqu'il devient un produit. C'est cette progression qu'il faut
examiner.</div>
      <p class="hint">13 lignes. Amorce factuelle et datée, problématique en deux temps, annonce qui contient les trois parties. Aucune formule creuse.</p>
    </div>
  </section>

  <section class="block">
    <h2 class="block__title"><span class="ic">◆</span> Banque de problématiques</h2>
    <div class="card">
      <h3>Six formulations réutilisables sur le thème</h3>
      <ul>
        <li>Le faux est-il l'ennemi du vrai, ou l'une des conditions de sa production ?</li>
        <li>Peut-on nier un fait sans se tromper soi-même ?</li>
        <li>La fiction ment-elle, ou dit-elle le vrai autrement ?</li>
        <li>Le faux a-t-il une valeur, économique ou sociale ?</li>
        <li>Qui est responsable du faux : celui qui le fabrique, celui qui le diffuse, ou celui qui le croit ?</li>
        <li>La technique rend-elle le faux plus dangereux, ou seulement plus rapide ?</li>
      </ul>
      <p class="hint">Choisis-en une, reformule-la avec les mots exacts du sujet, et garde-la sous les yeux pendant toute la rédaction.</p>
    </div>
  </section>

  <section class="block">
    <h2 class="block__title"><span class="ic">⚠</span> Les pièges</h2>
    <div class="card">
      <div class="trap"><span class="trap__flag">choix</span><p>Prendre le sujet qui inspire le plus. <span class="fix">Trois exemples écrits en 60 s, sinon on change.</span></p></div>
      <div class="trap"><span class="trap__flag">résumé</span><p>Raconter les documents du corpus dans l'essai. Le corpus sert d'exemple parmi d'autres, il n'est pas le sujet. <span class="fix">Un seul document cité, exploité en une phrase.</span></p></div>
      <div class="trap"><span class="trap__flag">je pense</span><p>« Je pense que », « selon moi », en boucle. La première personne est admise mais elle remplace l'argument, elle ne le porte pas. <span class="fix">Une seule marque de subjectivité, dans la conclusion.</span></p></div>
      <div class="trap"><span class="trap__flag">catalogue</span><p>Empiler des noms sans dire ce qu'ils prouvent. <span class="fix">Référence + ce qu'elle démontre, en une phrase.</span></p></div>
      <div class="trap"><span class="trap__flag">vague</span><p>« Les réseaux sociaux de nos jours… », « la technologie aujourd'hui… ». <span class="fix">Un fait daté, un acteur nommé, une conséquence.</span></p></div>
      <div class="trap"><span class="trap__flag">longueur</span><p>Quatre pages pour montrer qu'on a du contenu. <span class="fix">1 page et demie à 2 pages. La densité, pas le volume.</span></p></div>
    </div>
  </section>

  <section class="block">
    <h2 class="block__title"><span class="ic">?</span> Quiz de rappel</h2>
    <div class="quiz" data-quiz="essai"></div>
  </section>
  `
},
{
  id: 'theme',
  num: '04',
  title: 'Le thème',
  tagline: '« Le vrai du faux » : trois axes, une tension commune, douze citations prêtes à l\'emploi et six faits datés. De quoi remplir un essai sans inventer.',
  html: `
  <section class="block">
    <h2 class="block__title"><span class="ic">◆</span> Les trois axes</h2>

    <div class="card">
      <h3>Axe A · Le faux qui trompe</h3>
      <p>Désinformation, propagande, post-vérité, IA génératives, deepfakes, contrefaçon, rumeur.</p>
      <ul>
        <li><strong>Mécanisme</strong> : le faux est d'autant plus efficace qu'il <strong>imite les codes du vrai</strong> — une source crédible, une image, un témoignage, un chiffre.</li>
        <li><strong>Exemples</strong> : novlangue et doublethink dans <em>1984</em> · <em>Les Fausses nouvelles</em> (Bourdin / Le Bras) · <em>Propagande</em> (Colon) · la rumeur d'Orléans (Morin, 1969) · les raisins de Zeuxis (Pline) comme matrice antique de la duperie.</li>
        <li><strong>Idée-force</strong> : ce n'est pas le mensonge qui circule, c'est la <strong>confiance</strong> qu'on lui accorde.</li>
      </ul>
    </div>

    <div class="card">
      <h3>Axe B · Le faux qui révèle</h3>
      <p>Fiction, mimésis, mentir-vrai, illusion théâtrale, trompe-l'œil, suspension de l'incrédulité.</p>
      <ul>
        <li><strong>Mécanisme</strong> : le faux <strong>assumé</strong> ne trompe personne, et c'est précisément pour cela qu'il peut produire un vrai savoir.</li>
        <li><strong>Exemples</strong> : Aragon, <em>Le Mentir-vrai</em> · Pirandello, <em>Six personnages en quête d'auteur</em> · Magritte, <em>La Trahison des images</em> · Coleridge (suspension volontaire de l'incrédulité) · <em>Le Truman Show</em>.</li>
        <li><strong>Idée-force</strong> : la fiction ne ment pas, elle dévoile. Le faux assumé est un instrument de connaissance.</li>
      </ul>
    </div>

    <div class="card">
      <h3>Axe C · Le faux qui se vend</h3>
      <p>Authenticité, toc, contrefaçon, plagiat, hyperréalité, avatars, réputation numérique.</p>
      <ul>
        <li><strong>Mécanisme</strong> : le faux a une <strong>valeur marchande et sociale</strong>. L'original tire sa valeur du faux qui le menace.</li>
        <li><strong>Exemples</strong> : Eco, <em>La Guerre du faux</em> (villes factices, musées de cire) · <em>Illusions perdues</em> (presse et réputation) · <em>L'Adversaire</em> (Carrère : l'imposture intime) · Theranos · le marché du simili.</li>
        <li><strong>Idée-force</strong> : l'hyperréalité ne copie pas le réel, elle le remplace — et le public achète le remplacement.</li>
      </ul>
    </div>

    <div class="card">
      <h3>La tension commune aux trois axes</h3>
      <p>Le sujet ne demande pas « le faux est-il mauvais ». Il pose une tension : <strong>le faux trompe, mais le faux révèle aussi</strong>. Un essai qui ne garde qu'un côté du balancier perd la moitié des points de nuance.</p>
      <ul>
        <li><strong>Distinction à poser tôt</strong> : <em>vérité de fait</em> (ce qui a eu lieu, vérifiable) contre <em>opinion</em> (ce que je préfère croire). Arendt fournit le cadre.</li>
        <li><strong>Le faux n'est pas l'erreur</strong> : l'erreur est involontaire, le faux est fabriqué. C'est l'intention qui le définit.</li>
        <li><strong>La technique ne crée pas le faux</strong> : elle en change la vitesse et le coût. C'est le point de tous les sujets sur l'IA.</li>
      </ul>
    </div>
  </section>

  <section class="block">
    <h2 class="block__title"><span class="ic">❝</span> Douze citations exploitables</h2>
    <p class="hint">Chacune vient avec ce qu'elle prouve. Une citation non exploitée ne rapporte rien.</p>
    <div class="quote"><p>« Ceci n'est pas une pipe. »</p><cite>Magritte, La Trahison des images, 1929</cite><span class="use">Axe B. L'image n'est pas l'objet : nommer n'est pas être. Le faux assumé énonce lui-même sa nature, donc il ne trompe pas.</span></div>
    <div class="quote"><p>« Qui contrôle le passé contrôle le futur. Qui contrôle le présent contrôle le passé. »</p><cite>Orwell, 1984, slogan du Parti</cite><span class="use">Axe A. Le faux ne se contente pas de circuler : il réécrit les archives. La vérité de fait devient une question de pouvoir.</span></div>
    <div class="quote"><p>« Ne voyez-vous pas que le véritable but du novlangue est de rétrécir le champ de la pensée ? »</p><cite>Orwell, 1984, annexe sur le novlangue</cite><span class="use">Axe A. Le faux le plus efficace n'est pas celui qu'on croit, c'est celui avec lequel on parle. Il supprime la possibilité de contester.</span></div>
    <div class="quote"><p>« La liberté d'opinion est une farce si l'information sur les faits n'est pas garantie et si les faits ne font pas l'objet de débats publics. »</p><cite>Hannah Arendt, « Vérité et politique », 1964</cite><span class="use">Cadre conceptuel. Distingue vérité de fait et vérité rationnelle : nier un fait n'est pas une opinion, c'est une décision politique.</span></div>
    <div class="quote"><p>« Le simulacre n'est jamais ce qui cache la vérité : c'est la vérité qui cache qu'il n'y en a point. »</p><cite>Baudrillard, Simulacres et Simulation, 1981</cite><span class="use">Axe C. L'hyperréalité ne dissimule pas un original : elle le remplace. Utile pour l'IA générative et les avatars.</span></div>
    <div class="quote"><p>« Le 9 janvier 1993, Jean-Claude Romand a tué sa femme, ses enfants, ses parents, et tenté de se tuer lui-même. »</p><cite>Carrère, L'Adversaire, 2000</cite><span class="use">Axe C. L'imposture intime : dix-huit ans de mensonge quotidien, tenus par la seule crédibilité accordée par l'entourage.</span></div>
    <div class="quote"><p>« Le roi est nu ! »</p><cite>Andersen, Les Habits neufs de l'empereur, 1837</cite><span class="use">Axe A et contrepoint. Le faux tient par un accord collectif, et il s'effondre sur une seule phrase d'enfant. Le vrai comme courage.</span></div>
    <div class="quote"><p>« suspension volontaire de l'incrédulité »</p><cite>Coleridge, Biographia Literaria, 1817</cite><span class="use">Axe B. Le spectateur accepte le faux en connaissance de cause : c'est un contrat, pas une duperie. Différence radicale avec la désinformation.</span></div>
    <div class="quote"><p>« mentir-vrai »</p><cite>Aragon, Le Mentir-vrai, 1980</cite><span class="use">Axe B. La fiction dit le vrai par un autre chemin. Formule idéale pour l'essai sur « la fiction ment-elle ? ».</span></div>
    <div class="quote"><p>Le trompe-l'œil de Zeuxis : des raisins si vrais que les oiseaux viennent les picorer.</p><cite>Pline l'Ancien, Histoire naturelle, livre XXXV</cite><span class="use">Axe A, matrice antique. La perfection de l'imitation fait la force du faux. Sert d'ouverture historique à un essai.</span></div>
    <div class="quote"><p>Le village Potemkine : des façades peintes pour convaincre un souverain d'une prospérité inexistante.</p><cite>Récit traditionnel, attribué au voyage de Catherine II en 1787</cite><span class="use">Axe A et C. Le faux comme mise en scène destinée à un seul spectateur. Se transpose directement aux réseaux sociaux.</span></div>
    <div class="quote"><p>Le « marché cognitif » : sur Internet, l'information vraie et l'information fausse sont en concurrence sur le même marché, sans avantage pour la vraie.</p><cite>Gérald Bronner, La Démocratie des crédules, 2013</cite><span class="use">Axe A. Explique pourquoi le démenti arrive trop tard : la croyance a déjà trouvé son public.</span></div>
  </section>

  <section class="block">
    <h2 class="block__title"><span class="ic">◇</span> Six faits datés</h2>
    <div class="card">
      <h3>Protocoles des Sages de Sion — 1903</h3>
      <p>Faux document antisémite fabriqué en Russie, présenté comme un procès-verbal de complot juif mondial. Démonté par le <em>Times</em> de Londres en <strong>1921</strong>, il continue de circuler un siècle plus tard.</p>
      <p class="hint">Prouve : la réfutation rationnelle ne suffit pas à arrêter un faux, parce qu'un faux ne convainc pas par sa preuve mais par son utilité.</p>
    </div>
    <div class="card">
      <h3>Wakefield / The Lancet — 1998, rétracté en 2010</h3>
      <p>Un article prétendant lier le vaccin ROR à l'autisme, fondé sur des données falsifiées. Rétracté douze ans plus tard ; la couverture vaccinale a durablement baissé, avec des épidémies mesurables.</p>
      <p class="hint">Prouve : le faux a un coût réel, sanitaire et collectif. C'est l'exemple à citer sur la responsabilité.</p>
    </div>
    <div class="card">
      <h3>Theranos — révélations 2015, inculpation 2018</h3>
      <p>Une start-up valorisée neuf milliards de dollars sur une technologie de dépistage sanguin qui ne fonctionnait pas. Révélée par le <em>Wall Street Journal</em> (John Carreyrou), fondatrice condamnée en 2022.</p>
      <p class="hint">Prouve : le faux emprunte le visage du progrès technique, et le journalisme d'enquête est un contre-pouvoir concret.</p>
    </div>
    <div class="card">
      <h3>Deepfake Zelensky — mars 2022</h3>
      <p>Une vidéo falsifiée montrant le président ukrainien appeler à déposer les armes, diffusée sur des sites piratés puis démentie en quelques heures.</p>
      <p class="hint">Prouve : ce n'est plus la crédibilité qui est attaquée, c'est la <strong>vitesse</strong>. Même démenti, le faux a agi.</p>
    </div>
    <div class="card">
      <h3>La rumeur d'Orléans — 1969</h3>
      <p>Edgar Morin étudie la rumeur d'enlèvements de jeunes femmes dans les cabines d'essayage de grandes surfaces : entièrement fausse, elle révèle les peurs réelles d'une époque.</p>
      <p class="hint">Prouve : un faux dit toujours quelque chose de vrai sur ceux qui le croient. C'est l'axe B appliqué à la sociologie.</p>
    </div>
    <div class="card">
      <h3>Spotlight — 2015, et le journalisme de vérification</h3>
      <p>Le film retrace l'enquête du <em>Boston Globe</em> sur l'Église de Boston. Côté français : les Décodeurs du <em>Monde</em>, AFP Factuel, CheckNews.</p>
      <p class="hint">Contrepoint obligatoire : le vrai est un <strong>travail</strong>, pas un état. Sans contre-exemple, l'essai devient un réquisitoire et perd les points de nuance.</p>
    </div>
  </section>

  <section class="block">
    <h2 class="block__title"><span class="ic">?</span> Quiz de rappel</h2>
    <div class="quiz" data-quiz="theme"></div>
  </section>
  `
},
{
  id: 'drill',
  num: '05',
  title: 'Entraînement',
  tagline: 'Chronomètre 3 h calé sur les quatre phases officielles, checklist de relecture et quiz de contrôle. À utiliser en conditions réelles.',
  html: `
  <section class="block">
    <h2 class="block__title"><span class="ic">▶</span> Chronomètre d'épreuve</h2>
    <div class="timer" id="cgeTimer">
      <div class="timer__phase" id="timerPhase">Phase 1 · Lecture et annotation</div>
      <div class="timer__clock" id="timerClock">20:00</div>
      <div class="timer__hint" id="timerHint">Nature, date, auteur, thèse, procédés, exemples. Rien sur la copie.</div>
      <div class="timer__bar"><div class="timer__fill" id="timerFill"></div></div>
      <div class="timer__actions">
        <button class="btn" type="button" id="timerStart">Démarrer</button>
        <button class="btn btn--ghost" type="button" id="timerNext">Phase suivante</button>
        <button class="btn btn--ghost" type="button" id="timerReset">Réinitialiser</button>
      </div>
    </div>
    <p class="hint">Phases : 20 min lecture · 1 h 25 questions · 1 h 05 essai · 10 min relecture. Le chrono te prévient en changeant de couleur.</p>
  </section>

  <section class="block">
    <h2 class="block__title"><span class="ic">✓</span> Checklist de relecture</h2>
    <div class="card">
      <h3>Les 8 vérifications des 10 dernières minutes</h3>
      <ol class="steps">
        <li>Chaque question porte un numéro et commence par une phrase de réponse.</li>
        <li>Aucune réponse ne dépasse 15 lignes ; aucune ne descend sous 8.</li>
        <li>Chaque citation est suivie d'un numéro de document.</li>
        <li>La question de confrontation cite bien tous les documents concernés.</li>
        <li>L'essai a une amorce, une problématique, une annonce, et une conclusion qui tranche.</li>
        <li>Chaque nom propre est suivi de ce qu'il prouve.</li>
        <li>Les accords sujet-verbe et les participes passés des trois dernières lignes sont relus en priorité.</li>
        <li>Aucun « je pense que » dans le développement.</li>
      </ol>
    </div>
  </section>

  <section class="block">
    <h2 class="block__title"><span class="ic">?</span> Quiz de contrôle final</h2>
    <div class="quiz" data-quiz="drill"></div>
  </section>
  `
}
];

/* ==========================================================================
   QUIZ · rappel actif
   ========================================================================== */
const QUIZZES = {
  express: [
    { q: 'Combien de points vaut la partie « questions sur le corpus » ?', opts: ['10 points', '20 points', '40 points', '6 points'], a: 0, why: 'Depuis la session 2025 : 10 points pour les questions, 10 points pour l\'essai, note directement sur 20.' },
    { q: 'Combien de sujets d\'essai sont proposés ?', opts: ['Un seul, imposé', 'Deux au choix', 'Trois au choix', 'Un par document'], a: 1, why: 'Deux sujets au choix, un seul à traiter. La décision doit prendre 2 minutes maximum.' },
    { q: 'Durée totale de l\'épreuve ?', opts: ['2 h', '3 h', '4 h', '5 h'], a: 1, why: '3 h depuis la refonte de 2025. L\'ancien format durait 4 h avec une synthèse.' },
    { q: 'Combien de temps pour les questions sur le corpus ?', opts: ['45 min', '1 h 05', '1 h 25', '2 h'], a: 2, why: '1 h 25 pour les questions, 1 h 05 pour l\'essai. Les deux parties valent 10 points : le temps doit être équilibré.' },
    { q: 'Longueur attendue d\'une réponse de partie 1 ?', opts: ['3 à 5 lignes', '8 à 15 lignes', '20 à 25 lignes', 'Une page complète'], a: 1, why: '8 à 15 lignes rédigées : assez pour analyser, pas assez pour manger le temps de l\'essai.' },
    { q: 'Que faire à 1 h 05 de la fin ?', opts: ['Finir les questions en cours', 'Commencer l\'essai quoi qu\'il arrive', 'Relire les questions', 'Recopier le plan de l\'essai'], a: 1, why: 'L\'essai vaut 10 points et ne se improvise pas en 20 minutes. On arrête les questions, même imparfaites.' }
  ],
  questions: [
    { q: 'Que signifie la consigne « Montrez que » ?', opts: ['Discuter la thèse', 'Prouver une thèse déjà donnée', 'Résumer le document', 'Comparer deux documents'], a: 1, why: '« Montrez que » fournit la thèse : le travail consiste à administrer la preuve par des citations, pas à discuter l\'idée.' },
    { q: 'Une question « Les documents portent-ils un regard critique ? » attend :', opts: ['Un oui ou un non net', 'Une réponse nuancée, aspect par aspect', 'Un résumé des trois documents', 'Une citation par document'], a: 1, why: 'Question fermée en apparence, réponse nuancée en réalité : oui pour tel aspect, non pour tel autre, et pourquoi.' },
    { q: 'La question de confrontation est celle qui :', opts: ['Porte sur un seul document', 'Mobilise 2 ou 3 documents', 'Demande une définition', 'Introduit le corpus'], a: 1, why: 'C\'est la mieux notée et la plus souvent ratée : elle exige de dire ce que la mise en relation révèle, pas seulement de comparer.' },
    { q: 'Que fait un relevé « analysé » ?', opts: ['Il recopie une citation', 'Il nomme le procédé et son effet', 'Il paraphrase le texte', 'Il liste les idées du document'], a: 1, why: 'Le procédé nommé et son effet sur le lecteur : c\'est la différence entre analyse et paraphrase.' },
    { q: 'Forme attendue pour une réponse ?', opts: ['Une liste à tirets', 'Un paragraphe rédigé', 'Un tableau', 'Un plan en deux parties'], a: 1, why: 'Un paragraphe rédigé avec des connecteurs. La forme est notée autant que le fond.' },
    { q: 'Comment citer correctement ?', opts: ['« L\'auteur dit que… »', '« Doc 1, l. 12 : … »', 'Une citation longue sans référence', 'De mémoire, sans guillemets'], a: 1, why: 'Numéro de document et ligne : le correcteur doit pouvoir vérifier, sinon il ne crédite pas.' },
    { q: 'Un document laissé de côté dans une question comparative :', opts: ['N\'a aucune importance', 'Coûte immédiatement des points', 'Est autorisé si la réponse est longue', 'Doit être mentionné en conclusion'], a: 1, why: 'Sur une consigne de comparaison, l\'omission d\'un document est repérée immédiatement et coûte des points.' },
    { q: 'Quel est le piège principal de la partie 1 ?', opts: ['Trop citer', 'Traiter la partie comme un questionnaire de compréhension', 'Écrire trop peu', 'Utiliser des connecteurs'], a: 1, why: 'Un relevé exact mais sans mise en relation plafonne à la moitié des points.' }
  ],
  essai: [
    { q: 'Sur quel critère choisir entre les deux sujets ?', opts: ['Celui qui inspire le plus', 'Celui pour lequel on a 3 exemples précis immédiatement', 'Le plus court', 'Le premier proposé'], a: 1, why: 'Test des trois exemples en 60 secondes. L\'inspiration ne remplit pas une copie, les références oui.' },
    { q: 'Longueur attendue de l\'essai ?', opts: ['Une demi-page', '1 page et demie à 2 pages', '4 pages', '5 pages'], a: 1, why: 'La densité compte, pas le volume. 1,5 à 2 pages suffisent si chaque exemple est exploité.' },
    { q: 'Les trois origines d\'exemples attendues :', opts: ['Trois œuvres littéraires', 'Une œuvre, un fait daté, un document du corpus', 'Trois faits d\'actualité', 'Trois citations'], a: 1, why: 'La variété des registres est explicitement valorisée : littéraire, factuel, corpus.' },
    { q: 'Un plan chronologique (« avant / avec Internet ») :', opts: ['Est recommandé', 'Raconte une histoire au lieu de démontrer', 'Est obligatoire sur le thème', 'Rapporte des points de nuance'], a: 1, why: 'Le plan doit répondre à la problématique. Le chronologique déroule un récit sans démontrer.' },
    { q: 'Que vaut « je pense que » répété dans le développement ?', opts: ['C\'est une preuve de subjectivité assumée', 'Il remplace l\'argument sans le porter', 'C\'est exigé par le programme', 'C\'est neutre'], a: 1, why: 'Une seule marque de subjectivité, dans la conclusion. Dans le développement, c\'est l\'argument qui doit porter.' },
    { q: 'Une conclusion qui tranche, c\'est :', opts: ['Un résumé des parties', 'Une position que quelqu\'un pourrait contredire', 'Une ouverture vers un autre sujet', 'Une citation finale'], a: 1, why: 'Si ta dernière phrase ne peut pas être contestée, ce n\'est pas une position. Nuancer n\'est pas s\'abstenir.' }
  ],
  theme: [
    { q: 'Quel axe correspond à la fiction qui révèle ?', opts: ['Axe A', 'Axe B', 'Axe C', 'Aucun'], a: 1, why: 'Axe B : le faux assumé (fiction, mimésis, mentir-vrai) produit un vrai savoir sans tromper personne.' },
    { q: '« Ceci n\'est pas une pipe » relève de quel axe ?', opts: ['Axe A', 'Axe B', 'Axe C', 'Hors thème'], a: 1, why: 'Magritte énonce lui-même que l\'image n\'est pas l\'objet : le faux s\'avoue, donc il ne trompe pas.' },
    { q: 'La novlangue de 1984 illustre surtout :', opts: ['La contrefaçon marchande', 'Le faux installé dans le langage', 'L\'hyperréalité', 'La suspension de l\'incrédulité'], a: 1, why: 'Axe A. Le faux le plus efficace n\'est pas celui qu\'on croit, c\'est celui avec lequel on parle.' },
    { q: 'Que distingue Arendt dans « Vérité et politique » ?', opts: ['Le vrai du beau', 'Vérité de fait et vérité rationnelle', 'Fiction et mensonge', 'Opinion publique et sondage'], a: 1, why: 'La vérité de fait (ce qui a eu lieu) n\'est pas une opinion : la nier est une décision politique, pas un point de vue.' },
    { q: 'Theranos prouve surtout :', opts: ['Que le faux finit toujours par être démasqué', 'Que le faux peut emprunter le visage du progrès technique', 'Que la presse ne sert à rien', 'Que l\'innovation est un mensonge'], a: 1, why: 'Neuf milliards de valorisation sur une technologie inexistante : le faux se pare de scientificité.' },
    { q: 'Le deepfake Zelensky de mars 2022 montre que :', opts: ['Le faux est plus crédible qu\'avant', 'La vitesse est devenue l\'arme principale', 'Les images ne trompent plus personne', 'Le démenti annule le faux'], a: 1, why: 'Le faux a agi avant d\'être démenti. Ce n\'est plus la crédibilité qui est attaquée, c\'est le temps de réaction.' },
    { q: 'La rumeur d\'Orléans (Morin, 1969) illustre :', opts: ['Un faux qui révèle des peurs réelles', 'Une contrefaçon industrielle', 'Une imposture intime', 'Un complot d\'État'], a: 0, why: 'Entièrement fausse, elle dit quelque chose de vrai sur la société qui l\'a crue : c\'est l\'axe B appliqué au social.' },
    { q: 'Pourquoi citer un contre-exemple (Spotlight, fact-checking) ?', opts: ['Pour remplir la copie', 'Pour éviter un réquisitoire et gagner les points de nuance', 'Pour montrer qu\'on lit la presse', 'Ce n\'est pas nécessaire'], a: 1, why: 'Le vrai est un travail, pas un état. Sans contrepoint, l\'essai perd les points de dialectique.' }
  ],
  drill: [
    { q: 'Dans quel ordre traiter les 3 h ?', opts: ['Essai puis questions', 'Lecture, questions, essai, relecture', 'Questions, essai, lecture', 'Relecture puis essai'], a: 1, why: '20 min lecture · 1 h 25 questions · 1 h 05 essai · 10 min relecture.' },
    { q: 'Le corpus comporte :', opts: ['Toujours 4 documents', '2 à 3 documents de nature différente', 'Un seul document long', 'Uniquement des textes'], a: 1, why: '2 à 3 documents : texte littéraire, texte non littéraire, iconographie, tableau statistique.' },
    { q: 'Face à un tableau statistique, on commence par :', opts: ['Les chiffres les plus gros', 'Les unités et la source', 'La conclusion', 'Comparer avec le texte'], a: 1, why: 'Unités et source d\'abord, puis tendance, puis ce que le tableau ne dit pas.' },
    { q: 'Une thèse se reconnaît à ce qu\'elle :', opts: ['Est longue', 'Peut être contestée', 'Cite un auteur', 'Résume le document'], a: 1, why: 'Si ta phrase ne peut pas être contredite, c\'est un sujet, pas une thèse.' },
    { q: 'Combien de temps pour choisir le sujet d\'essai ?', opts: ['2 minutes', '10 minutes', '20 minutes', 'Jusqu\'à inspiration'], a: 0, why: 'Deux minutes, test des trois exemples. Au-delà, le temps est pris sur la rédaction.' },
    { q: 'Que faire d\'un nom propre sans explication ?', opts: ['Le garder, ça fait savant', 'Le supprimer ou l\'exploiter en une phrase', 'Le mettre en citation', 'Le répéter en conclusion'], a: 1, why: 'Un catalogue de noms non exploités est pénalisé. Référence + ce qu\'elle prouve.' },
    { q: 'La synthèse de documents (/40) :', opts: ['Est toujours d\'actualité', 'N\'existe plus depuis 2025', 'Remplace l\'essai une année sur deux', 'Vaut 10 points'], a: 1, why: 'Supprimée par l\'arrêté du 13 juillet 2023, applicable dès la session 2025.' },
    { q: 'Le meilleur réflexe en fin d\'épreuve ?', opts: ['Ajouter des exemples', 'Relire les accords et les participes passés', 'Réécrire l\'introduction', 'Compter les mots'], a: 1, why: 'La langue est notée dans les deux parties. Les fautes d\'accord sont les plus visibles et les plus coûteuses.' }
  ]
};
