// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyCxt4a_u9kxg0GIyOeKf_xRKhpO7pW6tjY",
    authDomain: "weatherapi-8ff51.firebaseapp.com",
    databaseURL: "https://weatherapi-8ff51.firebaseio.com",
    projectId: "weatherapi-8ff51",
    storageBucket: "weatherapi-8ff51.appspot.com",
    messagingSenderId: "872605288421",
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
