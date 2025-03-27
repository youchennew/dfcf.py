def trade(data):
    import requests
    import json

    with open("login.json", "r") as login_file:
        verify=json.load(login_file)
    url="https://jywg.18.cn/Trade/SubmitTradeV2"
    headers={"User-Agent":"Mozilla/5.0"}
    params={}
    params["validatekey"],cookie=verify
    headers["Cookie"]="Uuid="+cookie
    response = requests.post(url,params=params,data=data,headers=headers)
    print(response.text)
