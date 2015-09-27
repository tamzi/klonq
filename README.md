### deployed ghost blog
 - This is a tutorial on how to Deploying a [ghost](http://ghost.org/) blog on heroku.
 - Ghost is an Open Source application dedicated to content publishing. Ghost is built on Node.js.
 - This means you have to have [node js](http://nodejs.org/) installed. Its pretty straight forward. Head over to [nodejs.org](http://nodejs.org/) and check it out!

#### Documented steps to install below:
 1. Created a repo on github.(This one..only had github's default readme when it started)
 2. Headed over to [ghost.org](http://ghost.org/) and downloaded Ghost(latest version)
 3. Clone the repo you jsut created from github and unzip ghost in that folder and pretty much did an override on existing files(The README.md).
 4. Head over to [heroku](http://heroku.com/) -If you lack an account, create one and logIn.
 5. Create an app.(On the dashboard)
 6. Go to the deploy tab..url is probably sth like

 	```
 	# https://dashboard.heroku.com/apps/{YOUR USER NAME}/deploy
 	```

 7. Then went to the github tab.{connect to gitHub}.
 8. Scroll down to connect to github. and click on the connect to github. **You will need to logIn to github to authorize heroku.**
 9. Next is for you to search for your github repo where you have ghost.
 10. Search for the repo and click on it.
 11. Then click connect.
 12. I enabled Manual deploy. At the **Manual deploy** section, hit **'deploy branch'** option.
 13. Next is the settings option.I changed the name to match the same name that i use for the github repo.

 **NOTE:**
  At this stage, the repo has been configured to deploy from github, but it will not display the post or blog but will give you an Application Error page from heroku.
  This is because, ghost has not yet been installed.

Setting Up Ghost.
 1. Do a ghost install. You can check these out or run the following installs.
   [Official Ghost Install Support for whichever env](http://support.ghost.org/installation/)

 Here are the install instructions:

#####  			**How to install Ghost**
     1. From the command line access the repo.
	 2. Type
		 ```
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
	 8.Yeay the online repo is now updated on github.

	 > Though we have configured ghost to deploy manually from github, even though we do a manual deploy from heroku, nothing will be diplayed. We still have the same application error. This is because we have to configure ghost to tell it we are live and no longer local.


##### Making it go Live.
	 1. Go to config.js file and look for these lines:
	  - These lines:
	 ```bash
	 production: {
        url: 'http://127.0.0.1:2369', or 'http:localhost:2369',
		```
		 - change to:
		```bash
	 production: {
        url: '{YOUR APP URL ON HEROKU} something like: https://klonq.herokuapp.com/',
		```


		- Then this one:
		```bash
		 server: {
            host: '127.0.0.1',
		 	port: '2368'
        }
		```
		need to change to:
		```bash
		 server: {
            host: '0.0.0.0',
			port: process.env.PORT
        }
		```

		- and this one:
		```bash
		 // Change this to your Ghost blog's published URL.
        url: '',
		```
		changes to:

	 	```bash
		 // Change this to your Ghost blog's published URL.
        url: '{Your ghost url with https.tsh like: https://klonq.herokuapp.com/}',
	 ```

 	- Save the changes. Commit the changes to github as we did above. steps number 4 to number 8
 	- Go to heroku dashboard. Do a manual deploy. In case you forgot:
 		> 12. I enabled Manual deploy. At the **Manual deploy** section, hit **'deploy branch'** option.

##### Themes?
- You can find themes here: http://www.allghostthemes.com/
- You can also make a theme:
 - Check this Ghost theme repo [Under development] to understand:
   - how theming works
   - how to install a ghost theme/template

#### configure Email to work. Check this file out
