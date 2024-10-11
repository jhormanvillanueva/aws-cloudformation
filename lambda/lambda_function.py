import requests
import json


def lambda_handler(event, context):
    # TODO implement
    url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
    url2 = "https://api-colombia.com/api/v1/Department/4/touristicattractions"
    print(event)
    statusCode = 200
    
    try:
        
        if event['key1'] == "bitcoin":
            response = requests.get(url)
            data = response.json()
            body = data
        
        elif event['key1'] == "colombia":
            response = requests.get(url2)
            data = response.json()
            body = data 
        
        
        print(data)
        
    except KeyError:
        statusCode = 400
        body = "Incorrecto key"
    
    res = {
        "statusCode": statusCode,
        "body": body
    }
    
    return res