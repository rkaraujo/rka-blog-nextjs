---
title: Deploy a Quarkus Java application on Heroku
date: "2021-02-07T09:30:00"
description: How to deploy a Quarkus Java application on Heroku
---

I was giving [Quarkus](https://quarkus.io/) a try and so I created a [simple web application](https://github.com/rkaraujo/rka-blog-quarkus) to learn more about it. It's just a website that process some markdown files and serves some HTML pages.

I wanted to do a little test hosting it in a real place. I remembered I had an account on [Heroku](https://www.heroku.com/), so I thought I should try to deploy this little Quarkus application there.

To deploy the application on Heroku, I needed to create two extra files: the `system.properties` to choose Java 11 (by default Heroku compiles and runs on Java 8) and the `Procfile` to customize the start command.

**system.properties**

```
java.runtime.version=11
```

**Procfile**

```
web: java -Dquarkus.http.port=$PORT -jar target/rka-blog-quarkus-1.0.0-SNAPSHOT-runner.jar
```

Using the heroku command line client, the steps were:

```
heroku login
```

After logging in with your Heroku account, create a Heroku application:

```
heroku create
```

This will create a Heroku application with a random name and the command output will show a git repository. Now configure your project to use `git`:

```
git init
git branch -M main
git add .
git commit -m "first commit"
```

Configure your project adding a remote called `heroku` with the git url shown before and do a git push:

```
git remote add heroku <git url from heroku create output>

git push heroku main
```

It will compile and deploy your application on Heroku.

After following these steps I could access the application on my browser using the http url shown by the heroku create command. For this test I deployed the application as a runner jar, I didn't compile the project as a native executable.
