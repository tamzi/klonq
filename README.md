### deployed ghost blog
Deploying a ghost bog on heroku


Will document my steps here:
 1. Created a repo on github.(This one..only had a readme)
 2. Headed over to [ghost.org](http://ghost.org/) and downloaded Ghost(latest version)
 3. Clone from github and unzipped ghost in this folder and pretty much did an override on existing files.
 4. Head over to [heroku](http://heroku.com/) -If you lack an account, create one and logIn.
 5. I created an app.
 6. Go to the deploy tab..url is probably sth like

 	```
 	# https://dashboard.heroku.com/apps/{YOUR USER NAME}/deploy
 	```
 7. Then went to the github tab.{connect to gitHub}.
 8. Scroll down to connect to github. and click on the connect to github. **You will need to logIn to github to authorize heroku.**
 9. Next is for you to search for your github repo where you have ghost.
 10. Search for the repo and click on it.
 11. Then click connect.
 12. I enabled 'automatic deploy' and in the **Manual deploy** section i hit **'deploy branch'** option.
 13. Next is the settings option.I changed the name to match the same name that i use for the github repo.

 **NOTE:**
  At this stage, the repo has been configured to deploy from github, but it will not display the post or blog but will give you an Application Error page from heroku.
  This is because, ghost has not yet been installed.

Setting Up Ghost.
 1. Do a ghost install. check this out:
  [Official Ghost Install Support for whichever env](http://support.ghost.org/installation/)
 Let me just place the how to install Ghost here:
  - Am copying and pasting content from here:
  			**[How to install Ghost.com]**
     1. From the command line access the repo.
	 2. Type
			 ```javascript
			npm install --production
			```
	 3. After install. We check whether Ghost installed correctly. run the command:
	 ```bash
		npm start
	```
	> This will run ghost on **localhost:2368**
	 4. After install. You need to stage the new files on github. open the command line and type
	 ```bash
		$ git status
	 ```
this will check the status of ghost.

	 5. Because the new files that have been added are alot, we will do a
	 	```bash
		$ git add -A
	 ```
	 This will add all the files in all the foleders that have been added, over 2000 new files by the way!

	 6. Then commit the files locally by running the following command:
	 	```bash
		$ git commit -m "{your commit message}"
	 ```
	 7. Then commit the files to your online repository on github.Do a :
	 	```bash
		$ git push
	 ```
	 7.Yeay the online repo is already on github.

	 > Though we have configured ghost to deploy manually from github, even though we do a manual deploy from heroku, nothing will be diplayed. We still have the same application error.


	 Making it go Live.


 	```bash
 	# https://dashboard.heroku.com/apps/{YOUR USER NAME}/deploy
 	```



