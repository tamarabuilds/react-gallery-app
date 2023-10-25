# react-gallery-app
Learn more about the developer on <a href="https://www.linkedin.com/in/tamarabuilds/" target="_blank">LinkedIn</a>

Unit 07 project for the Full Stack JavaScript Techdegree. This project utilizes React to create n image gallery app. With the help of this powerful 'MVC' (model, view, controller) library, the app was built in the style of modern single-page applications to keep it fast and modular.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How It's Made
Tech used: HTML, CSS, JavaScript, React

'npm start' Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Optimizations

Extra attention was paid to re-run the data fetch with each query rather than store static data.

Additionally a friendly 404-error page is displayed when reaching a page that doesn't exist, such as "/broken/page/". In order to implement this, the route path needed wildcards and optional directories.

## Lessons Learned

Picked up a bunch of skills including:
 * Best practices of working with React:
    * Use JSX to write markup-like syntax directly in my JS files.
    * Manage state in a container component that passes data down to reusable stateless components.
    * React-supportive tools: Create React App and React Router modules.
 * Built out gallery components in modular fashion.
 * Practiced using the Axios to diplay images.
 * Practice adding logic for search requirements.
 * Learned how to add an image in React.


## Extra Features

* Browser navigation works for the search route - clicking forward and back in the browser navigates through all search history.
* 404 Error page
  * To reach this, enter '/broken/page/' you will see a friendly no-page component.
* Loading Indicator - as the app is retreiving data, a loading message is displayed.
* No Matches Message - a friendly message is displayed when a search has no results.
* Structure, style and CSS were updated:
  * Updated font to Lexend to improve readability. Learn more: https://www.lexend.com/
  * Favicon updated to a little star.
  * Background, photo container, button static and active colors were all updated. 
  * All images are rounded off for friendlier layout.


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License

[MIT](https://choosealicense.com/licenses/mit/)

