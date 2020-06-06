---
layout: post
title:  "Uncovering Cuisines Based on Ingredients"
author: Chelsea
categories: [ Machine Learning, Multi-Class Classification]
image: assets/images/ingredients.jpg
tag: [food, ingredients, cooking]
# featured: true
# hidden: true
---
**Subject/s of Focus: Machine Learning**

**Author: Chelsea Anne S. Ong**

>This project is for the fulfillment of the requirements in our Machine Learning course.

## Executive Summary
One way a nation distinguishes itself is through its geographical and cultural ties which includes local foods and ingredients. Because of these, some ingredients are strongly associated with a particular cuisine. For example, sushi is automatically categorized as japanese cuisine. Classification is easy for common dishes, but not for the not-so-common ones. Using lists of ingredients, the machine learning model is able to predict the correct cuisines 66.5% using L2 Linear Support Vector Machines (Linear SVM) with C=0.1. **Chinese Cuisine turned out the be the easiest to predict** and Southern US the hardest. On the other hand, misclassifications occur mostly in British Cuisines which are predicted as Irish or Russian cuisines and Thai cuisines are predicted as Vietnamese cuisines. As a restaurateur or a chef, cuisine classification is important to establish their niche or delve into fusion cuisines. In addition, they can optimize their ingredients to avoid spoilage. 

## Motivation
Whenever I cook or eat, what comes to mind is what I find myself craving whether Japanese, Chinese, or Filipino food. After I decided on a cuisine, that’s when I decide on what specific food on that cuisine I would choose. What makes a dish aside from how it is prepared are its ingredients. How does the list of ingredients dictate the dish’s cuisine? 

Using the data gathered from the kaggle competition "What cooking?", which contains the list of ingredients for each dish, the target would be the cuisine (e.g. Chinese, American, Filipino). The dataset contains 39774 dishes from 20 cuisines. By virtue of machine learning, various machine learning classification algorithms shall be implemented and compare their accuracies. The main objective is to figure out what algorithm will have the highest accuracy and how accurate it is. 

#### Note:
To see the files and codes used for this project, click [here](https://github.com/ongchelseaanne/Uncovering-Cuisines-Based-on-Ingredients) 

For more information, you may send me a message via [Linked in](https://www.linkedin.com/in/ongchelseaanne) 

<!-- #### So how do we do spoilers?

```html
<span class="spoiler">My hidden paragraph here.</span>
``` -->
