# opyn-interview
## Intro
### Main Packages & tools

1. CSS: styled-components, polished
2. Wallet connection: web3-react, ethers.js
3. Wallet connection RPC: alchemy api
4. Router: React router dom 
5. Configuration: Babel, Webpack, Typescript, Prettier, Eslint
***
### Instructions
1. To go through the repo, you can start from 
   1. App.tsx -> 
   2. pages/Home -> 
   3. Home/OrderSideBar -> 
   4. Three parts of the Order SideBar
      1. Home/OptionInfoCard: Buy & Sell button with Option Info
      2. Home/MarletLimitTab: Market & limit tab, includes Order(4 types), Tx Action Card, Tx Summary Card
      3. Home/OrderAction: Order Action Card, including buttons & functions for Wallet Connection, Approve Tx 
   5. Then start to look into the  components...etc
***

### Directories

1. **Components**: 
   1. **Wallet**
       1.  There are Intall Metamask / Connect to Metamask / Wallet Connection Error / Switch Network status, 4 different steps(status)
           1.  **Install Metamask Button**: will show up when browser is not detected with metamask extension
           2.  **Connect to Metamask Button**: If users are not connected to Metamask, Connect to Metamask Button will show up
           3. **Connection Error Box**: If users connect to unsupported network(Networks not listed in the src/connectors enum ChainId), or user reject connection request...etc(Listed in src/libs getErrorMesg()), then the Wallet Connection Error Box will show up
           4. **Wrong Network Button**: If users are currently connected to non-mainnet networks, Wrong Network Button will show up, user can click it to switch to mainnet
       2.  If webpage is already connected to Metamask, it will jump to second step automatically.
   2. **Button**: 
      1. Normal Button
      2. Icon Button
      3. Buy & Sell Button
      4. Connect Wallet Button
      5. Approve Button
      6. Wrong Network Button
      7. Install Metamask Button
      8. Max value Button
   3. **Input**: 
      1.**Normal Input**
      2. **Input Elements** for actions/icon inside input field
      3. **Input Group**: for Normal Input & Input Elements bundling
      4. **Input with Max Value Button**: with functionality as well
      5. **Input with Plus and Minus icon Buttons**: with functionality as well
   4. **Order**: 
      1. **Four Orders(buy-limit / sell-limit / sell-market / buy-market)** 
      2. Other elements showed up in four orders
   5. **SideBar**
       1.  **Wrapper for Order SideBar** also wrapper for other types of sidebar content since I found **there were multiple types of sidebar content in Opyn V2**
   6. **Slider**: 
      1. **Basic Slider**: with Critical value as reminder label
      2. **Slider Label**: with the requested amount of sections out of 100%
      3. **Collateral Slider**: custom style slider
   7. **Tab**: 
      1. **Tabs**: Tabs as Tab Wrapper, wrap the title and the content
      2. **Tab**: Tab Header Button
   8. **Card**:
      1.  **Normal Card** 
      2.  **Tx Action Card** on Sidebar
      3.  **Tx Summary Card** on Sidebar
   9. **Dropdown**: Custom style Dropdown 
   10. **Page**
       1.  Main page wrapper
       2.  Page title
       3.  Page subtitle
   11.  **InfoWrap**

 
2. **Connectors / Constants**: constants, settings for wallet connection
3. **Data**: tx and action button descriptions for each tx step 
4. **Pages**: 
   1. **Home page**: and also custom components that only used in Home page
      1. **OrderAction**: if want to test other three types of tx flow just switch the enable/disabled button on the left side of the page, other 3 types of tx approve button will be available
      2. **Main States**
         1. **Order**
            1. Order type: BUY / SELL
            2. Price type: MARKET / LIMIT
            3. Current Tx step: number
         2. **isLoading**: for fake loading
         3. **disable**: to decide whether you can see other three order flows
   2. **Not found page**: to redirect to if there is an incorrect path requests
5. **Hooks**: Hook-like functions for wallet connections
6.  **Types**: Types for typescript, using both type and enum 
7.  **Libs**: functions for wallet connections
8.  **Styles**: styles.tsx create basic setting and color variables, and use normalize of polished.js to **normalize abnormalities across browsers**
***

## How to use
### Install packages
```sh
npm install
```
### Starting dev server
```sh
npm start
```
### Building the repo 
```sh
npm run build
```
### Checking lint
```sh
npm run lint
```
