This project contains a set of tests developed for personal use. Their purpose is to ensure that no critical functionality of the website is unintentionally broken during development or deployment.

To set the env variable prod/stage and account credantionals use variables in the playwright.config.ts file. 

To run tests localy you have to perform next steps: 
1) Install any IDE (e.g. Install vscode)
2) Install homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
3) Install git 
$ brew install git
4) Install node 
brew install node@20
5) Install npm
npm install -g npm
6) Install playwright 
npm init playwright@latest
7) To run only 1 or several tests for debug 
a) Add @debug annotations to appropriate tests 
b) run command "playwright test --grep @debug"
