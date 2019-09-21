#!/usr/bin/env python

from faker import Faker
import json

def generateData():

    fake = Faker()

    data = []

    for i in range(500):
        elem ={}
        elem['name'] = fake.name()
        elem['job'] = fake.job()
        elem['address'] = fake.address()
        elem['city'] = fake.city()
        elem['country'] = fake.country()
        elem['timezone'] = fake.timezone()
    
        data.append(elem)

    with open("data.json", 'w') as fp:
        json.dump(data, fp)
        fp.close()

if __name__ == "__main__":
    
    generateData()
