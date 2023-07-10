# Tide-Pool :ocean:

## About

Tide-pool is a sandbox BRX project, built in [Typescript 4.9](https://www.typescriptlang.org) using [React 18](https://reactjs.org/).

**Noteworthy Tooling Included:**

- [Vite](https://github.com/vitejs) - Build tool and dev server
- [Redux-Toolkit](https://redux-toolkit.js.org/) - React/Redux State Management
- [TailwindCSS](https://tailwindcss.com) - CSS utilities
- [React-Map-GL](https://visgl.github.io/react-map-gl/) - React Wrapper for [Mapbox-GL](https://docs.mapbox.com/mapbox-gl-js)

## Developing

The project requires Node 18 to be installed on your local machine, refer to npm for [download instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

1. Install project dependencies

```sh
npm install
```

2. Initialize the Mock Service Worker to enable login feature

```sh
npx msw init public/ --save
```

3. Start the Dev Server

```sh
npm run dev
```

The dev server will launch in your browser at [localhost:4444](localhost:4444) and will automatically reload as you make changes.


## Extra Features

##### Data Table
I added a data table for the data to be displayed in to incorperate extra filtering features in addition to sorting the list by name. The features include 
  - Number of items to show dropdown - Control number of results on each page of the table
  - Pagination with Page Indicator - Navigate between pages of results
  - Searchbar - Allows you to search by entry ID and date created

#####  Dashboard Layout
I added the dashboard layout as it serves as a simple and modern yet professional approach to a front end.

##### Mock Service Worker (MSW)
I added a the mock service worker (with the help of React Redux) to the app so that I can simulate a login flow from a fake REST API. Check console when you click the login page for a response code.
  