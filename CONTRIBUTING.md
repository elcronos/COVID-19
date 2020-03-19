# Contributing

<div class=text-justify>
If you are reading this, you have probably seem a post on social media about this initiative to create an open-source tool that help detecting the coronavirus using the power of Artificial Intelligence. After my original post on social media for Facebook and LinkedIn went viral (More than 15.000 people have seem my posts and around 600 have share it), I have been impressed by the massive amount of people who contacted me in the last 24 hours willing to help or contribute somehow to this project. For that reason, I decided to be more specific about the objectives of this project and how you can help given your particular set of skills or motivations.
<br/>
<br/>
Our official channel for communication is Slack. Join us now:

[<img src="resources/slack_logo.png" width="50px" height="50px">](https://join.slack.com/t/covid-19detector/shared_invite/zt-cw28jq9g-2FcPBD~zNRYLnVhr34hrRQ)
<b>Slack</b>
<br/>
For Developers or people wanting to contribute directly in the GitHub repository. Please star and follow our repository:

[<img src="resources/github_logo.png" width="50px" height="50px">](https://github.com/elcronos/COVID-19)
<b>GitHub</b>

## Motivation
The situation is evolving very fast and it is hard to predict at the moment the reach and real impact of the novel coronavirus around the world. I want to highlight that we do not intent to replace or create a new coronavirus test that works better than the current one. However, we know that in some countries getting tested using the tradicional method could cost around 100 USD or more, which of course, it is not accesible for everyone. In some other countries, tests are running out of stock as they are not produced fast enough or the demand right now is too high around the world.

**DISCLAIMER:** Please do not use the code in this repository or take any medical decision without the consent of a doctor. This tool is thought as a way to help doctors in speeding up the process of triage or/and diagnosis. Under no circumstances, do we intent to replace doctors but rather to help them with an additional tool. Think of AI standing for "Augmented Intelligence" or "Assisted Intelligence" Please use this tool at your own risk. The authors and contributors of this tool do not take responsibility for any misuse or any consequences of using this tool or information provided.

## Goals
1. Our first goal is to create a web or mobile app that allow users to upload images of either x-rays or tomographies and get automatically diagnosed by an AI algorithm.
2. Validate our approach, clean and create new datasets  (probably there are some noise in the data) that are relevant for this problem.
3. Investigate new methods based on AI for detecting the coronavirus.

## How you can help

I am looking for volunteers to work with me in this project and hopefully make a difference and help the world with our input. There are some governments and private companies working on this problem at the moment, however, my main goal is to make the code and the content of this repository available to anyone for non-commercial purposes. I want to make this technology available free-of-charge so that it can be used anywhere in the world to help doctors in these hard times. It can also be a source of inspiration for other scientist.

How to contribute if you are a:

- Sponsors

- Doctors and Radiologists

- Web Developer / Software/Mobile Developer / Cloud engineer

- Data Scientist / Data Analyst / Data Engineer

- Researcher / Scientist

- Graphic Designer / Multimedia

- Translator / Copywriter

- Legal Advise & Copyrights Advisors


#### Sponsors
We want to democratise and make this technology available to everyone. However, there are some costs associated for this kind of projects. For example, when we create a website or a mobile app, people will be able to use the service free-of-charge. However, just for keeping the website online operating 24h/7, there will be some costs.

In particular, we are looking for people or companies that could contribute and help us so we can pay cloud computing services and other related operational costs.

As a token of appreciation for your contribution, we are willing to add the Logo/Name or website of your company in our repository in the section for sponsors. We will also recognised our top sponsors  in future webinars, presentations, and posts.

We will also have a sections for individuals that want to contribute as well.

Please contact me to express your interest in becoming a sponsor.

Email: capcarde@gmail.com


#### Doctors and Radiologists
If you know any doctors or radiologists who are able and willing to bring their expertise to help us validate this tool and give us more insights on how to improve it, please let us know! As the main users, we need their domain expertise to improve and make this project of any use

  - We would like to know how many

#### Web Developer / Software/Mobile Developer / Cloud engineer

From the software development perspective there are 4 projects where you can contribute.

- **Backend / Cloud service**: We need to create API services that receive images and uses our AI model to return the inferences.
  - In the repository, the folder app/server contains a dockerised version of the API that you could use and deploy locally.
  - In the near future, we might be using a queau architecture in the cloud for processing the images received and some serverless functions.

- **Landing Page**: We will need a landing page with blog section for future publications. Help us to get this done !
- **Frontend**: We need a single page app (SPA) containing a basic drag and drop component for uploading images. Additionally, a feature that allow us to active the webcam and send the image to the cloud would be desirable.
- **Mobile App (Android/iOS)**:
Similarly to the frontend project, we need a mobile app that allows to take pictures and send it to our cloud service for processing.
- **Documentation**:
Help us to create the documentation for the above projects. We will need API documentations, some README files, etc.


#### Data Scientist / Data Analyst / Data Engineer
**COVID19 vs Normal (dataset and model)**: We need to improve our dataset and model. Help us to build better models to classify COVID19 cases from non-coronavirus cases.

  - Using x-ray dataset.
  - Using Tomography dataset. (We need your help to build this dataset)

**Medical Images vs Non-medical (dataset and model)**:
I am aware that as soon as we create the web app and put it online, some people might misuse it or send images that doesn't correspond to medical images. For example, people sending selfies or images of a cat or dog. We need a to build a dataset that help us to create a classifier able to discriminate between medical images and non-medical images.

**X-Ray vs Tomography dataset**
Recent research suggest that tomographies are better at predicting the novel coronavirus than x-rays. However, currently it is easier to find publicly available datasets with coronavirus cases. Eventually, we hope to get more images of tomographies of patients displaying the virus to build a classifier using this data. In the meantime, we could create a simple classifier to differentiate between x-rays and tomographies. Depending on the type of image uploaded we could use the x-ray or tomography model.

#### Researcher / Scientist
Maybe there are better and cheaper alternatives to discover the novel coronavirus than x-rays and tomographies. Help us to discover new approaches and bring some innovation.

#### Graphic Designer / Multimedia
We want to reach as many people as possible willing to help us. We know infographics and videos are a good way to spread the message ! Help us making this possible !

#### Translator / Copywriter
In the next days we will publish more content and maybe even create a blog related to our initiative. Help us to translate and spread the message in different languages and create new content.

#### Translator / Copywriter
In the next days we will publish more content and maybe even create a blog related to our initiative. Help us to translate and spread the message in different languages and create new content.

### Legal Advise & Copyrights Advisors
We need some advise on how to create the TERMS AND CONDITIONS, DISCLAIMERS, LICENSE and ETHICAL REQUIREMENTS.






</div>
