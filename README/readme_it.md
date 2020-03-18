
**Rivelatore COVID-19**

La nuova pandemia di coronavirus (a.k.a COVID-19) è iniziata lo scorso anno nel dicembre 2019 a Wuhan, in Cina. Il virus si è rapidamente diffuso nel resto del mondo e paesi come l'Italia, l'Iran e la Corea del Sud sono risultati tra i più colpiti.

I ricercatori di tutto il mondo stanno collaborando per analizzare il comportamento del virus e implementare nuove idee per superare questa crisi. Come molte persone potrebbero sapere, attualmente sono un dottorando presso l'Università dell'Australia Occidentale (University of Western Australia) e la mia specializzazione è nel campo dell'intelligenza artificiale (AI) e della visione artificiale (CV). Come uno di quei ricercatori disposti a fare qualcosa al riguardo, ho sentito il dovere di usare le mie capacità e collaborare con altri ricercatori per creare soluzioni a vantaggio di tutti noi.

Una settimana fa, ho visto per la prima volta la notizia che i componenti del test per il [COVID-19 sono scarsi e non possono essere fabbricati abbastanza velocemente](https://www.usatoday.com/story/news/2020/03/11/coronavirus-covid-19-response-hurt-by-shortage-testing-components/5013586002/). Questa situazione sta già causando una discreta ansia nella comunità. Nello stesso periodo, ho visto un altro post che spiegava come la Cina stesse usando sistemi basati sull'intelligenza artificiale per accelerare il processo di diagnosi di COVID-19 usando solo tomografie e radiografie. Tuttavia, questa tecnologia e i set di dati utilizzati non sono ancora stati resi pubblici. Credo fermamente che uno dei miei compiti come ricercatore sia quello di democratizzare l'uso dell'intelligenza artificiale, in particolare, quando è collegato ad applicazioni mediche. Per questo motivo, ho deciso di contribuire alla creazione della mia versione di un sistema basato sull'intelligenza artificiale in grado di rilevare casi COVID-19 rispetto al normale da scansioni TC e radiografie. Al momento, è stato molto difficile trovare dati sufficienti per replicare tali sistemi. Le linee guida cinesi hanno raccomandato le scansioni TC come metodo chiave nella diagnosi di COVID-19, finora ho però trovato più dati disponibili al pubblico usando le radiografie. Questo potrebbe cambiare in futuro grazie alla comunità internazionale e stimolare ricercatori come Andre Esteva, PhD, che solo una settimana fa ha iniziato a raccogliere le radiografie COVID-19, a rendere pubblicamente disponibile per la comunità scientifica dati utili.

**Rivelatore COVID-19 che utilizza l'intelligenza artificiale**

L'intelligenza artificiale potrebbe sembrare solo una parola in voga per te o qualcosa di molto complicato estratto da un libro di fantascienza. Tuttavia, l'IA è diventata una tecnologia matura con un enorme potenziale per risolvere molti problemi della vita reale. Ciò si ottiene utilizzando le reti neurali, che vengono create mettendo insieme i neuroni artificiali (sì, le reti neurali si rifanno al modello biologico del cervello). Questo è lo stesso tipo di tecnologia utilizzata in [auto a guida autonoma come Tesla](https://www.tesla.com/en_AU/autopilotAI) o per rilevare il [cancro al seno anche meglio dei medici](https://www.bloomberg.com/news/articles/2020-01-02/google-shows-ai-can-spot-breast-cancer-better-than-doctors).

Ho creato un modello di rete neurale in grado di prevedere con una precisione del 97,5% da una radiografia se un paziente presenta il virus COVID-19 o meno. Riguardo il mio modello, ha una sensibilità del 100% e una specificità del 94,95%. Tutto questo potrebbe sembrare veramente notevole! Tuttavia, questo modello è lontano dall'essere utilizzato su larga scala in qualsiasi ospedale. In realtà, sono consapevole che, in alcuni paesi, gli ospedali non sono autorizzati a utilizzare o prendere decisioni basate su prodotti che non sono stati adeguatamente testati. Per questo motivo, devo fare un’avvertenza prima di continuare:


**AVVERTENZA**: non utilizzare questo codice né prendere alcuna decisione medica in base al contenuto di questo post senza il consenso di un medico. Questo strumento è pensato come un modo per aiutare i medici ad accelerare il processo di triage o/e diagnosi. In nessun caso, intendiamo sostituire i medici. Si prega di utilizzare questo strumento a proprio rischio. Gli autori e i contributori di questo strumento non si assumono la responsabilità per qualsiasi uso improprio o conseguenze dell'uso di questo strumento o delle informazioni fornite.

**Ecco come puoi aiutare**

Sto cercando volontari che lavorino con me in questo progetto e, si spera, saremo in grado di fare la differenza e aiutare il mondo con il nostro contributo. Al momento ci sono alcuni governi e società private che stanno lavorando su questo problema, tuttavia, il mio obiettivo principale è quello di rendere il codice ed il contenuto disponibili a chiunque per scopi non commerciali. Voglio rendere questa tecnologia disponibile gratuitamente, in modo che possa essere utilizzata in qualsiasi parte del mondo e aiutare i medici in questi momenti difficili.

Traduttori e copyrighters: stiamo cercando persone in grado di tradurre questo post in diverse lingue. Inoltre, qualora ci fossero persone che potrebbero aiutarci a scrivere contenuti sarebbero molto apprezzate.

Medici: se conosci qualche medico o radiologo che è disposto a mettere a disposizione le proprie competenze per aiutarci a convalidare questo strumento e fornirci ulteriori spunti su come migliorarlo, faccelo sapere! Come utenti principali, abbiamo bisogno della loro competenza per migliorare questo progetto e renderlo di qualsiasi utilità.

Sviluppatori di software / mobile: potremmo creare un sito Web o un app mobile basata sulla nostra tecnologia che sia di facile utilizzo e che consentirà agli utenti di caricare radiografie (o scansioni TC in futuro) per fornire una diagnosi automatica. Abbiamo anche bisogno di persone che scrivano una documentazione adeguata al progetto.

Data Analyst/ Data Scientist / Data Engineers / Scientist : Il primo modello da me creato è lontano dall’essere sfruttato a pieno. Accetterò Pull Requests su Github ([https://github.com/elcronos/COVID_19](https://github.com/elcronos/COVID_19)) in modo che potrai aiutarci a sviluppare una migliore soluzione. Inoltre, nel futuro, altri tipi di dati o modelli potrebbero essere considerati. Il tuo contributo è quindi importante per lo sviluppo del rilevatore COVID-19.

Tutti gli altri: se conosci qualcuno tra i tuoi amici che ha le competenze richieste e potrebbe voler aiutare con il progetto ti prego di contattarmi. Se credi di potermi aiutare in altri modi non sopra citati, benissimo! Magari semplicemente condividendo questo progetto con altri potremmo raggiungere le persone utili per aiutarci.

**Su di me**

Il mio nome è Camilo Pestana, sono attualmente un dottorando dell’università dell’Australia Occidentale (University of Western Australia). Mi sto specializzando in visione artificiale e nell’uso dell’intelligenza artificiale per risolvere problemi.

**Contattaci**

Se vuoi aiutarci o collaborare in qualche modo a questo progetto ti prego di contattarmi via:

LinkedIn: [https://www.linkedin.com/in/camilo-pestana](https://www.linkedin.com/in/camilo-pestana/?locale=en_US)  
Email: [camilo.pestanacardeno@research.uwa.edu.au](mailto:camilo.pestanacardeno@research.uwa.edu.au)
