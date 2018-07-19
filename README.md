## startup

#### startup target service

```
$node test-target-service.js
```

#### startup api-gateway

```
$node index.js
```

## test token

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