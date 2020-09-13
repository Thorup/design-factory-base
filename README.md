# design-factory-base

This is a design factory for building UI components using react, storybook and styled components

## Component Factory Structure

The factory is build with [Storybook](https://storybook.js.org/) and [Styled Components](https://styled-components.com/).

### `npm run Storybook`

The Storybook integration provides a visual platform for atomizing the UI components into an components driven development approach. Storybook also functions as an `component API` / `component documentation` where the UI components can be tested, discussed and designed before they are exported into an application.

Projects using this factory base should adher to the following Storybook recomendations:

We recommend building UI's with a [component-driven]() process starting with atomic components and ending with pages.
Render pages with mock data. This makes it easy to build and review page states without nedding to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:
- Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories.
- Assemble data in the page component from your services. You can mock these services out using Storybook.
Get a guided tutorial on component-driven development at [Learn Storybook](https://www.learnstorybook.com/). Read more in [docs](https://storybook.js.org/docs).

In essence the Storybook framework relives the development team by having a single resource for UI element validation, test and quality assurance. It also serves as the `go to` bucket for reuseable UI elements.

### Styled Components

Styled Components is a support for the flow of creating componentized UI components. This framework isolates the CSS and HTML elements in a TS environment and allows the developer to create generalized rules for all of the HTML elements, and helps the component developer to discover CSS patterns that could be generalized and reused among HTML elements.

Styled Components integrates with many other projects such as [Styled Icons](https://styled-icons.js.org/) and delivers a simple solution for themeing the whole application.



## NPM

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
