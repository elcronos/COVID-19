**COVID-19 Detektor**
Die durch das neuartige Coronavirus (COVID-19) hervorgerufene Pandemie begann im Dezember 2019 in Wuhun, China. Allerdings verbreitete es sich seit dem rapide im Rest der Welt. Insbesondere Länder wie Italien, Iran und Spanien sind davon betroffen.  

Forscher auf der ganzen Welt arbeiten zusammen, um das Verhalten des Virus zu analysieren und neue Lösungsideen umzusetzen, um letztlich die Krise gemeinsam zu bewältigen. Ich bin derzeit Doktorand an der University of Western Australia wo ich mich in den Bereichen Künstliche Intelligenz (KI) und Maschinelles Sehen (Computer Vision) spezialisiere. Als einer der Forscher der etwas dagegen unternehmen möchte, sah ich es als meine Pflicht an, meine Fähigkeiten und Fertigkeiten zu nutzen und mit anderen Forschern zusammenzuarbeiten, um für unser aller Wohl Lösungen zu erarbeiten.

Vor knapp einer Woche wurde ich durch die Nachrichten darauf aufmerksam gemacht, dass COVID-19 Test Komponenten und Equipment Mangelware sind und nicht schnell genug produziert werden können, was schon jetzt zur Beunruhigung der Gesellschaft führt. In dieser Zeit sah ich einen weiteren Artikel in dem erklärt wurde, wie China AI basierte Systeme nutzte, um die COVID-19 Diagnosegeschwindigkeit mittels Tomographien und Röntgenaufnahmen zu beschleunigen. Leider wurden weder die von den Chinesen genutzten Technologien noch die genutzten vollständigen Datensätze der Allgemeinheit zur Verfügung gestellt. Eine meiner Aufgaben als Doktorand und Forscher ist es, die Nutzung von KI zu demokratisieren, insbesondere wenn es um die medizinische Anwendung geht. Aus diesem Grund habe ich mich entschlossen dabei zu helfen: In dem ich eine eigene Version eines KI-basierten Systems zum Detektieren von COVID-19 Fällen vs. normalen Fällen mittels CT Scans und Röntgenbildern aufgesetzt habe. Aktuell ist es sehr schwer genügend Daten zu finden, um solche Systeme zu replizieren. Chinas nationale Richtlinie empfiehlt die Nutzung von CT Scans als eine Schlüsselmethode in der Diagnose von COVID-19. Allerdings habe ich bis dato öffentlich zugänglich zumeist Daten basierend auf Röntgenaufnahmen gefunden. Dies könnte sich jedoch in Zukunft ändern dank der internationalen Community und Forschern wie Andre Esteva, PhD, der vor knapp einer Woche damit began, COVID-19 Röntgenaufnahmen zu sammeln und der wissenschaftlichen Gemeinschaft zur Verfügung zu stellen.

**COVID-19 Detektor mittels Künstlicher Intelligenz**

Künstliche Intelligenz klingt manchmal wie ein Buzzword oder wie etwas extrem kompliziertes aus einem SciFi Buch. Allerdings ist KI in den letzten Jahren zu einer reifen Technologie herangewachsen mit dem Potenzial viele Alltagsprobleme zu lösen. Dies kann beispielweise durch Neuronale Netze erreicht werden, bei denen künstliche Neuronen zusammengesetzt werden. Ferner findet die Technologie  z.B. bei Selbstfahrenden Autos von Tesla, Daimler und Bosch oder zum Detektieren von Brustkrebs Anwendung. 

Ich habe ein Neuronales Netz Modell erstellt, was in der Lage ist mit einer Genauigkeit von 97,5% mit Hilfe von Röntgenbildern zu prädizieren ob ein Patient mit COVID-19 infiziert ist oder nicht. Für mein Modell habe ich eine Sensitivität von 100% und eine Spezifizität von 94,95% erreicht. Auch wenn dies zunächst eindrucksvoll erscheint, ist der Datensatz zu klein. Jedoch arbeiten aktuell Radiologen mit uns zusammen, um das Modell zu validieren und den Datensatz zu kuratieren. Folglich darf das Modell aktuell nicht operativ in Krankenhäusern genutzt werden. Zudem ist mir bekannt, dass in manchen Ländern Krankenhäuser sich solchen Produkten zur Entscheidungsfindung nicht bedienen dürfen solange die Produkte nicht rigide Teststandards erfolgreich durchlaufen haben. Folglich muss ich einen generellen Haftungsausschluss machen:


**HAFTUNGSAUSSCHLUSS / DISCLAIMER:**

Nutzen Sie diesen Code nicht oder treffen Sie keine medizinische Entscheidung basierend auf dem Inhalt dieses Beitrags (Github COVID-19) ohne die Zustimmung eines Arztes. Dieses Werkzeug dient lediglich als ein Helfer für Ärzte um den Prozess der Triage und/oder Diagnose zu beschleunigen. In keinem Fall intendieren wir Ärzte zu ersetzen. Unsere Intention ist es Ärzte mit weiteren Tools zu helfen. Sehen Sie Künstliche Intelligenz als "Erweiterte Intelligenz" (Englisch: "Augmented Intelligence") bzw. "Assistierte Intelligenz" (Englisch: "Assisted Intelligence"). Die Verwendung dieses Tools erfolgt auf Ihr eigenes Risiko. Der Autor und alle Mitwirkende des Tools übernehmen keine Verantwortung für jegliche Art von Missbrauch oder jegliche Art von Folgen die bei der Nutzung des Tools oder der Informationen entstehen. Es wird keine Haftung/ Gewähr der Aktualität, Richtigkeit und Vollständigkeit dieser Übersetzung/ Inhalte (readme_ge) übernommen.

**So können Sie helfen**

Ich suche nach freiwilligen die mich bei diesem Projekt unterstützen und hoffentlich sind wir in der Lage einen Unterschied zum positiven einzuleiten und der Welt mit unserem Input zu helfen. Es gibt Länder und private Unternehmen die an diesem Problem bereits arbeiten. Allerdings ist es mein Ziel den Code und den Inhalt der Öffentlichkeit ohne kommerziellen Hintergedanken zugänglich zu machen. Dieses Tool und Technologie soll kostenfrei zur Verfügung stehen sodass Ärzten weltweit in diesen schwierigen Zeiten geholfen werden kann.

**Übersetzer und Texter:** Wir suchen nach Menschen die in der Lage sind diesen Artikel in andere Sprachen zu übersetzen. Zudem wären wir dankbar wenn uns jemand dabei unterstützt Inhalte zu schreiben.

**Ärzte:** Falls Sie Ärzte oder Radiologen kennen bzw. selber einer sind und (die) sowohl in der Lage als auch gewollt sind uns bei diesem Projekt zu unterstützen, wie die Validierung des Tools und Beisteuern weiterer Erkenntnisse zum Verbessern, melden Sie sich bitte bei uns! Als Hauptanwender benötigen wir Ihr Domänenwissen zur Optimierung und um das Projekt letztlich anwendbar zu machen. 

**Software/Mobile Entwickler:** Wir könnten eine benutzerfreundliche Website oder App realisieren, die auf unserer Technologie basiert, womit Nutzern erlaubt werden kann Röntgenaufnahmen (zukünftig auch CT Scans) hochzuladen, um den Diagnoseprozess zu beschleunigen. Zudem brauchen wir Unterstützung bei der Erstellung einer ordentlichen Dokumentation.

**Data Analyst/ Data Scientist / Data Engineers / Scientist / Forscher:** Das erste Modell das ich erstellt habe ist weit weg von einer Optimierung. Ich werde Pull Requests auf Github akzeptieren ([https://github.com/elcronos/COVID-19]). Somit kannst Du uns dabei helfen bessere Lösungen zu finden. Zudem könnten in der Zukunft andere Datentypen oder Modelle zum Einsatz kommen, womit Dein Input sehr wichtig ist für das Core Development des COVID-19 Detektors.

**Alle anderen:** Falls Sie jemanden in Ihrem Freundeskreis kennen der notwendige Fähigkeiten und Fertigkeiten mit sich bringt und helfen möchte, bitte kontaktieren Sie mich. Falls Sie glauben in einer anderen noch nicht beschriebenen Form helfen zu können, ist dies auch kein Hindernis! Schon alleine das Teilen dieses Projekts kann Wunder bewirken und die richtigen Personen ansprechen.

**ÜBER MICH**

Mein Name ist Camilo Pestana. Ich spezialisiere mich auf die Bereiche Maschinelles Sehen (Computer Vision) und nutze Künstliche Intelligenz (Artificial Intelligence) um spannende Probleme zu lösen.

**Kontaktieren Sie uns**
Falls Sie uns helfen oder mit uns zusammenarbeiten wollen, kontaktieren Sie mich via:

LinkedIn: [https://www.linkedin.com/in/camilo-pestana](https://www.linkedin.com/in/camilo-pestana/?locale=en_US)
E-mail: [camilo.pestanacardeno@research.uwa.edu.au](mailto:camilo.pestanacardeno@research.uwa.edu.au)

**LIZENZ / LICENSE**
<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">COVID-19 Detector</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Camilo Pestana</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.
