# AgGridCli

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.0.

## Development server
Run `ng serve` for a dev server. Navigate to `http://10.101.4.89:4200/`. The app will automatically reload if you change any of the source files.
Run `npm start` to run start property. If none, will run node server.js {(:=-=:)}

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

ERROR : Cannot find name 'describe'. Cannot find name 'it'. Cannot find name 'expect'.
SOLUTION: npm install --save-dev @types/jasmine

ERROR: Failed: Unexpected module 'FormsModule' declared by the module 'DynamicTestModule'. Please add a @Pipe/@Directive/@Component annotation.



## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


ERROR: Failed: Component ... is not part of any NgModule or the module has not been imported into your module.
SOLUTION: Add the component to the declarations not only to the imports of spec.ts

ERROR: Failed: Unexpected directive ... imported by the module 'DynamicTestModule'. Please add a @NgModule annotation.
SOLUTION: remove it from imports of spec.ts and app.component.spec.ts or even from declarations of app.component.spec.ts if error persist

ERROR: Failed: No provider for ...!
SOLUTION: 

ERROR: Component ... is not included in a module and will not be available inside a template. Consider adding it to a NgModule declaration
SOLUTION: After folder renamed, restart IDE
