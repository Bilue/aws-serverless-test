## Design
- Created a runner file to test the application locally
- Modiifed the handler parameters to event and context to simulate an AWS trigger
- Used the existing utils to perform HTTP request
- Some environment are hard-coded for the purpose of the test only in order for reviewers to run the application with no missing variable errors
## Install
- install `node js`
- run `npm install` to download the packages
- run `npm run build` to build the code

## Run the application
- A runner file is provided for local testing
- run `node ./build/src/runner.js` test locally

## Run Unit Test
- run `npm run test` to execute unit test
- `coverage` fold will be generated to view the coverage of the unit tests

## Note


