# Contributing

<div class=text-justify>
If you are reading this, you probably have seen a post on social media about this initiative to create an open-source engine that serves to detect the COVID-19 infection using the power of Artificial Intelligence. After my original post on social media for Facebook and LinkedIn went viral (more than 15,000 people have seen and 600 of them shared it), I was fascinated by the massive number of people who contacted me in the last 24 hours willing to help or contribute somehow to this project. For that reason, I decided to be more specific about the objectives and help you understand how you can help us with your special set of skills or motives.

<br/>
[<img src="resources/slack_logo.png" width="30px" height="30px">](https://join.slack.com/t/covid-19detector/shared_invite/zt-cw28jq9g-2FcPBD~zNRYLnVhr34hrRQ)

<br/>
For Developers or people wanting to contribute directly in the GitHub repository. Please star and follow our repository:
[<img src="resources/github_logo.png" width="30px" height="30px">](https://github.com/elcronos/COVID-19)<b>GitHub</b>

## Motivation
The situation is evolving very fast and it is hard to predict at the moment the reach and real impact of the novel COVID-19 (Also known as Corona-virus) around the world. I want to highlight that we do not intend to replace the already existing traditional medical examination. However, we know that in some countries getting tested using the traditional method could cost around 100 USD or more, and again ofcourse it is not accessible for everyone. And in some countries, these traditional methods are not able to keep up with the demand right now.

**DISCLAIMER:** Please do not use the code in this repository or take any medical decision without the consent of a doctor. This tool is meant to help doctors in speeding up the process of triage or/and diagnosis. Under no circumstances, do we intend to replace doctors but rather to assist them with an additional tool to perhaps validate or predict the results using the power of computation. Think of AI standing for "Augmented Intelligence" or "Assisted Intelligence" and do use this tool at your own risk. The authors and contributors of this tool do not take responsibility for any kind of misuse or consequences.

## Goals
1. Our first goal is to create an Android, iOS and Web Application that enables users (Doctors or Lab technicians ideally) to upload images of either X-rays or Tomographies and get diagnosed by an AI algorithm.
2. Validate our approach, create new datasets, clean and remove noise in the data that are relevant to this problem.
3. Investigate new methods based on AI for detecting the infection.

## How you can help
We are looking for volunteers to work with us in this project and hopefully make a difference and help the world with our input. Some governments and private companies are working on this problem at the moment, however, our main goal is to make the code and the content of this repository available to anyone for non-commercial purposes. We aim to make this technology available free-of-charge so that it can be used anywhere in the world to help doctors in these hard times. It can also be a source of inspiration for other scientists.

How to contribute if you are a:

- Sponsor

- Doctors and Radiologists

- Web Developer / Software/Mobile Developer / Cloud engineer

- Data Scientist / Data Analyst / Data Engineer

- Researcher / Scientist

- Graphic Designer / Multimedia

- Translator / Copywriter

- Legal Advise & Copyrights Advisors

#### Sponsors
We want to democratize and make this technology available to everyone. However, there are some costs associated with this kind of project. For example, when we create a website or a mobile app, people will be able to use the service free-of-charge. However, just for keeping the website online operating 24h/7, there will be some operating costs.

In particular, we are looking for people or companies that could contribute and help us so we can pay cloud computing services and other related operational costs.

As a token of appreciation for your contribution, we are willing to add the Logo/Name or Website of your company in our repository in the section for sponsors. We will also recognize our top sponsors in future webinars, presentations, and posts.

We will also have a section for individuals that want to contribute as well.

Please contact me to express your interest in becoming a sponsor.

Email: capcarde@gmail.com

#### Doctors and Radiologists
If you are a Doctor or Radiologist or if you know any who are able and willing to bring their expertise to help us validate this tool and give us more insights on how to improve it, please let us know! It is very important to us.

#### Software Engineers
From the software development perspective, there are 4 projects where you can contribute.

- **Backend / Cloud Services**: We need to create API services that take the various different formats of images as input and feed our AI model to return the diagnosis.
  - In the repository, the folder app/server contains a dockerised version of the API that you could use and deploy locally.
  - In the near future, we might be using a queued architecture in the cloud for processing the images received and some serverless functions.

- **Frontend (Android, iOS & Web)**:
We need Android iOS and Web applications that allow us to take or upload pictures, post them to our cloud services and secure the diagnosis.

- **Web Landing Page**: We will need a website with a blog section for future publications.

- **Technical & Non-Technical Documentation**:
Help us to create the documentation for the above projects. We will need API documentation, some README files, etc.

#### Data Scientist / Data Analyst / Data Engineer
**COVID19 vs Normal (dataset and model)**: We need to improve our dataset and model. Help us to build better models to classify COVID19 cases from non-coronavirus cases.

  - Using an X-ray dataset.
  - Using the Tomography dataset. (We need your help to build this dataset)

**Medical Images vs Non-medical (dataset and model)**:
I am aware that as soon as we create a web app and put it online, some people might misuse it or send images that don't correspond to medical images. For example, people sending selfies or images of a cat or dog. We need to build a dataset that helps us to create a classifier able to distinguish between medical images and non-medical images.

**X-Ray vs Tomography dataset**
Recent research suggests that tomographies are better at predicting the novel coronavirus than x-rays. However, currently, it is easier to find publicly available datasets with coronavirus cases. Eventually, we hope to get more images of tomographies of patients displaying the virus to build a classifier using this data. In the meantime, we could create a simple classifier to differentiate between x-rays and tomographies. Depending on the type of image uploaded we could use the x-ray or tomography model.

#### Researcher / Scientist
Maybe there are better and cheaper alternatives to discover the novel coronavirus than x-rays and tomographies. Help us to discover new approaches and bring some innovation.

#### Graphic Designer / Multimedia
We want to reach as many people as possible willing to help us. We know infographics and videos are a good way to spread the message! Help us make this possible!

#### Translator / Copywriter
In the next days, we will publish more content and maybe even create a blog related to our initiative. Help us to translate and spread the message in different languages and create new content.

### Legal  & Copyrights Advisors
We need some advice on how to create the TERMS AND CONDITIONS, DISCLAIMERS, LICENSE, COMMUNITY GUILDELINES, and ETHICAL REQUIREMENTS.

</div>
