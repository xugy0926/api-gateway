## api-gateway

api 网关在微服务架构中非常重要，api 网关封装了所有单个服务的接口，客户端只需要和网关交互即可。api 网关会把请求分发到具体的微服务中。另外，网关还肩负了 token 校验的功能，为所有的请求增加了安全性。

本项目模拟了 3 个微服务和 1 个网关，所有请求打到网关后会转发到具体的服务中。

![](https://github.com/xugy0926/api-gateway/blob/master/docs/api-gateway.png?raw=true)

## startup

#### startup target service

```
$node test-target-service.js
```

#### startup api-gateway

```
$node index.js
```

#### test token

```
{
  user_id: '123',
  user_name: 'xugaoyang',
  exp: 1580515200000 // 2020/1/1
}

secret_key: 'secret_key'

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTIzIiwidXNlcl9uYW1lIjoieHVnYW95YW5nIiwiZXhwIjoxNTgwNTE1MjAwMDAwfQ.Zm0l0pNdSqszmPVcuY0dxWLA1tGhuAODgS0KOWvrVdQ
```

```
{
  user_id: '123',
  user_name: 'xugaoyang',
  exp: 1485907200000 // 2017/1/1
}

secret_key: 'secret_key'

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTIzIiwidXNlcl9uYW1lIjoieHVnYW95YW5nIiwiZXhwIjoxNDg1OTA3MjAwMDAwfQ.PW5J1lCt0_2pmTHEKngk_MgvttuTmVc0f8VRUUST2i0
```

#### test request

###### /user/123/info

request 

```
GET /user/123/info
Host: localhost:3000
```

response

```
request successfully proxied to user : /123/info
{
  "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7",
  "accept-encoding": "gzip, deflate, br",
  "accept": "*/*",
  "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
  "cache-control": "no-cache",
  "connection": "close",
  "host": "localhost:3000"
}
```

###### /post/123/info

request

```
POST /post/123/info HTTP/1.1
Host: localhost:3000
x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTIzIiwidXNlcl9uYW1lIjoieHVnYW95YW5nIiwiZXhwIjoxNTgwNTE1MjAwMDAwfQ.Zm0l0pNdSqszmPVcuY0dxWLA1tGhuAODgS0KOWvrVdQ
```

response

```
request successfully proxied to post : /123/info
{
  "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7",
  "accept-encoding": "gzip, deflate, br",
  "accept": "*/*",
  "content-type": "text/plain;charset=UTF-8",
  "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTIzIiwidXNlcl9uYW1lIjoieHVnYW95YW5nIiwiZXhwIjoxNTgwNTE1MjAwMDAwfQ.Zm0l0pNdSqszmPVcuY0dxWLA1tGhuAODgS0KOWvrVdQ",
  "origin": "chrome-extension://fhbjgbiflinjbdggehcddcbncdddomop",
  "cache-control": "no-cache",
  "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
  "content-length": "17",
  "connection": "close",
  "host": "localhost:3000"
}
```

###### /message/123/info

request

```
PUT /message/123/info
Host: localhost:3000
```

response

```
request successfully proxied to message : /123/info
{
  "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7",
  "accept-encoding": "gzip, deflate, br",
  "accept": "*/*",
  "content-type": "text/plain;charset=UTF-8",
  "origin": "chrome-extension://fhbjgbiflinjbdggehcddcbncdddomop",
  "cache-control": "no-cache",
  "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
  "content-length": "17",
  "connection": "close",
  "host": "localhost:3000"
}
```
