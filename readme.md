# COVID-19 Detector
The novel coronavirus disease (a.k.a COVID-19) pandemic started last year in December 2019 in Wuhan, China. However, it has rapidly spread to the rest of the world, being countries such as  Italy, Iran and South Korea among the most affected.

Researchers around the the world are collaborating to analyse the behaviour of the virus and implement novel ideas to overcome this crisis. As many people might know, I am currently a PhD candidate at the University of Western Australia and my specialty is in the field of Artificial Intelligence (AI) and Computer vision (CV). As one of those researchers willing to do something about it, in that last couple of weeks, I felt duty bound to use my skills and collaborate with other researchers and create solutions that benefit all of us.

A week ago, I first saw on the news that COVID-19 test components are in [short supply and they cannot be manufactured fast enough ]([https://www.usatoday.com/story/news/2020/03/11/coronavirus-covid-19-response-hurt-by-shortage-testing-components/5013586002/](https://www.usatoday.com/story/news/2020/03/11/coronavirus-covid-19-response-hurt-by-shortage-testing-components/5013586002/)), which is already causing some anxiety in the community. Around the same time, I saw another new explaining how China was using [AI-based systems to speed up the diagnosis process of COVID-19 using only tomographies]([https://www.bioworld.com/articles/433530-china-uses-ai-in-medical-imaging-to-speed-up-covid-19-diagnosis](https://www.bioworld.com/articles/433530-china-uses-ai-in-medical-imaging-to-speed-up-covid-19-diagnosis)) and x-rays. However, this technology and the completed datasets used have not been made publicly available yet. I strongly believe that one of my duties as a PhD researcher is to democratise the use of AI, in particular, when it is related to medical applications. For that reason, I have decided to contribute creating my own version of an AI-based system that can detect COVID-19 cases vs normal from CT scans and x-rays.  At the moment, it has been very challenging to find enough data to replicate such systems. China’s national guidelines have recommended CT scans as a key method in diagnosing COVID-19, however, so far [I have found more publicly available data using x-rays]([https://github.com/ieee8023/covid-chestxray-dataset/blob/master/README.md?fbclid=IwAR30yTGBr55WXdCngCoICDENHycmdL2bGwlvl1ckdZM-ucjGH10Uakz7khk](https://github.com/ieee8023/covid-chestxray-dataset/blob/master/README.md?fbclid=IwAR30yTGBr55WXdCngCoICDENHycmdL2bGwlvl1ckdZM-ucjGH10Uakz7khk)). But this might change in the future thanks to the international community and inspiring researchers such as Andre Esteva, PhD, who just a week ago started collecting COVID-19 x-rays  and make it publicly available for the scientific community.

# COVID-19 Detector using Artificial Intelligence

Artificial Intelligence might sound like a buzzword to you or might something sound as a very complicated concept out of a science fiction book. However, AI has become a mature technology with a huge potential of solve many real problems. This is achieved by using Neural Networks, which are created by putting together artificial neurons together (Yes, Neural Networks are biological-inspired  models of the brain). This is the same kind of technology that is used in [self-driving cars such as Tesla]([https://www.tesla.com/en_AU/autopilotAI](https://www.tesla.com/en_AU/autopilotAI)) or to [detect breast cancer even better than doctors]([https://www.bloomberg.com/news/articles/2020-01-02/google-shows-ai-can-spot-breast-cancer-better-than-doctors](https://www.bloomberg.com/news/articles/2020-01-02/google-shows-ai-can-spot-breast-cancer-better-than-doctors)).

I have created a Neural Network model that is able to predict with 97.5% accuracy from an x-ray whether someone has the COVID-19 virus or not. For my model, I have got a sensitivity of 100% and a specificity of 94.95%. This might sounds very impressive ! However, this model is far from being used at scale in any hospital. Actually, I am aware that in some countries hospitals are not allow to use or take decisions based on products that has not been properly tested. For that reason, I have to make a big disclaimer before continuing:

**DISCLAIMER:** Please do not use this code or take any medical decision based on the content of this post without the consent of a doctor. This tool is thought as a way to help doctors in speeding up the process of triage or/and diagnosis. Under no circumstances, we intent to replace doctors. Please used this tool under your own risk. The authors and contributors of this tool do not take responsibility for any misusage or any consequences of this tool.

# This is how you can help

I am looking for volunteers to work with me in this project and hopefully, we will be able to make a difference and help the world with our input. There are some governments and private companies working on this problem at the moment, however, my main goal is to make the code and the content available to anyone for non-commercial purposes. I want to make this technology available free-of-charge ! so it can be used anywhere in the world and help doctors in these hard times.

**Translators and Copyrighters:** We are looking for people able to translate this post to different languages. In addition, people that could help us writing content would be highly appreciate it.

**Doctors:** If you know any doctors or radiologist that are willing to bring their expertise to help us validating this tool and give us more insights on how to improve it.

**Software/Mobile Developers:** We could create a website or mobile app powered by our technology that is user-friendly and will allow users to upload x-rays (or CTs in the future) to give an automatic diagnosis. We also need people to write a proper documentation for the project.

**Data Analyst/ Data Scientist / Data Engineers / Scientist** This first model that I have created is far from optimised. I will be accepting Pull Requests on Github (https://github.com/elcronos/COVID_19) so you can help us developing a better solution. In addition, in the future other types of data or models might be considerate so your input is important for the core development of the COVID-19 detector.

**Everyone else:** If you know anyone in your list of friends that have the skills needed and might want to help with this project please contact me. If you believe you could help in any other way that has not been mentioned before that's great as well ! Maybe just by sharing this project with others we could reach the right people to help us with this initiative.

# ABOUT ME

 My name is Camilo Pestana, I am currently a PhD candidate from the University of Western Australia. I specialise in Computer Vision and use Artificial Intelligence to solve interesting problems.

# Contact US

If you want to help us or collaborate somehow in this project please contact me via:

LinkedIn: [https://www.linkedin.com/in/camilo-pestana](https://www.linkedin.com/in/camilo-pestana/?locale=en_US)
E-mail: camilo.pestanacardeno@research.uwa.edu.au

# LICENSE
<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">COVID-19 Detector</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Camilo Pestana</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.
