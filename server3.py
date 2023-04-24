
import time
import pymongo
from pymongo import MongoClient
import json
from datetime import datetime
import dht
print('start')
cluster = MongoClient("mongodb+srv://Tempsens:Tempsens@tempsens.o8skpx3.mongodb.net/test")
db = cluster["test"]
collection = db["temps"]

def run():
 t = time.time()
 tt = temperture
 th= humidity
 val = {"time":t,"teperature":tt,"humidity":th}
 collection.insert_one(val)
 Timer(1,run).start()
run()

