# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Getting Started

To get started with the project:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `yarn install` to install the necessary dependencies.
4. Use the available scripts (`yarn start`, `yarn test`, `yarn build`, `yarn eject`) to run, test, build, and eject the project, respectively.
5. Explore the codebase and customize it according to your requirements.

### Results
![image](https://github.com/AdityaCoder-N/data-analysis-task/assets/91337266/a1b06cc4-4cd7-4947-be6e-6b6c4dddc053)

![image](https://github.com/AdityaCoder-N/data-analysis-task/assets/91337266/3ce309dc-e997-4f29-9365-a4169dab7ce2)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---

## Project Overview

This project is a data analysis tool built with React using the Create React App boilerplate. It is designed to analyze and visualize data from a dataset using various statistical techniques.

### Data Fetching

The project fetches data from a JSON file named `Wine-Data.json`. This dataset contains information about different types of wines, including their chemical properties and classifications.

### Data Analysis

The project performs various data analysis tasks on the fetched dataset, such as calculating statistical measures like mean, median, and mode for different attributes of the wines. It also creates new properties based on existing ones, such as the "Gamma" property calculated as `(Ash * Hue) / Magnesium` for each data point.

### Components

The project consists of multiple components responsible for different parts of the data analysis process. These components include tables to display statistical measures, charts to visualize data distributions, and forms to interactively explore the dataset.

### Dependencies

The project uses several dependencies to facilitate development and enhance the user interface. These dependencies include Mantine for UI components, React Router DOM for routing, and Tailwind CSS for styling.



Enjoy exploring and analyzing your data with this React-based data analysis tool!
