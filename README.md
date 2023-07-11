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

npm  install

```

2. Initialize the Mock Service Worker to enable login feature

```sh

npx  msw  init  public/  --save

```

3. Start the Dev Server

```sh

npm  run  dev

```

4. Navigate to the table

You can simply navigate to the /merged-cruises endpoint. However to test out the login flow click the green Login button at the top right to navigate to the login page. Leave the default credentials and click login. You should now be redirected to the appropriate page to view the table containing data about the ship sonar serveys/cruises.

The dev server will launch in your browser at [localhost:4444](localhost:4444) and will automatically reload as you make changes.

## Extra Features

### Data Table

I added a data table for the data to be displayed in to incorperate extra filtering features in addition to sorting the list by name. The filtration features include:

- Number of items to show dropdown - Control number of results on each page of the table
- Pagination with Page Indicator - Navigate between pages of results
- Searchbar - Allows you to search by entry ID and date created

### Dashboard Layout

I added the dashboard layout as it serves as a simple and modern yet professional approach to a front end.

### Login Flow

I added a the mock service worker (with the help of React Redux) to the app so that I can simulate a login flow from a fake REST API. Good for when the app expands to an enterprise level with more users and wants to introduce security to it easily.

### apiClient

Added an apiClient to simplify calls to REST APIs. Good for when the app scales to use several API calls throughout the app as the the app itself and APIs get more complex.

### URL Builder

The URL Builder is a all in one UI integration of the GMRT [GridServer Web Service URL Builder API](https://www.gmrt.org/services/gridserverinfo.php#!/services/getGMRTGrid). I implemented this to show the possibilities of the benefits of having a dashboard layout as the application becomes more complex.

### Map Viewer

I added the Map viewer componenet to allow for users to visually see where each ship was when it was surveying.
