
> ## Important
> Hi everyone! We are splitting this main repo in repos for each project (android, ios, web, landing-page, core, etc). This should increase maintainability and separate concerns a little bit better. 
> 
> The new repos will be grouped under our Github Organization. Here it is: https://github.com/FightCOVID19.  
>
>_Please do not open new PR on this repo if your PR relates to any project found in the mentioned above. Do it on the corresponding project repo._

---

# IMPORTANT ANNOUNCEMENT !

We started this group with an altruist objective in mind: To diagnose COVID-19 in chest X-ray. We perceived that task as a healthcare necessity and we began to work on it. So, a team of highly compromised engineers started to work with that single objective on mind. In that path we found doctors willing to contribute. We had several videoconferences with them and we realized the full potential of our project. So, we decide to switch from our original and not so realistic objective to other more meaningful and needed project. We will use the amazing skills of all the team to create a world high impact surveillance app. So, the model became a secondary objective to work on. However, we recognize the attention we capture with it and we want to use all these attention in the necessities of the world facing the COVID pandemic.

Following the feedback of the doctors in our group, the app we are currently working on will follow the next 4 principles:
1.  To detect alarm signs
2.  To relief the load of the healthcare system by redirecting the low risk patients to sites with reliable information about health care and redirect the high-risk patients to the closest medical facility.
3.  To serve as generators of real-time information.
4.  To keep close links with healthcare authorities and generate useful epidemiological information.

We are still designing an artificial intelligence model for chest – x rays. But we have a slight switch according the medical feedback. So, right now, our main objective is:
1.  To Identify if AI has a role in the chest X-rays of patients with suspicion or diagnosis of coronavirus.

We are looking for high quality in the model we are about to release. We are increasingly curating additional datasets and will properly validate it. We have a team of radiologist collaborating with us. So, we are going to incorporate this model in our open-source app once it is adequately trained and validated. We want to be crystal-clear about the intentions of the team. We keep believing in the high impact of an open-source app able to provide real time information for patients, to relief the load of the healthcare providers and give useful insights to governments and health authorities.

Thanks to all of you who keep working with us,

Camilo Pestana, Fight COVID-19 Director

---



If you have decided to contribute or support this open-source project, please read [this instructions on how you can help and be part of this initiative](CONTRIBUTING.md). Please consider to join us on [Slack](https://join.slack.com/t/covid-19detector/shared_invite/zt-cw28jq9g-2FcPBD~zNRYLnVhr34hrRQ), which is will be the official channel for communication.

If you want to know more about this project please read the information below, which is also available in other languages:

* [اَلْعَرَبِيَّةُ‎](README/readme_ar.md)
* [Español](README/readme_es.md)
* [Italiano](README/readme_it.md)
* [Français](README/readme_fr.md)
* [Deutsch](README/readme_ge.md)

### [**Developer Information**](README/DEVELOPERS.md)

<div class=text-justify>

# COVID-19 Detector
The novel coronavirus disease (a.k.a COVID-19) pandemic started last year in December 2019 in Wuhan, China. However, it has rapidly spread to the rest of the world, with other countries such as Italy, Iran and Spain among the most affected.

Researchers around the world are collaborating to analyse the behaviour of the virus and implement novel ideas to overcome this crisis. I am currently a PhD candidate at the University of Western Australia and my specialty is in the field of Artificial Intelligence (AI) and Computer vision (CV). As one of those researchers willing to do something about it, I felt duty bound to use my skills and collaborate with other researchers to create solutions that benefit all of us.

A week ago, I first saw on the news that COVID-19 test components are in [short supply and they cannot be manufactured fast enough ](https://www.usatoday.com/story/news/2020/03/11/coronavirus-covid-19-response-hurt-by-shortage-testing-components/5013586002/), which is already causing some anxiety in the community. Around the same time, I saw another post explaining how China was using [AI-based systems to speed up the diagnosis process of COVID-19 using only tomographies](https://www.bioworld.com/articles/433530-china-uses-ai-in-medical-imaging-to-speed-up-covid-19-diagnosis) and x-rays. However, this technology and the completed datasets used have not been made publicly available yet. I strongly believe that one of my duties as a PhD researcher is to democratise the use of AI, in particular, when it is related to medical applications. For that reason, I have decided to contribute by creating my own version of an AI-based system that can detect COVID-19 cases vs normal cases from CT scans and x-rays.  At the moment, it has been very challenging to find enough data to replicate such systems. China’s national guidelines have recommended CT scans as a key method in diagnosing COVID-19, however, so far [I have found more publicly available data using x-rays](https://github.com/ieee8023/covid-chestxray-dataset/blob/master/README.md?fbclid=IwAR30yTGBr55WXdCngCoICDENHycmdL2bGwlvl1ckdZM-ucjGH10Uakz7khk). But this might change in the future thanks to the international community and inspiring researchers such as Andre Esteva, PhD, who just a week ago started collecting COVID-19 x-rays and making those data publicly available for the scientific community.

# COVID-19 Detector using Artificial Intelligence

Artificial Intelligence might sound like a buzzword to you or something very complicated out of a science fiction book. However, AI has become a mature technology with a huge potential to solve many real-life problems. This is achieved by using Neural Networks, which are created by putting together artificial neurons together. (Yes, Neural Networks are biological-inspired  models of the brain). This is the same kind of technology that is used in [self-driving cars such as Tesla](https://www.tesla.com/en_AU/autopilotAI) or to [detect breast cancer even better than doctors](https://www.bloomberg.com/news/articles/2020-01-02/google-shows-ai-can-spot-breast-cancer-better-than-doctors).

I have created a Neural Network model that is able to predict with 97.5% accuracy from an x-ray whether someone has the COVID-19 virus or not. For my model, I have got a sensitivity of 100% and a specificity of 94.95%. This might sounds very impressive ! However, the dataset used is very small, but we have radiologists right now working with us to validate the model and curate the datasets. So at the moment, this model is far from being useable at scale in any hospital. Actually, I am aware that in some countries, hospitals are not allowed to use or take decisions based on products that have not passed rigid testing standards. For that reason, I have to make a big disclaimer before continuing:

**DISCLAIMER:** Please do not use this code or take any medical decision based on the content of this post without the consent of a doctor. This tool is thought as a way to help doctors in speeding up the process of triage or/and diagnosis. Under no circumstances, do we intent to replace doctors but rather to help them with an additional tool. Think of AI standing for "Augmented Intelligence" or "Assisted Intelligence" Please use this tool at your own risk. The authors and contributors of this tool do not take responsibility for any misuse or any consequences of using this tool or information provided.

# This is how you can help

I am looking for volunteers to work with me in this project and hopefully, we will be able to make a difference and help the world with our input. There are some governments and private companies working on this problem at the moment, however, my main goal is to make the code and the content available to anyone for non-commercial purposes. I want to make this technology available free-of-charge so that it can be used anywhere in the world to help doctors in these hard times.

**Translators and Copywriters:** We are looking for people able to translate this post to different languages. In addition, if there are people who could help us writing content then that would be highly appreciated.

**Doctors:** If you know any doctors or radiologists who are able and willing to bring their expertise to help us validate this tool and give us more insights on how to improve it, please let us know! As the main users, we need their domain expertise to improve and make this project of any use.

**Software/Mobile Developers:** We could create a website or mobile app powered by our technology that is user-friendly and will allow users to upload x-rays (or CTs in the future) to give an automatic diagnosis. We also need people to write proper documentation for the project.

**Data Analyst/ Data Scientist / Data Engineers / Scientist** This first model that I have created is far from optimised. I will be accepting Pull Requests on Github (https://github.com/elcronos/COVID-19) so you can help us to develop a better solution. In addition, in the future other types of data or models might be considered so your input is important for the core development of the COVID-19 detector.

**Everyone else:** If you know anyone in your list of friends that has the skills needed and might want to help with this project please contact me. If you believe you could help in any other way that has not been mentioned before, that's great as well ! Maybe just by sharing this project with others we could reach the right people to help us.

# ABOUT ME

 My name is Camilo Pestana. I specialise in Computer Vision and use Artificial Intelligence to solve interesting problems.

# Contact US

If you want to help us or collaborate somehow in this project please contact me via:

LinkedIn: [https://www.linkedin.com/in/camilo-pestana](https://www.linkedin.com/in/camilo-pestana/?locale=en_US)
E-mail: camilo.pestanacardeno@research.uwa.edu.au

# LICENSE
<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">COVID-19 Detector</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Camilo Pestana</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.

</div>
