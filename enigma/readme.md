# Engine API on QSEoK

The EngineAPI is available in a Qlik Sense on Kubernetes deployment under the endpoint
/api/engine/openapi/rpc ... how I found out? Try this:
```
kubectl describe ingress qlik-engine
```
you will get a result like the below
```
Name:             qlik-engine
Namespace:        default
Address:
Default backend:  default-http-backend:80 (<none>)
Rules:
  Host  Path  Backends
  ----  ----  --------
  *
        /api/v1/apps/import       qlik-engine:9076 (172.17.0.62:9076)
        /api/v1/apps              qlik-engine:9076 (172.17.0.62:9076)
        /api/engine/openapi       qlik-engine:9076 (172.17.0.62:9076)
        /api/engine/openapi/rpc   qlik-engine:9076 (172.17.0.62:9076)
        /api/engine/asyncapi      qlik-engine:9076 (172.17.0.62:9076)
```
Run a GET request against https://{{yourserver}}/api/engine/openapi/rpc and you will get a long, long response explaining all 
the available methods. You will need Websockets protocol to call them. See <a href="app.js">app.js</a> as an example.
  
The authentication works with Bearer Token, which you have to configure in your qliksense.yaml's identity-provider section and create a signed token (see <a href="../../..">main page</a> of this git)

## Full application workflow

In <a href="app.js">this example</a> I am showing a full workflow
 * create a new app
 * create a dataconnection in that app (REST connection)
 * set loadscript
 * execute loadscript
 * save app
 
 
