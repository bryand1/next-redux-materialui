# Next / Redux / MaterialUI

**Boilerplate project code**

[Next](https://nextjs.org/) is a React framework for server-rendered apps. Clone this repo to get up and running quickly with Redux and MaterialUI. 


## Getting started

```bash
git clone https://github.com/bryand1/next-redux-materialui
cd next-redux-materialui
npm install
npm run dev  # Start development server on port 3000  
```

## Google Analytics

`lib/gtag.js`

```javascript
// TODO: Enter your Google Analytics Tracking ID
export const GA_TRACKING_ID = '';  // UA-XXXXXXXXX-X
```

**If not using Google Analytics**

Delete `lib/gtag.js` then delete the following from `pages/_document.js`

```javascript
///...
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}}
//...
```

## Facebook Tracking Pixel

In `pages/_app.js` uncomment/edit these lines:

```javascript
// import Router from 'next/router';
// import withFBQ from 'next-fbq';
```

```javascript
// TODO: Enable Facebook Pixel
// export default withFBQ('XXXXXXXXXXXXXXX', Router)(withReduxStore(MyApp));
export default withReduxStore(MyApp);
```

## Resources

+ [React](https://reactjs.org/)
+ [Next](https://nextjs.org)
+ [Redux](https://redux.js.org/)
+ [MaterialUI](https://material-ui.com/)
+ [Express](https://expressjs.com/)
+ [Docker](https://www.docker.com/)
+ [Google Analytics](https://analytics.google.com)
+ [Facebook Pixel](https://www.facebook.com)

## Improvements welcome

Feel free to fork or open an issue. :smile:
