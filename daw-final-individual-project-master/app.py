from __future__ import division, print_function
# coding=utf-8
import sys
import os
import glob
import re
import numpy as np
import cv2
from operator import itemgetter
import pandas as pd

# Keras
from keras.applications.imagenet_utils import preprocess_input, decode_predictions
from keras.models import load_model
from keras.preprocessing.image import load_img, img_to_array
from keras.preprocessing import image

# Flask utils
from flask import Flask, redirect, url_for, request, render_template, jsonify,send_from_directory
from werkzeug.utils import secure_filename
from gevent.pywsgi import WSGIServer

# Define a flask app
app = Flask(__name__)

# # Model saved with Keras model.save()
MODEL_PATH = 'model.h5'

# Load your trained model
model = load_model(MODEL_PATH)
model._make_predict_function()          



def model_predict(img_path, model):
    os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
    MEAN = np.array([51.072815, 51.072815, 51.072815])
    STD = np.array([108.75629,  92.98068,  85.61884])
    
    categories = [
    'healthy', 'junk', 'dessert', 'appetizer', 'mains', 'soups', 'carbs', 'protein', 'fats', 'meat'
    ]
    img = load_img(img_path, target_size=(224,224))
    image = np.expand_dims(img, axis=0)
    image2 = preprocess_input(image)


    for i in range(3):
        image2[:, :, :, i] = (image2[:, :, :, i] - MEAN[i]) / STD[i]
    prediction = model.predict(image2)[0]
    labels = [categories[idx] for idx, current_prediction in enumerate(prediction) if current_prediction>0.8]
    # df=dict(zip(labels,prediction))
    # df=dict(sorted(df.items(),key=itemgetter(1),reverse=True)[:3])
    return tuple(labels)
    # return tuple(df.keys())



@app.route('/', methods=['GET'])
def index():
    # Main page
    return render_template('index.html')

@app.route('/static/js/<string:path>')
def serve_js(path):
    return send_from_directory('assets/js', path)

@app.route('/static/css/<string:path>')
def serve_css(path):
    return send_from_directory('css', path)

@app.route('/static/lib/bootstrap/js/<string:path>')
def serve_bootstrap_js(path):
    return send_from_directory('assets/lib/bootstrap/js', path)

@app.route('/static/lib/animate/<string:path>')
def serve_animate(path):
    return send_from_directory('assets/lib/animate', path)

@app.route('/static/lib/bootstrap/css/<string:path>')
def serve_bootstrap_css(path):
    return send_from_directory('assets/lib/bootstrap/css', path)

@app.route('/static/lib/counterup/<string:path>')
def serve_counterup(path):
    return send_from_directory('assets/lib/counterup', path)

@app.route('/static/lib/easing/<string:path>')
def serve_easing(path):
    return send_from_directory('assets/lib/easing', path)

@app.route('/static/lib/font-awesome/css/<string:path>')
def serve_fonts(path):
    return send_from_directory('assets/lib/font-awesome/css', path)

@app.route('/static/lib/font-awesome/fonts/<string:path>')
def serve_fonts1(path):
    return send_from_directory('assets/lib/font-awesome/fonts', path)

@app.route('/static/lib/jquery/<string:path>')
def serve_jquery(path):
    return send_from_directory('assets/lib/jquery', path)

@app.route('/static/lib/waypoints/<string:path>')
def serve_waypoints(path):
    return send_from_directory('assets/lib/waypoints', path)

@app.route('/static/lib/wow/<string:path>')
def serve_wow(path):
    return send_from_directory('assets/lib/wow', path)

@app.route('/static/lib/superfish/<string:path>')
def serve_superfish(path):
    return send_from_directory('assets/lib/superfish', path)

@app.route('/static/images/<string:path>')
def serve_images(path):
    return send_from_directory('assets/img', path)

@app.route('/static/images/portfolio/<string:path>')
def serve_images1(path):
    return send_from_directory('assets/img/portfolio', path)

@app.route('/predict', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        # Get the file from post request
        f = request.files['file']

        # Save the file to ./uploads
        basepath = os.path.dirname(__file__)
        file_path = os.path.join(
            basepath, 'uploads', secure_filename(f.filename))
        f.save(file_path)
        return jsonify(str(model_predict(file_path,model)))
    return None


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8082,debug=True)

