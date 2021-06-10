---
layout: post
title:  "Anomaly Detection of Time Series Data"
author: Chelsea
categories: [ Deep Learning, LSTM, AutoEncoder]
tags: [timeseries, tensorflow, keras]
image: assets/images/18.png
# description: "Author: Chelsea Anne S. Ong"
featured: true
hidden: true
---
**Subject/s of Focus: Deep Learning, Time-Series Forecasting**

**Author: Chelsea Anne S. Ong**

>This project is a proof of concept.

# Executive Summary
A certain image does not only necessarily represent a single attribute and most of the time it represents more than two. In other words, there can be multiple titles or labels that can be given for a single image. This problem is called multi-label classification which is used for content retrieval and scene understanding among few. For this study, a multi label classification algorithm is applied on food images using Keras (with Tensorflow backend). A simple CNN model is altered to give way to multi label classification. To make things easier, pre-trained CNN models are used particularly ResNet50, MobileNet, DenseNet121, and Xception. Afterwards, comparison of these results shall be done with Nanonets Multi Label Classification API. The results show a better F1 score at **75.06%** for Nanonets and only about **70.46%** for Xception model. Both of these models can be used for deployment as they both display intuitive and sound results.

### Motivation
When we see certain food images, are they easy to describe? Sometimes yes, sometimes no. Because of this, I want to explore if Deep Learning can help me with classifying food images. Using the sample food images data gathered from the blog "How To Easily Classify Food Using Deep Learning and Tensorflow", I shall run pre-trained CNN models to predict labels for a particular food image. Given a food item, I would like to know what are the possible labels for a certain food image. For instance, given an image of a beef, the model shall provide tag such as "meat", "protein". This model can be useful for content based retrieval for businesses especially for the food industry where automated dietary plan app can be made based on user requirements. The use of this model comes in by automatically retrieving relevant images for the specific food item.

### Web Application
To make things more interesting and cool, this project is also deployed using Flask. This is how the landing page look like.
![Website Front](/assets/images/Website_Front.png)

The dataset used and the model features are listed here.
![Website Desc](/assets/images/Website_Desc.png)

For simplicity and faster running time, MobileNet model is used instead.
![Website Features](/assets/images/Website_Features.png)

To demonstrate prediction of food tags, simply upload an image and the prediction will come out. In this example, the model tagged the food image of a pizza as mains, carbs, and fats.
![Website Demo](/assets/images/Website_Demo.png)

#### Note:
To see the files and codes used for this project, click [here](https://github.com/ongchelseaanne/Classifying-Food-Images-using-Deep-Learning)

For questions and inquiries, you may send me a message via [Linked in](https://www.linkedin.com/in/ongchelseaanne)


<!-- #### How to use?

It's actually really simple! Add the rating in your YAML front matter. It also supports halfs: -->

<!-- ```html
---
layout: post
title:  "Inception Movie"
author: john
categories: [ Jekyll, tutorial ]
tags: [red, yellow]
image: assets/images/11.jpg
description: "My review of Inception movie. Actors, directing and more."
rating: 4.5
---
``` -->
