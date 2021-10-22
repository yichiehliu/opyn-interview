# opyn-interview

## How to use
### Install packages
```sh
npm install
```
### Starting dev server
```sh
npm start
```
### Building the repo in production mode
```sh
npm run build:prod 
```
### Checking lint
```sh
npm run lint
```
***

## Intro
### Main Packages & tools

1. CSS: styled-components, polished
2. Wallet connection: web3-react, ethers.js
3. Wallet connection RPC: alchemy api
4. Router: Reach router
5. Configuration: Babel, Webpack, Typescript, Prettier, Eslint

### Directories

1. Components: 
   1. Button
   2. Card  
   3. Dropdown
   4. InfoWrap
   5. Input
   6. Order
   7. Page
   8. Slider
   9. SideBar
   10. Tab
   11. Wallet: There are Intall Metamask / Wallet Error / Connect to Metamask status
 
2. Connectors / Constants: constants, settings for wallet connection
3. Data: tx and action button descriptions for each tx step 
4. Pages: 
   1. Home page and also custom components that only used in Home page
      1. OrderAction: if want to test other three types of tx flow just remove the disabled and change the onClick the isLoading as Market Sell Button
   2. Not found page to redirect to if there is an incorrect path requests
5. Hooks: Hook-like functions
6. Types: Types for typescript
7. Libs: Reusable functions
8. Styles: styles.tsx create basic setting and color variables, and use normalize of polished.js to normalize abnormalities across browsers



