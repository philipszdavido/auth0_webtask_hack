Hello Kim,

## Proudest Moment:
I would say my proudest achievement would have to be when I successfully integrated Google Firestore in my Loopback app project and deployed to Google Cloud Engine, after weeks of errors and hacking. The project was made for my auth0 article "Run a Loopback app on Google App Engine" as a Guest Writer. 

My first problem was the installation of the G Cloud command-line utility, next was setting up of my online G. App Engine engine at google.cloud.com. After surmounting the problem, next was database integration. I initially used mLab but my mentor and handler Bruno Krebs suggested we should use a Google-based database since the article was centered around a Google product (GAE). I thought about Firebase and discarded it, because it's so common and we need a new Google product to make the article content very rich. I tried Google Cloud SQL, it gave me a helluva pile of trouble. It was configured as a Second-generation instance and to run the instance, you need to run Google Cloud SQL Proxy locally to generate the MySQL connection URL to your database. But we are going to deploy and run it on GAE(PaaS), and also how can I run the Google Cloud SQL Proxy on the App Engine environment to generate the connection URL. I tried dozens upon dozens of hacks, trolled internet for answers but none was forthcoming.

 Next, I considered Google Datastore, but forgot about it 'cos it was new and there was little docs on how to use and configure it. I came across Google Firestore, it was a new product meant to replace Firebase and bring NoSQL. It was here I made a breakthrough. loopback-connector-firestore by Dyaa Eldin Moustafa was one of the connectors designated by Loopback as the connector for Google Firestore. After following the installation instructions and also setting up my Firestore console dashboard. It worked both locally and on Google App Environment.

## Article/blog post/Github repo read recently and liked it, why you like it and link to recent blog post you wrote that you really like:

Recent article I read and love so much is **HapiJS Authentication - Secure Your API With JWT** by Ryan Chenkie https://auth0.com/blog/hapijs-authentication-secure-your-api-with-json-web-tokens/.

I recently started an Open-Source project **phalconjs** on Github, **phalconjs**, a fast web framework  for Node.js meant to brigde the gap between Express.js and Hapi.js. In order to bridge the gap, I need to study Express and Hapi very closely. Hapi.js being framework being used by huge corporations incorporated so many exciting features like auth schemes and strategies. I never knew what they were, so I read so much as can on them, and understood that strategy was a functional subset of a scheme. Also, Hapijs has so many schemes like jwt, basic, cookie, bek, hawk, etc. In order to understand the jwt scheme better and implement it in my framework, I searched for an article that explained it better if not, in a layman's terms, that was when I came across this Ryan Chenkie's article **HapiJS Authentication - Secure Your API With JWT**. He didin't only explain how to integrate jwt, he explained why and how Hapi.js uses the schemes and strategies to auth users, also he touched other features Hapi.js has. His article is currently serving as my guide when going through the Hapi.js source code and when I am working on my framework.

I would say my recent article I really like would be **Run a Loopback app on Google App Engine**. Here is the link: https://auth0.com/blog/run-a-loopback-app-on-google-app-engine/

## One feature of Auth0 I really like and why:

One feature of auth0 I like so much is the **Lock.js**. 

Why? It stops you from reinventing the wheel. You know there stuffs done everytime whenever you pick up a project, that is building the login and registration pages, whether a Web-, Mobile-, or Desktop-based project. Users authentication is a must, you must find a way to register your users and authenticate them. Though, I have not used it before, I think the Lock widget is really cool reading through the docs about the widget. What came to my mind was "Now, I don't have to bother or stress myself again about building the login and registration pages of any project I embark on". All I have to do is pull in the widget library and configure the mode I want, end of frontend auth. It has saved me time and energy. I have a Medium draft that I will be publishing soon, it centers on using Lock.js, Webtask.io, Angular, and Auth0 auth. system to build a TV Series Tracker app. I think it will be a cool stuff, bringing the best libaries, frameworks, and auth. systems together in one mix.

## Hack something (whatever you want) using webtask.io
 