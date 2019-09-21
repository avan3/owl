#!/usr/bin/env python

from faker import Faker
import json
import urllib3
import random
import sys
import os

def generateData(num):

    sampleFolder = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'sampledata')
    if not os.path.exists(sampleFolder):
        os.makedirs(sampleFolder)


    fake = Faker()
    tags = ['fitness', 'badminton', 'development', 'tutor', 'languages', 'carpentry']
    data = []

    for i in range(int(num)):
        elem ={}
        elem['name'] = fake.name()
        elem['job'] = fake.job()
        elem['address'] = fake.address()
        elem['city'] = fake.city()
        elem['country'] = fake.country()
        elem['timezone'] = fake.timezone()
        elem['tag'] = random.choice(tags)
    
        data.append(elem)

    with open(os.path.join(sampleFolder, "data.json"), 'w') as fp:
        json.dump(data, fp)
        fp.close()


    url = 'https://randomuser.me/api/?results=' + num
    http = urllib3.PoolManager()
    headerForQuery = urllib3.make_headers(
        {"Accept": "application/json"},
    )
    query = http.request(
            "GET", url, headers=headerForQuery
        )
    print("Request status: " + str(query.status))
    prof = json.loads(query.data)

    for index, profile in enumerate(prof['results']):
        image = http.request('GET', profile['picture']['large'])
        with open(os.path.join(sampleFolder, data[index]['name'] + ".jpg"), 'wb') as fp:
            fp.write(image.data)
            fp.close()

if __name__ == "__main__":
    
    if len(sys.argv) < 2:
        sys.exit("Missing number of profiles to generate")
    else:
        generateData(sys.argv[1])
