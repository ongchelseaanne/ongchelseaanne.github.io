---
layout: post
title:  "Data Plausibility Assessment using Machine Learning"
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

The primary objective of this project is to ensure that the data (or accounts) being submitted by banks are accurate and plausible by developing a forecasting model to predict future values and compare it to historical data. The methodology involves gathering of data where the nature of the data is time-series, performing machine learning particularly SARIMAX and LSTM Autoencoder models and comparing it to the human judgement method where each time series data reported is checked one-by-one by humans, and lastly generating the report in PDF for easier analysis by the user. Among the models, LSTM Autoencoder proved to be the most superior since it captures the historical data very well but the strength of prediction is proportional to the training time. By implementing the LSTM Autoencoder model, **it showed that it can reduce the time needed to review multiple accounts by about 80%**. Assuming that the model tagged 20% of accounts for review, the significant manpower reduction can help the management focus on making interventions/actions for the concerned banks. By leveraging the power of LSTM and time series data, the project equips the BSP in promoting data-driven regulation and surveillance of banks, improving overall performance and achieving optimum data quality.

Link for the sample of data being analyzed: https://www.bsp.gov.ph/Statistics/Selected%20Performance%20Indicators/16%20historical.xls

### Motivation

If you have a lot of data, you won't have time to look at it one by one for errors or irregularities. It is also quite obvious to resort to percentage change in order to account for the irregularities in the time series data. However, some spikes/dips may be deemed normal and some non-movements in data may also need checking. By using machine learning techniques, the process of checking anomalies can be automated and can possibly be smarter enough to detect which data points need more attention. Hence, the motivation of this project is to reduce man-hours without compromising the quality of detection.


#### Note:
For questions and inquiries, you may send me a message via [Linkedin](https://www.linkedin.com/in/ongchelseaanne)


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
