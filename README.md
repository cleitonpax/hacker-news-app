# Hack News clone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0 and @angular/pwa.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build --prod` to build the project. The build artifacts will be stored in the `dist/` directory. 

## Serve build

Run `cd dist/hn1` to enter the project folder.

Install Lite-server `npm install -g lite-server`, and run `lite-server`. The application will open in your browser.  

## Fake Login Service, Submits and Replies

The login service is not connected to any service. It only saves the user id in the Login page submit, to the localstorage, for mock-up only.

The submits and replies features are not implemented, for mock-up only. Same for Hide and Favorite features in Item page.

## PWA in localhost

The service workers that boost the loading for Progressive Web Apps only load at https servers.


