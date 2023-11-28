# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express back-end skills.

## Installation

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8000/> in your browser.

## Dependencies
- Express
- Node 5.10.x or above
- nodemon
- chance
- md5

## Features of Tweeter

- Write a tweet in the tweet box, and hit tweet!
- Remember to stay within the limit of 140 characters. Otherwise you will receive and error message and your tweet will not submit!
- If you've sucessfully submitted a tweet, a POST request will be sent to the server
- Then a GET request will be triggered to retrieve your tweet from the server and update it to your feed without needing to refresh! 

## Screenshots

!["Desktop view of Tweeter"](https://raw.githubusercontent.com/blueyellow7/tweeter/main/docs/Desktop-view.png)
!["Mobile view of Tweeter"](https://raw.githubusercontent.com/blueyellow7/tweeter/main/docs/Mobile-view.png)
!["Error message if tweet is too long"](https://raw.githubusercontent.com/blueyellow7/tweeter/main/docs/Error.png)