
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "About Me",
    "body": " They say that the journey of success isn’t linear but rather a series of twists and turns. Ever since I was a little kid, my interests have always been with Science, Technology, Engineering, and Mathematics (STEM) field. I am fond of problem-solving especially related to numbers, charts, and anything that requires computation. When I was in high school, I loved chemistry so much. My strong affinity to both Chemistry and Math was what pushed me to take Chemical Engineering as my undergraduate degree at De La Salle University (DLSU). Long story short, I graduated and became a Licensed Chemical Engineer in 2017. And then what awaits me? Unemployment. I did not know what I wanted to do, how to unleash the potential in me. All I see is a confused, overwhelmed, and frustrated 22-year old. Despite that, I know I should not give up and continue to assess where I can thrive best.  Before pursuing a Master's in Data Science at the Asian Institute of Management (AIM) in 2019, I worked for a company that sells swimming pool equipment and chemicals. Since I consider myself an introvert, I dreaded facing clients and talking to suppliers which are part of my job. Eventually, I was able to improve my communication skills and become more confident in dealing with people from all walks of life. I also monitor the company's sales performance and find ways to improve sales. Having a profitable business starts with efficiency, which includes utilizing data, addressing redundancies, and establishing a company-wide system. During my stay, I was able to implement a system that minimizes end-to-end customer transactional time by 75%. However, my capabilities that time can only do so much. I had no knowledge of statistical and analytical tools aside from Microsoft Excel which I completely learned on my own. To thrive in a fast-paced environment, I realized I have to broaden my skill set and determine what I want to accomplish in my career. This has led me to enter the realm of Data Science, a highly technical field that I have zero knowledge about aside from the information I read on the internet.  It's been more than a year since I started my data science journey and I have been exposed to different domains which include but not limited to consumer goods (or FMCG), retail (e-commerce), development, and even food. In implementing projects, I mainly use the Python Programming Language for data pre-processing, data exploration, and data analysis. The capstone project, which is a culmination of the MSc Data Science Program, is about the determination of the drivers of sales of a multinational consumer health business using Machine Learning. At first, I thought simple mathematical analysis can solve the problem. In reality, there are a lot of factors which affect sales which makes it hard for human mind to quantify and that's where Artificial Intelligence comes in. My most significant realization out of this is that data science is going to be this generation's oil, and I am grateful to be one of the people that will push and inspire for data-driven decision making. I look forward to gaining more experience from industry leaders in the field of Data Analytics, Big Data, Machine Learning.  Now that the pandemic has forced people to stay home as much as possible, I have been in a continuous learning mode for Data Science. At the same time, I also have rekindled my hobby for cooking which had been set aside due to my busy schedule.   For collaboration and job opportunities, please feel free to message me on Linkedin or write me an e-mail at ongchelseaanne@gmail. com. "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                                 Personalized Recommendation System using Collaborative Filtering of Zomato Restaurant Reviews                              :               Subject/s of Focus: Big Data and Cloud Computing:                                                                       03 Jun 2020                &lt;/span&gt;                                                                                                                  All Projects:                                                                                                     Uncovering Similarities between recipes              :       Subject/s of Focus: Data Mining and Wrangling:                               05 Jun 2020        &lt;/span&gt;                                                                                                                             Uncovering Cuisines Based on Ingredients              :       Subject/s of Focus: Machine Learning:                                                                                               03 Jun 2020                                                                                                                                     Classifying Food Images using Deep Learning              :       Subject/s of Focus: Deep Learning:                                                                                               03 Jun 2020                                            "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/clustering-recipes/",
    "title": "Uncovering Similarities between recipes",
    "body": "2020/06/05 - Subject/s of Focus: Data Mining and Wrangling Authors: Gilbert Chua, Chelsea Ong, Jomilynn Rebanal, Van Yu  This project is for the fulfillment of the requirements in our Data Mining and Wrangling course. Executive Summary: Recipes are the blueprint for a dish and changes in the ingredients may either enrich or worsen the taste. Recipe tweaking due to the unavailability of certain ingredients is a common dilemma among home cooks and restauranteurs. In this study, the researchers explored more than 38,000 recipes scraped from allrecipes. com to answer the question “What are the similarities between recipes based on their ingredients?” The dataset included 2,175 ingredients and each ingredient was treated as a categorical feature. Given the features’ data type, one-hot encoding was used in vectorization. The recipes underwent feature reduction using principal component analysis (PCA) at 80% explained variance. Assuming no prior knowledge on the recipes, the researchers analyzed the natural clusters of recipes through K-means since this method is intuitive and computationally efficient. Based on the internal validation criteria, six (6) seemed to be the optimal number of clusters. Notably, this study revealed that recipes clustered based on broad flavor profiles (Pungent, Sweet, Savory, Hearty, Simple) and on the number of ingredients used (Easy). The generated clusters here can be used as an alternate classification system that is more based on flavor profiles as opposed to using ingredients and cuisine to group recipes together. Classification via flavor profiles may provide a novel and more intuitive method of catering to the tastes of customers. Moreover, results of this study can serve as an input to a food recommender system and as a cornerstone for future food anthropologic studies. Note:: To see the files and codes used for this project, click here For questions and inquiries, you may send me a message via Linked in "
    }, {
    "id": 6,
    "url": "http://localhost:4000/zomato-recommender-system/",
    "title": "Personalized Recommendation System using Collaborative Filtering of Zomato Restaurant Reviews",
    "body": "2020/06/03 - Subject/s of Focus: Big Data and Cloud Computing Authors: James Labergas, Chelsea Ong, Lance Sy, Maisie Tan My team developed a collaborative-based recommender system via Alternating Least Squares and a content-based recommender system using restaurant reviews scraped from the Zomato website. The recommendations generated can be used by restaurant owners and customers in maximizing the platform. This project is very memorable for me because I presented for the first time in public. It was nerve wracking but overall it was fulfilling.  This project is for the fulfillment of the requirements in our Big Data and Cloud Computing course. Abstract: Launched in India back in 2008, Zomato operates with the vision of bringing better food to people. To date, it is one of the largest food aggregators with operations spanning across 24 countries. With the millions of users on its platform and the customer feedbacks available in their page, there is no doubt that the platform has a rich understanding on its customers’ respective food profiles. With the objective of generating more value for the customers and other Zomate stakeholders, this project aims to address this question, Can we develop a personalized restaurant recommender system for Zomato users?. Using restaurant reviews data scraped from the Zomato website, we develop a collaborative-based recommender system via Alternating Least Squares, as well as a content-based recommender system. With these newly developed recommender systems, we then make recommendations to restaurant owners and customers to maximize the Zomato platform in understanding their customers more and to gain more traction for their food service establishments. We also propose for future researchers to include more filtering options and introduce more countries into the study. Note:: For more information on the files and codes used for this project, you may send me a message via Linked in "
    }, {
    "id": 7,
    "url": "http://localhost:4000/uncovering-cuisines-ingredients/",
    "title": "Uncovering Cuisines Based on Ingredients",
    "body": "2020/06/03 - Subject/s of Focus: Machine Learning Author: Chelsea Anne S. Ong Executive Summary: One way a nation distinguishes itself is through its geographical and cultural ties which includes local foods and ingredients. Because of these, some ingredients are strongly associated with a particular cuisine. For example, sushi is automatically categorized as japanese cuisine. Classification is easy for common dishes, but not for the not-so-common ones. Using lists of ingredients, the machine learning model is able to predict the correct cuisines 66. 5% using L2 Linear Support Vector Machines (Linear SVM) with C=0. 1. Chinese Cuisine turned out the be the easiest to predict and Southern US the hardest. On the other hand, misclassifications occur mostly in British Cuisines which are predicted as Irish or Russian cuisines and Thai cuisines are predicted as Vietnamese cuisines. As a restaurateur or a chef, cuisine classification is important to establish their niche or delve into fusion cuisines. In addition, they can optimize their ingredients to avoid spoilage. Motivation: Whenever I cook or eat, what comes to mind is what I find myself craving whether Japanese, Chinese, or Filipino food. After I decided on a cuisine, that’s when I decide on what specific food on that cuisine I would choose. What makes a dish aside from how it is prepared are its ingredients. How does the list of ingredients dictate the dish’s cuisine? Using the data gathered from the kaggle competition “What cooking?”, which contains the list of ingredients for each dish, the target would be the cuisine (e. g. Chinese, American, Filipino). The dataset contains 39774 dishes from 20 cuisines. By virtue of machine learning, various machine learning classification algorithms shall be implemented and compare their accuracies. The main objective is to figure out what algorithm will have the highest accuracy and how accurate it is.  This project is for the fulfillment of the requirements in our Machine Learning course. Note:: To see the files and codes used for this project, click here For more information, you may send me a message via Linked in "
    }, {
    "id": 8,
    "url": "http://localhost:4000/classifying-food-images/",
    "title": "Classifying Food Images using Deep Learning",
    "body": "2020/06/03 - Subject/s of Focus: Deep Learning Author: Chelsea Anne S. Ong  This project is for the fulfillment of the requirements in our Deep Learning course. Executive SummaryA certain image does not only necessarily represent a single attribute and most of the time it represents more than two. In other words, there can be multiple titles or labels that can be given for a single image. This problem is called multi-label classification which is used for content retrieval and scene understanding among few. For this study, a multi label classification algorithm is applied on food images using Keras (with Tensorflow backend). A simple CNN model is altered to give way to multi label classification. To make things easier, pre-trained CNN models are used particularly ResNet50, MobileNet, DenseNet121, and Xception. Afterwards, comparison of these results shall be done with Nanonets Multi Label Classification API. The results show a better F1 score at 75. 06% for Nanonets and only about 70. 46% for Xception model. Both of these models can be used for deployment as they both display intuitive and sound results. Motivation: When we see certain food images, are they easy to describe? Sometimes yes, sometimes no. Because of this, I want to explore if Deep Learning can help me with classifying food images. Using the sample food images data gathered from the blog “How To Easily Classify Food Using Deep Learning and Tensorflow”, I shall run pre-trained CNN models to predict labels for a particular food image. Given a food item, I would like to know what are the possible labels for a certain food image. For instance, given an image of a beef, the model shall provide tag such as “meat”, “protein”. This model can be useful for content based retrieval for businesses especially for the food industry where automated dietary plan app can be made based on user requirements. The use of this model comes in by automatically retrieving relevant images for the specific food item. Web Application: To make things more interesting and cool, this project is also deployed using Flask. This is how the landing page look like. The dataset used and the model features are listed here. For simplicity and faster running time, MobileNet model is used instead. To demonstrate prediction of food tags, simply upload an image and the prediction will come out. In this example, the model tagged the food image of a pizza as mains, carbs, and fats.  Note:: To see the files and codes used for this project, click here For questions and inquiries, you may send me a message via Linked in "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});