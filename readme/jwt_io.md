## Using jwt.io only
This is an alternative way to create a JWT token, but you have to copy/paste quite some information for each token.
 - Follow this link to <a href="https://jwt.io/#debugger-io?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im15LWtleS1pZGVudGlmaWVyIn0.eyJpc3MiOiJodHRwczovL3FsaWsuYXBpLmludGVybmFsIiwiYXVkIjoicWxpay5hcGkiLCJzdWIiOiJhbm90aGVyQGdteC5ub3QiLCJncm91cHMiOlsiRXZlcnlvbmUiLCJPdGhlckdyb3VwIl0sIm5hbWUiOiJBbm90aGVyIiwiZXhwIjoxODAwMDAwMDAwfQ" target="_blank">jwt.io</a> which should fill in already the HEADER and the PAYLOAD for you. If not, this is what you have to enter: 
 
   * Paste this into the "HEADER" field: (make sure "kid" matches the kid setting in your helm qliksense .yaml)
     ```
     {
       "alg": "RS256",
       "typ": "JWT",
       "kid": "my-key-identifier"
     }
     ```
   * Paste this into the "PAYLOAD DATA" field 
```
{
  "iss": "https://qlik.api.internal",
  "aud": "qlik.api",
  "sub": "user@company.com",
  "groups": [
    "Everyone",
    "OtherGroup"
  ],
  "name": "FirstName LastName",
  "exp": 1800000000
} 
```
 - **Adjust the settings** for sub, groups, name, exp accordingly
 - Paste the content of your priv.key into the last field field on the form (section "VERIFY SIGNATURE")
 - (you don't need the paste public key)
 
 <img src="jwtio.png"/>
 
Now you can use the token to impersonate. <a href="using_token.md">Check out</a> how to use it.
