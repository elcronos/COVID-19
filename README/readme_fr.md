
Si vous avez décidé de contribuer ou de soutenir ce projet open-source, veuillez lire [ces instructions sur la manière dont vous pouvez aider et participer à cette initiative](../CONTRIBUTING.md). Veuillez envisager de nous rejoindre sur [Slack](https://join.slack.com/t/covid-19detector/shared_invite/zt-cw28jq9g-2FcPBD~zNRYLnVhr34hrRQ), qui sera le canal de communication officiel.

Si vous souhaitez en savoir plus sur ce projet, veuillez lire les informations ci-dessous, qui sont également disponibles dans d'autres langues :
  
* [اَلْعَرَبِيَّةُ‎](readme_ar.md)
* [Español](readme_es.md)
* [Italiano](readme_it.md)

### [**Informations pour les développeurs**](DEVELOPERS.md)

# Détecteur COVID-19
La nouvelle maladie à coronavirus (appelée COVID-19) a débuté l'année dernière en décembre 2019 à Wuhan, en Chine. Cependant, elle s'est rapidement étendue au reste du monde, d'autres pays comme l'Italie, l'Iran et l'Espagne étant parmi les plus touchés.

Des chercheurs du monde entier collaborent pour analyser le comportement du virus et mettre en œuvre de nouvelles idées pour surmonter cette crise. Je suis actuellement doctorant à l'Université d'Australie occidentale et ma spécialité est l'intelligence artificielle (IA) et la vision par ordinateur (CV). En tant que l'un de ces chercheurs désireux de faire quelque chose, je me suis senti obligé d'utiliser mes compétences et de collaborer avec d'autres chercheurs pour créer des solutions qui profitent à tous.

Il y a une semaine, j'ai vu pour la première fois aux actualités que les composants du test COVID-19 [sont en pénurie et qu'ils ne peuvent pas être fabriqués assez rapidement](https://www.usatoday.com/story/news/2020/03/11/coronavirus-covid-19-response-hurt-by-shortage-testing-components/5013586002/), ce qui provoque déjà une certaine anxiété dans la communauté. À peu près à la même époque, j'ai vu un autre article expliquant comment la Chine utilisait [des systèmes basés sur l'IA pour accélérer le processus de diagnostic de COVID-19 en utilisant uniquement des tomographies](https://www.bioworld.com/articles/433530-china-uses-ai-in-medical-imaging-to-speed-up-covid-19-diagnosis) et des rayons X. Toutefois, cette technologie et les ensembles de données utilisés n'ont pas encore été rendus publics. Je crois fermement que l'un de mes devoirs en tant que chercheur doctorant est de démocratiser l'utilisation de l'IA, en particulier lorsqu'elle est liée à des applications médicales. C'est pourquoi j'ai décidé d'y contribuer en créant ma propre version d'un système basé sur l'IA qui peut détecter les cas COVID-19 par rapport aux cas normaux à partir de tomodensitogrammes et de radiographies. Pour l'instant, il est très difficile de trouver suffisamment de données pour reproduire de tels systèmes. Les directives nationales chinoises ont recommandé les scanners CT comme une méthode clé pour diagnostiquer la COVID-19, cependant, jusqu'à présent, [j'ai trouvé plus de données accessibles au public en utilisant les rayons X](https://github.com/ieee8023/covid-chestxray-dataset/blob/master/README.md?fbclid=IwAR30yTGBr55WXdCngCoICDENHycmdL2bGwlvl1ckdZM-ucjGH10Uakz7khk). Mais cela pourrait changer à l'avenir grâce à la communauté internationale et à des chercheurs inspirants comme le Dr Andre Esteva, qui a commencé il y a une semaine à collecter des rayons X COVID-19 et à mettre ces données à la disposition de la communauté scientifique.

# Détecteur COVID-19 utilisant l'intelligence artificielle

L'intelligence artificielle peut vous sembler être un mot à la mode ou quelque chose de très compliqué sorti d'un livre de science-fiction. Cependant, l'IA est devenue une technologie mature avec un énorme potentiel pour résoudre de nombreux problèmes de la vie réelle. Pour ce faire, elle utilise des réseaux de neurones, qui sont créés en assemblant des neurones artificiels. (Oui, les réseaux neuronaux sont des modèles du cerveau inspirés de la biologie). C'est le même type de technologie qui est utilisé dans [les voitures à conduite autonome telles que Tesla](https://www.tesla.com/en_AU/autopilotAI) ou pour [détecter le cancer du sein plus efficacement que les médecins](https://www.bloomberg.com/news/articles/2020-01-02/google-shows-ai-can-spot-breast-cancer-better-than-doctors).

J'ai créé un modèle de réseau neuronal capable de prédire avec une précision de 97,5% à partir d'une radiographie si quelqu'un est porteur du virus COVID-19 ou non. Pour mon modèle, j'ai obtenu une sensibilité de 100 % et une spécificité de 94,95 %. Cela peut sembler très impressionnant ! Cependant, l'ensemble de données utilisé est très léger, mais nous avons actuellement des radiologues qui travaillent avec nous pour valider le modèle et conserver les ensembles de données. Donc, pour l'instant, ce modèle est loin d'être utilisable à l'échelle dans n'importe quel hôpital. En fait, je suis conscient que dans certains pays, les hôpitaux ne sont pas autorisés à utiliser ou à prendre des décisions basées sur des produits qui n'ont pas passé des normes d'essai strictes. C'est pourquoi je dois faire une mise en garde avant de continuer :

**AVERTISSEMENT:** Veuillez ne pas utiliser ce code ni prendre de décision médicale basée sur le contenu de ce post sans l'accord d'un médecin. Cet outil est conçu comme un moyen d'aider les médecins à accélérer le processus de triage ou/et de diagnostic. En aucun cas, nous n'avons l'intention de remplacer les médecins, mais plutôt de les aider grâce à un outil supplémentaire. Pensez à l'IA qui signifie "Intelligence Augmentée" ou "Intelligence Assistée". Veuillez utiliser cet outil à vos propres risques. Les auteurs et contributeurs de cet outil ne sont pas responsables de toute utilisation abusive ou de toute conséquence de l'utilisation de cet outil ou des informations fournies.

# Voici comment vous pouvez aider

Je recherche des volontaires pour travailler avec moi dans ce projet et j'espère que nous pourrons faire la différence et aider le monde grâce à notre contribution. Certains gouvernements et entreprises privées travaillent actuellement sur ce problème, mais mon objectif principal est de mettre le code et le contenu à la disposition de tous à des fins non commerciales. Je veux rendre cette technologie disponible gratuitement afin qu'elle puisse être utilisée partout dans le monde pour aider les médecins en ces temps difficiles.

**Traducteurs et rédacteurs:** Nous recherchons des personnes capables de traduire ce document en différentes langues. En outre, si des personnes peuvent nous aider à rédiger le contenu, nous apprécierions beaucoup.

**Médecins:** Si vous connaissez des médecins ou des radiologues qui sont capables et désireux d'apporter leur expertise pour nous aider à valider cet outil et nous donner plus d'indications sur la façon de l'améliorer, faites-le nous savoir ! En tant qu'utilisateurs principaux, nous avons besoin de leur expertise dans le domaine pour améliorer et rendre ce projet utile.

**Développeurs de logiciels/mobiles:** Nous pourrions créer un site web ou une application mobile fonctionnant avec notre technologie, qui soit convivial et qui permette aux utilisateurs de télécharger des radiographies (ou des tomodensitogrammes à l'avenir) pour donner un diagnostic automatique. Nous avons également besoin de personnes pour rédiger une documentation appropriée pour le projet.

**Data Analyst / Data Scientist / Data Engineers / Scientifique:** Ce premier modèle que j'ai créé est loin d'être optimisé. J'accepterai les demandes de tirage sur Github (https://github.com/elcronos/COVID-19) afin que vous puissiez nous aider à développer une meilleure solution. En outre, à l'avenir, d'autres types de données ou de modèles pourraient être envisagés. Votre contribution est donc importante pour le développement de base du détecteur COVID-19.

**Tous les autres:** Si vous connaissez quelqu'un dans vos amis qui a les compétences requises et qui pourrait vouloir aider à ce projet, veuillez me contacter. Si vous pensez pouvoir aider d'une autre manière qui n'a pas été mentionnée auparavant, c'est également très bien ! Peut-être qu'en partageant ce projet avec d'autres, nous pourrions atteindre les bonnes personnes pour nous aider.

# À PROPOS DE MOI

Je m'appelle Camilo Pestana. Je suis spécialisé dans la vision par ordinateur et j'utilise l'intelligence artificielle pour résoudre des problèmes intéressants.

# Contactez-nous

Si vous souhaitez nous aider ou collaborer d'une manière ou d'une autre à ce projet, veuillez me contacter via:

LinkedIn: [https://www.linkedin.com/in/camilo-pestana](https://www.linkedin.com/in/camilo-pestana/?locale=en_US)

E-mail: camilo.pestanacardeno@research.uwa.edu.au

# LICENCE
<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">COVID-19 Detector</span> par <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Camilo Pestana</span> est sous licence <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.

</div>
