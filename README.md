# Clothing webpage
A product details section for a clothing site with cart functionality to store a customer’s product selections
## Deployment
The web page has been deplayed on the S3 Bucket AWS service. <br />
http://bensweb.click/clothing/
## How to run
Clone the project
```
git clone https://github.com/Ben-JClark/clothing-webpage.git
```
Navigate to the project
```
cd .\clothing-webpage\client
```
Install node modules
```
npm install
```
To start the React project
```
npm start
```
### Compile the project to HTML, Javascript, and CSS files
Build the project
```
npm run build
```
If you want to serve these static pages, a simple way is to use the "serve" package.
```
npm install -g serve
```
```
serve -s build
```
## Tech stack choices
- React
- TypeScript
- CSS
## Testing
No tests have been set up
