# Automate deployment with Heroku:

1. Create a repository in Github and link it to our local repository.
2. Create a new app in Heroku.
3. In your local command line execute the following commands to obtain a long term authorization token:
  - ```heroku login```
  - ```heroku authorizations:create```
4. Create the following secrets values in your remote Github repository you want to deploy:
  - HEROKU_API_KEY -> The value is the authorization token generated in step 3.
  - HEROKU_APP_NAME -> The name you gave to your application in step 2.
5. In the root folder of your project create a .dockerignore file to avoid copying useless files to your container.
6. Create also a Dockerfile and create the necessary steps to build an image with an web server serving static files of our frontend bundle.  
5. Finally, create a Github workflow with the following steps:
  - As environment variables define HEROKU_API_KEY with the secret's value and the image name pointing to the heroku registry.
  - Use the desired operating system.
  - Checkout the repository.
  - Execute the command ```heroku container:login``` (it will automatically use the HEROKU_API_KEY env variable).
  - Execute ```docker build``` command using as name the env variable previously created.
  - Push the image to the heroku registry with ```docker push``` command.
  - Finally, execute ```heroku container:release web``` with the app name.