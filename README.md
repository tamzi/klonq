### deployed ghost blog
Deploying a ghost bog on heroku


Will document my steps here:
 1. Created a repo on github.(This one..only had a readme)
 2. Headed over to [ghost.org](http://ghost.org/) and downloaded Ghost(latest version)
 3. Clone from github and unzipped ghost in this folder and pretty much did an override on existing files.
 4. Head over to [heroku](http://heroku.com/) -If you lack an account, create one and logIn.
 5. I created an app.
 6. Go to the deploy tab..url is probably sth like

 	```bash
 	# https://dashboard.heroku.com/apps/{YOUR USER NAME}/deploy
 	```
 7. Then went to the github tab.{connect to gitHub}.
 8. Scroll down to connect to github. and click on the connect to github. **You will need to logIn to github to authorize heroku.**
 9. Next is for you to search for your github repo where you have ghost.
 10. Search for the repo and click on it.
 11. Then click connect.
 12. I enabled 'automatic deploy' and in the **Manual deploy** section i hit **'deploy branch'** option.
 13. Next is the settings option.i changed the name to match the same name that i use for the github repo.

 **NOTE:**
  At this stage, the repo has been configured to deploy from github, but it will not display the post or blog but will give you an Application Error page from heroku.
  THis is because, ghost has not yet been installed

Set Up.
 1. Do a ghost install. check this out:
     [Official Ghost Install Support for whichever env](http://support.ghost.org/installation/)
 Let me just place the how to install Ghost here:
 Am copying and pasting content from here: [How to install Ghost.com](https://www.howtoinstallghost.com/how-to-install-ghost-on-heroku/)

 2. Deploying to **heroku**


 	```bash
 	# https://dashboard.heroku.com/apps/{YOUR USER NAME}/deploy
 	```



