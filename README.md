fastn-test-cordova
==================

To install you will need Android SDK, ADP & Cordova CLI.

Install cordova with:

```javascript
npm i cordova -g
```

Once you have the `fastn-test-cordova` repo, ```make``` should install all the npm dependencies with the sequence below.

HOWEVER!!! - Before your android build there appears to be a cordova glitch for which I applied [this fix](http://stackoverflow.com/a/30240520/4830780)

```bash
>make init
>make devwatch
```

`devwatch` is like watchify.

In a separate termial you can then make the cordova apps.

```bash
>make build
>cordova run browser
>cordova run android -device

```

