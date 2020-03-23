# Detetor de COVID-19

A nova pandemia de coronavirus (ou COVID-19) começou o ano passado em Dezembro de 2019 em Wuhan, China. No entanto, este espalhou-se rapidamente por todo o mundo, com países como a Itália, Irão e Espanha dentro dois mais afetados.

Investigadores de todo o mundo estão a colaborar, analisando o comportamento do virus de modo a implementar novas ideias para superar esta crise. Atualmente sou candidato a Doutoramento na University of Western Australia e a minha especialidade é o campo de Inteligência Artificial(AI) e Visão Computacional (CV). Sendo eu um dos investigadores disposto a fazer alguma coisa sobre o assunto, senti a responsabilidade de utilizar as minhas _skills_ e ao colaborar com outros investigadores criar uma solução que traga benefício para todos.

Há uma semana atrás, vi nas noticias que os componentes de teste do COVID-19 [estavam em falta e o fabrico destes não conseguia acompanhar a procura](https://www.usatoday.com/story/news/2020/03/11/coronavirus-covid-19-response-hurt-by-shortage-testing-components/5013586002/), o que causa uma grande ansiedade na comunidade. Por volta da mesma altura, vi outra publicação a explicar como a china estava a utilizar [sistemas baseados em inteligência artifical para diminuir o tempo de diagnóstico do COVID-19 utilizando apenas tomografias](https://www.bioworld.com/articles/433530-china-uses-ai-in-medical-imaging-to-speed-up-covid-19-diagnosis) e raios-x. No entanto, essa tecnologia e os _datasets_ ​​ainda não foram disponibilizados ao público. Acredito fortemente que um dos meus deveres como investigador de doutoramento é generalizar a aplicação de Inteligência Artificial, em particular quando se trata de aplicações médicas. Por esse motivo, decidi fazer a minha contribuição criando a minha própria versão de um sistema baseado em IA que pode detetar casos de COVID-19 _versus_ casos normais de tomografias e x-rays. No momento, tem sido muito desafiante encontrar dados suficientes para replicar esses sistemas. As diretrizes nacionais da China recomendaram a tomografia como um método chave no diagnóstico do COVID-19, no entanto, até agora [eu encontrei mais dados publicamente usando raio-x](https://github.com/ieee8023/covid-chestxray-dataset/blob/master/README.md?fbclid=IwAR30yTGBr55WXdCngCoICDENHycmdL2bGwlvl1ckdZM-ucjGH10Uakz7khk). Mas isso pode mudar brevemente, graças à comunidade internacional e a investigadores como Andre Esteva, PhD, que há apenas uma semana começou a coletar raios-x de casos de COVID-19 e a disponibilizar esses dados publicamente para a comunidade cientifica.

# Detetor de COVID-19 utilizando Inteligência Artificial

A Inteligência Artificial pode parecer uma palavra da moda ou algo muito complicado de um livro de ficção científica. No entanto, a IA é uma tecnologia madura, com um enorme potencial para resolver muitos problemas da vida real. Isto é utilizando redes neurais, criadas ao reunir neurônios artificiais. (Sim, as Redes Neurais são modelos do cérebro humano). Esse é o mesmo tipo de tecnologia usada em carros autônomos, como o Tesla, ou para detectar o cancro da mama ainda melhor do que os próprios médicos.

Criei um modelo de rede neural capaz de prever com uma precisão de 97,5% se alguém tem COVID-19 ou não a partir de um raio-x. Para o meu modelo, tenho uma sensibilidade de 100% e uma especificidade de 94,95%. Isto pode parecer muito impressionante! No entanto, o _dataset_ utilizado é muito pequeno, mas atualmente temos radiologistas a trabalhar connosco para validar o modelo e selecionar os melhores _datasets_. Portanto, neste momento, este modelo está longe de ser utilizado em massa em qualquer hospital. Na verdade, tenho a consciência de que em alguns países, os hospitais não têm permissão para usar ou tomar decisões com base em produtos que não passaram nos padrões de teste muito rigidos. Por esse motivo, tenho que fazer um grande aviso antes de continuar:

**DISCLAIMER**: Por favor, não use este código ou tome qualquer decisão médica com base no conteúdo deste post sem o consentimento de um médico. Esta ferramenta tem como objetivo ajudar os médicos a acelerar o processo de triagem ou diagnóstico. Sob nenhuma circunstância, pretendemos substituir os médicos, mas sim ajudá-los com uma ferramenta adicional. Pense na IA como "Inteligência Aumentada" ou "Inteligência Assistida". Use esta ferramenta por sua conta e risco. Os autores e colaboradores desta ferramenta não se responsabilizam por qualquer uso indevido ou quaisquer consequências do uso desta ferramenta ou das informações fornecidas.

# É assim que podes ajudar

Estou à procura de voluntários para trabalhar comigo neste projeto e, esperançosamente, vamos ser capazes de fazer a diferença e ajudar o mundo com nossa contribuição. Neste momento, existem governos e empresas privadas a trabalhar neste problema. Meu principal objetivo é disponibilizar o código e o conteúdo para qualquer pessoa, para fins não comerciais. Desejo disponibilizar esta tecnologia gratuitamente, para que possa ser usada em qualquer lugar do mundo para ajudar os médicos nestes tempos difíceis.

**Tradutores e Copywriters**: procuramos pessoas capazes de traduzir este post para idiomas diferentes. Além disso, se houver pessoas que nos possam ajudar a escrever conteúdo, seria muito importante.

**Médicos**: se tu conheces algum médico ou radiologista capaz e disposto a trazer os seus conhecimentos para nos ajudar a validar esta ferramenta e fornecer mais informações sobre como melhorá-la, informa-nos! Como utilizadores principais, precisamos dos seus conhecimentos da área para melhorar e tornar este projeto de qualquer utilidade.

**Desenvolvedores de software/dispositivos móveis**: podíamos criar um site ou aplicativo móvel com a nossa tecnologia que seja fácil de utilizar e irá permitir que os utilizadores enviem raios-X (ou TCs no futuro) para fornecer um diagnóstico automático. Também precisamos de pessoas que escrevam a documentação adequada para o projeto.

**Data Analyst/ Data Scientist / Data Engineers / Scientist**: Este primeiro modelo que criei está longe de ser otimizado. Vou aceitar solicitações de Pull Requests no Github (https://github.com/elcronos/COVID-19) para que nos possas ajudar a desenvolver uma solução melhor. Além disso, no futuro, outros tipos de dados ou modelos podem ser considerados, portanto a tua entrada é importante para o desenvolvimento do core do detector de COVID-19.

**Todos os outros**: se conheces alguém na tua lista de amigos que possui as habilidades necessárias e pode querer ajudar neste projeto, entre em contato comigo. Se acreditas que poderias ajudar de qualquer outra maneira que não tenha sido mencionada antes, isso também é ótimo! Talvez apenas partilhando este projeto com outras pessoas, possamos alcançar as pessoas certas para nos ajudar.

# Sobre mim

O meu nome é Camilo Pestana. A minha especialidade é em Visão Computacional e uso a Inteligência Artificial para resolver problemas interessantes.

# Contacta-nos

Se quiseres ajudar ou colaborar de alguma forma neste projeto, entra em contato comigo através de:

LinkedIn: [https://www.linkedin.com/in/camilo-pestana](https://www.linkedin.com/in/camilo-pestana) Correo electrónico: [camilo.pestanacardeno@research.uwa.edu.au](mailto:camilo.pestanacardeno@research.uwa.edu.au)

**LICENÇA**

<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">COVID-19 Detector</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Camilo Pestana</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.
