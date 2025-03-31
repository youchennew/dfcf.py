import requests
import json
def trade(order) -> bool:
    #with open("login.json", "r") as login_file:
    #    verify=json.load(login_file)
    verify=["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx","xxxxxxxxxxxxx"]
    
    
    url="https://jywg.18.cn/Trade/SubmitTradeV2"
    headers={"User-Agent":"Mozilla/5.0"}
    params={}
    params["validatekey"],cookie=verify
    headers["Cookie"]="Uuid="+cookie
    response = requests.post(url,params=params,data=order,headers=headers)
    result=json.loads(response.text)
    if result["Status"]==0:
        print(order["tradeType"]+","+"success"+","+ result["Data"][0]["Htxh"])
        return True
    elif result["Status"]==-1:
        print(result["Message"])
        return False
    else:
        print("error")
        return False
