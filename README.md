# Logging Test Application :flags:
One paragraph of project description here<br />

## :cd: Creating the Application
### Windows Instructions
1. Create new application
```command here ```
2. Install and Update Additional Packages
```
commands here
and here
```


### Mac Instructions 
Input any differences here if needed

## Start Servers
### Client 
1. Open command window and navigate to client folder
```cd ~/Desktop/Logging/client```
2. Run command to start server on local machine
```ng serve -o```
### Server
1. Open command window and navigate to server folder
```cd ~/Desktop/Logging/server```
2. Run command to start server on local machine
```.mvnw/ spring-boot:run```

## Open Application
1. Open internet window and navigate to [localhost:4200](localhost:4200)

## :shipit: Style Definitions
:link: [Article on Stylesheet importance](https://designmodo.com/create-style-guides/)<br />
## :trophy: References and Tutorials Used
:link: [Angular 8 + Spring Boot 2.2: Build a CRUD App Today!](https://developer.okta.com/blog/2019/05/13/angular-8-spring-boot-2)<br />
:link: [Angular Testing](https://angular.io/guide/testing)<br />
:link: [Angular Form Greatness](https://angular.io/guide/reactive-forms)<br />
:link: [More Angular Forms](https://angular.io/guide/forms)<br />
:link: [Angular Material](https://material.angular.io/)<br />
## Changes Made Not Included in Tutorial
1. Adding getName() and setName(name) functions to the music object

## :octocat: Pushing Changes to Git
###  :computer: Through Commandline
1. Go to application folder (Quest-Portal)
2. Pull any existing changes
```git pull```
3. Add changes to stage
```git add .```
4. Check what was added
```git status```
5. Commit changes
```
git commit -m "basic note for what was changed"
```
6. Push changes to git
```git push```
7. You may be prompted to log into Git in order for changes to be accepted successfully

### :crystal_ball: Through Visual Studio Code
1. Navigate to Source Control Tab (on right-hand side of application)
1. Create New Branch in VS Code
1. Make Code Changes
1. Navigate to Source Control Tab (on right-hand side of application)
1. Click Three Dots (...) And Select Pull
1. Enter Commit Message
1. Click Check Mark
1. When Prompted Let Visual Studio Code Stage Changes
1. Click Three Dots (...) And Select Push
1. Navigate to GitHub Project [Logging](https://github.com/MandaMai/Logging)
1. Click Button to Create Pull Request
1. Navigate to Pull Requests and Ensure Request Can Merge
1. Merge Branch to Master
1. Navigate back to VS Code to the Source Control Tab
1. Click Three Dots (...) And Select Pull

## :notes: Helpful Commands and Notes
### Angular Commands
* Generate new components to project ```ng g c [componentName]```
* Generate new service to project ```ng g s shared/[folderName]/[serviceName]```
### Other
* [Github emojis](https://gist.github.com/rxaviers/7360908)

## Opening on Your Machine for the First Time
1. Create file to house project on machine
1. Navigate to folder, open command, and run ```git clone URL```
1. Navigate to server folder
1. Run ```npm install```
1. Run ```.mvnw/ spring-boot:run```
1. If runs successfullu, will see list of music at the end (will take a few minutes)
1. Go Back to file folder and navigate to client folder
1. Run ```ng add @angular/material```
1. Run ```ng add @oktadev/schematics --issuer=https://dev-529195.okta.com/oauth2/default --clientId=0oa147ll79FgBl9MZ357```
1. Run ```ng serve -o```



## :clapper: Google Fonts Used
@import url('https://fonts.googleapis.com/css?family=Roboto|Crimson+Text|);

font-family: 'Roboto', serif;
font-family: 'Amatic SC', cursive;

Added via html
* [Roboto](https://fonts.googleapis.com/css?family=Roboto:300,400,500)
* [Material Icons](https://fonts.googleapis.com/icon?family=Material+Icons)
Added via scss
* [Crimson Text](https://fonts.google.com/specimen/Crimson+Text?selection.family=Crimson+Text) - Most 

Site Content

## :notebook: Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.


## :book: Author

* **Amanda Maifeld** - *Initial work* - [MandaMai](https://github.com/MandaMai)

## :rainbow: License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
