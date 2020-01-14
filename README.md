## Source: 
https://app.pluralsight.com/library/courses/angular-fundamentals/table-of-contents

## Note: Getting below error: 
Browse the code from (https://github.com/sendtodilip/PSAngularFundamentals/tree/390fdfa90fd9a4e3903c62bb7b1311ea9611c7a2)

    i ｢wdm｣: Compiled successfully.
    [HPM] Error occurred while trying to proxy request /api/events from localhost:4200 to http://localhost:8808 (ECONNREFUSED) (https://nodejs.org/api/erro...
    [HPM] Error occurred while trying to proxy request /api/events from localhost:4200 to http://localhost:8808 (ECONNREFUSED) (https://nodejs.org/api/erro...

    and in browser console:

    zone.js:2969 GET http://localhost:4200/api/events 504 (Gateway Timeout)
    event.service.ts:40
    HttpErrorResponse {headers: HttpHeaders, status: 504, statusText: "Gateway Timeout", url: "http://localhost:4200/api/events", ok: false, …}
    headers: HttpHeaders {normalizedNames: Map(0), lazyUpdate: null, lazyInit: ƒ}
    status: 504
    statusText: "Gateway Timeout"
    url: "http://localhost:4200/api/events"
    ok: false
    name: "HttpErrorResponse"
    message: "Http failure response for http://localhost:4200/api/events: 504 Gateway Timeout"
    error: "Error occured while trying to proxy to: localhost:4200/api/events"
    __proto__: HttpResponseBase

# NgFundamentals

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
