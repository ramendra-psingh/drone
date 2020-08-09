from flask import Flask, render_template, json, request, url_for, \
	send_from_directory
from flask import jsonify
from werkzeug import secure_filename
from flask_mysqldb import MySQL
import os, paramiko, sys
from time import sleep
import subprocess

from shutil import copyfile
import logging
import commentjson as json
import time


import argparse
import sys
import json
import re
from prettytable import PrettyTable

from tello import Tello
from datetime import datetime
import time

start_time = str(datetime.now())

app = Flask(__name__)

@app.route('/')
def main():
	return render_template('index.html')

@app.route('/sendData', methods = ['GET', 'POST'])
def send_data():

    action = request.form['droneData']
    action_list = action.split(',')
    action_list.insert(0,'command')

    tello = Tello()

    for _eachaction in action_list:
        _eachaction = _eachaction.lower()
        _eachaction = _eachaction.replace('-', ' ')
        print "Taking action - " + _eachaction
        #tello.send_command(_eachaction)

    tello.on_close()

    result = { 'result' : 'success', 'html': '<h1>Drone Actions executed successfully.</h1>' }
    return result

if __name__ == "__main__":
	app.run(port=5000, debug=True, host='0.0.0.0')
