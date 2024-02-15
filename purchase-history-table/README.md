# Purchase History Table

This project is a Vue.js application that displays a table of purchase history items fetched from an API endpoint. Each row in the table represents a purchase item, showing details such as name, image, description, purchase date, purchase price, and category.

## Features

- Fetches data from an API endpoint to display purchase history items.
- Formats purchase date and purchase price for better readability.
- Applies category-based styles to table cells.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/amandeepmaman/idmeassessment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd idmeassessment/purchase-history-table
   ```

3. Install dependencies using npm:

   ```bash
   npm install
   ```

## Usage

1. Once the dependencies are installed, start the development server:

   ```bash
   npm run serve
   ```

2. Open your web browser and navigate to [http://localhost:8080](http://localhost:8080) to view the application.

3. The purchase history table with data fetched from the API endpoint will be displayed. The application is fully responsive, adapting to mobile view at a breakpoint screen size of 600px.

## Project Structure

- `src/`: Contains the source code for the Vue.js application.
  - `components/`: Contains Vue components used in the application.
  - `App.vue`: Main Vue application component.
  - `main.js`: Entry point of the Vue application.

## Dependencies

- Vue.js: A progressive JavaScript framework for building user interfaces.
- `.less`: A CSS preprocessor for styling.
- `@fontsource/source-sans-pro`: Font source for Source Sans Pro font.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Unit Testing

This project includes unit tests to verify the behavior of the `PurchaseHistoryTable` component. To run the tests, execute the following command:

```bash
npm test
```

This will run the Jest test suite and output the results to the console. The tests include checks for rendering, loading state, and error handling.
