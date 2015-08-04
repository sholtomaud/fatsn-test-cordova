fastn-test-cordova
==================

to install you will need Android SDK & potentially also ADP & Cordova CLI

```javascript
npm i cordova -g
```

once you have the repo ```make``` should install all the npm dependencies with the sequence below.

HOWEVER before your android build there appears to be a cordova glitch for which I applied [this fix](http://stackoverflow.com/a/30240520/4830780)

```bash
>make init
>make build
>cordova run browser
>cordova run android -device

```

