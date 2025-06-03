# Meditation Timer

https://www.meditationintervaltimer.co.uk/

https://meditationtimer.orca-tools.com/

This is a simple timer that allows a number of sections to a meditation.
It plays a sound at the end of each section of meditation.

## Saving meditations

You can save a mediation and its sections. They are simply saved in the browsers local storage,


## PWA 

This is a PWA and will work once downloaded offline. This is achieved using the `vite-pwa-plugin`
https://www.npmjs.com/package/vite-plugin-pwa . Note it seemed to work much better if the a images and sounds were stored in the public folder.

## Oddities and Gotchas

### Playing sounds 

On apple devices there is a restriction where sounds can only be played if the user directly interact with the app. This is a problem for playing sounds at the end of intervals. I have been able to get round this by loading all the sounds into a map and then starting then pausing them immediately.
Be aware of this and always call the `preloadSounds()` method `sounds.ts` before using sounds that are played programmatically.

### Screen lock request

There is a request in the code to stop the device going into sleep mode. This is released once the meditation completes or is manually stopped. 


## Deployment 

The git hub branch main will deploy the code to AWS Amplify


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
