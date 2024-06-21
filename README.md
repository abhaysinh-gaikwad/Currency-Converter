# Currency Converter

This project is a simple currency converter application built with React. It allows users to select currencies, enter an amount, and convert between them using real-time exchange rates fetched from a remote API.

## Project URL


The live deployed version of this project can be accessed at:
- [Currency Converter Live Demo](https://currency-converter-delta-dusky.vercel.app/)

The application fetches currency data from the following API:
- [https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1)

In case of failure to fetch data from the above URL, it falls back to:
- [https://latest.currency-api.pages.dev/v1/currencies.json](https://latest.currency-api.pages.dev/v1/currencies.json)

## Folder Structure
```bash
Currency-Converter/
│
├── public/
│ ├── index.html
│ └── ...
│
├── src/
│ ├── components/
│ │ ├── CurrencySelector.jsx
│ │ ├── AmountInput.jsx
│ │ ├── ConvertButton.jsx
│ │ └── TransactionList.jsx
│ ├── App.jsx
│ ├── App.css
│ └── index.js
│
├── README.md
└── package.json
```


- **`public/`**: Contains the HTML entry point (`index.html`) and other static assets.
- **`src/`**: This directory houses all the application's source code.
  - **`components/`**: Contains reusable React components used throughout the application.
  - **`App.js`**: Main component that orchestrates the currency conversion logic.
  - **`App.css`**: Styles specific to the `App` component.
  - **`index.js`**: Entry point for the React application.
- **`README.md`**: This file, containing project information, setup instructions, and any relevant details.
- **`package.json`**: Manifest file for npm, listing dependencies and scripts.

## Getting Started

To run this application locally:

1. Clone the repository.
```bash
git clone https://github.com/abhaysinh-gaikwad/Currency Converter.git
```
2. Navigate to the project directory:
   ```bash
   cd my-currency-converter
   ```
3. Install dependencies using npm:
```bash
npm install
```
4. Start the development server:
```bash
npm run dev
```
## Features
- Currency Selector: Choose the currency you want to convert from and to.
- Amount Input: Enter the amount you wish to convert.
- Convert Button: Initiate the currency conversion process.
- Transaction List: View the last 5 currency conversion transactions.

## Notes
- This project uses React hooks (useState and useEffect) for managing state and side effects.
- Axios is used for making HTTP requests to fetch currency data.
- Error handling is implemented for scenarios where currency data retrieval fails.
