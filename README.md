# Dodgers

The Los Angeles Dodgers Fan Page - MEAN Stack

Deployed Link: https://ladodgers.herokuapp.com/

This is a fan site dedicated to Los Angeles Dodgers. You are greeted by a home page celebrating the 2020 World Series Champions.  Upon entering, you are able to read about the Dodgers' history from the start.  You can also view the current roster and look up pitching stats for the pitchers in teh 40 Man Roster, and hitting stats for the other players for each individual on the team.  These also includes a differentiation between regular season and postseason performance.  If you are curious about their schedule, there is a section dedicated to upcoming and past games. 

The app used MONGODB, EXPRESS, ANGULAR, and NODE.

You can view the running web app at the above link. As for cloning this repo and seeing the project for yourself, feel free to do so.

*** Cloning the repo ***

Using SSH: git@github.com:adrianb13/MEAN-Dodgers.git Using HTTPS: https://github.com/adrianb13/MEAN-Dodgers.git

Copy one of the above links depending on your preference and move into a preferred folder or create a new folder to copy the repo into.

Assuming you already have NODE installed, proceed with the following. If not, you can download it here which should include NPM (Node Package Manager): https://nodejs.org/en/download/

--If you want a new folder-- (do not include <> in any of the following) This creates a new folder: mkdir Then move into the new folder: cd Then clone folder: git clone git@github.com:adrianb13/Mean-Dodgers.git

--Using existing folder-- Then clone folder: git clone git@github.com:adrianb13/Mean-Dodgers.git

This process will copy the repo to your designated folder you are currently in.

Once complete move into the repo that was created: cd Mean-Dodgers. Once in the folder, you need to install the dependencies: npm install

If any dependencies need updating, you can update using: npm audit fix

This will install all the dependencies needed to run the web app. If all is installed correctly, you can run the app and test it using the following while in the root folder ("MEAN-Dodgers" folder):

node server.js

It will return the localhost port the app can be viewed on in your preferred browser. It should be localhost:4200/ otherwise follow the port listed in your console. In this example, you should be entering localhost:4200/ in your browser url.
