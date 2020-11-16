# Restaurant Listing Tech Test

This task comes with a JSON file with restaurant data. The challenge is to build a React application to display the data and enable users to browse the restaurant listings. In one hour, please complete as many of the tasks as possible. We do not expect you to finish this test, just do as much as possible in the time frame.

## The Test

Using the data provided in `restaurants.json`:

1. Display a list of all of the data provided for each restaurant listing. You can decide on the UI for the application, but make it as clear and user friendly as possible. Don't worry too much about design, that won't be the focus of the task.
2. Create a list of cuisines dynamically from the data provided. Do not hard code this list, but instead take it from the listings.
3. When a user clicks on a cuisine, filter the list of restaurants displayed by that cuisine. If a user selects multiple cuisines, only return restaurants with all of these cuisines.
4. Add toggles for vegan friendly and dog friendly restaurants and allow a user to filter by these. This should only filtered restaurants currently displayed. E.g. if a user selects "British" as their cuisine and "Dog friendly", they should only see restaurants which serve British food and are dog friendly.
5. Add a clear button which will clear all filters and display the full list of restaurants.

## Review Criteria

At a high level we are looking for:

- A clear README with instructions on how to run the application
- Well structured code
- A good level of understanding of React
- Descriptive and regular commit messages
- Good use of Javascript data manipulation methods

## How to Use

In order to run the application please fork then clone the repo to your local machine. Then run 'npm install' to install all the npm packages in the project. Then run 'npm start' to start the React application which will automatically open a browser window.
