---
layout: post
title:  "Uncovering Similarities between recipes"
author: Chelsea
categories: [ Data Mining and Wrangling, Web Scraping, Clustering]
tags: [food, recipes, ingredients, cooking]
image: assets/images/1.jpg
---
**Subject/s of Focus: Data Mining and Wrangling**

**Authors: Gilbert Chua, Chelsea Ong, Jomilynn Rebanal, Van Yu**

>This project is for the fulfillment of the requirements in our Data Mining and Wrangling course.

## Executive Summary 
Recipes are the blueprint for a dish and changes in the ingredients may either enrich or worsen the taste. Recipe tweaking due to the unavailability of certain ingredients is a common dilemma among home cooks and restauranteurs. In this study, the researchers explored more than 38,000 recipes scraped from allrecipes.com to answer the question “What are the similarities between recipes based on their ingredients?”

The dataset included 2,175 ingredients and each ingredient was treated as a categorical feature. Given the features’ data type, one-hot encoding was used in vectorization. The recipes underwent feature reduction using principal component analysis (PCA) at 80% explained variance. Assuming no prior knowledge on the recipes, the researchers analyzed the natural clusters of recipes through K-means since this method is intuitive and computationally efficient.

Based on the internal validation criteria, six (6) seemed to be the optimal number of clusters. Notably, this study revealed that recipes clustered based on broad flavor profiles (Pungent, Sweet, Savory, Hearty, Simple) and on the number of ingredients used (Easy).

The generated clusters here can be used as an alternate classification system that is more based on flavor profiles as opposed to using ingredients and cuisine to group recipes together. Classification via flavor profiles may provide a novel and more intuitive method of catering to the tastes of customers. Moreover, results of this study can serve as an input to a food recommender system and as a cornerstone for future food anthropologic studies.

#### Note:
For more information on the files and codes used for this project, you may send me a message via [Linked in](https://www.linkedin.com/in/ongchelseaanne)  