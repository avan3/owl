#!/usr/bin/env python

from faker import Faker
import json
import urllib3
import random

def generateData():

    fake = Faker()
    tags = ['fitness', 'badminton', 'development', 'tutor', 'languages', 'carpentry']
    data = []

    for i in range(500):
        elem ={}
        elem['name'] = fake.name()
        elem['job'] = fake.job()
        elem['address'] = fake.address()
        elem['city'] = fake.city()
        elem['country'] = fake.country()
        elem['timezone'] = fake.timezone()
        elem['tag'] = random.choice(tags)
    
        data.append(elem)

    with open("data.json", 'w') as fp:
        json.dump(data, fp)
        fp.close()

if __name__ == "__main__":
    
    generateData()
