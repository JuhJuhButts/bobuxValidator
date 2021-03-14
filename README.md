# Bobux Validator
Bobux Validator is a simple Node.js app that shuts down your Windows machine (assuming it is the server) if you do not have enough Bobux.

## How to Use
You start the app by running `npm start` in a terminal targeted at the root directory of this app. Open the site with `ctrl`+`click` on the link it logs, and it will open the page in your browser. From there, enter the amount of Bobux you currently have. 

## Result
When submitted with hitting enter or clicking `Verify`, it will log your status to the console, and shut down if necessary. You can abort the shutdown within 10 seconds by entering an amount greater than 500.

## Additional Info
The app processes submitted number input via [HTML form tags](https://developer.mozilla.org/docs/Web/HTML/Element/form), and uses [ExpressJS](https://expressjs.com) to act on the input provided.