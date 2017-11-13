# Adventures in Extreme Programming
![Pair Programming Example](https://github.com/Johnny2136/GitlabAppDemo/blob/master/Documentation/images/Pair%20Programming.jpg)

A year ago in August of 2016, I was involved with a very interesting project to bring open sources methodologies to internal development activities within consular posts worldwide utilizing the GitLab collaborative environment. As part of the project the managers wanted to find out which Consular employees had coding skills and would be willing to participate. For this they wanted any officers with coding skills at all the overseas posts to fill out an application to be a developer in the enterprise GitLab initiative. And then send it back to headquarters at which point it could be stored in Microsoft SharePoint. As an innovator I thought “this could be a perfect way to demonstrate the power of HTML5 and JSON data in a non-RDBMS, while automating a pen and paper activity!” I just needed approval. I looked at the paper form and quickly thought it would lend itself well to a web form with a JSON data store in the cloud.

I told the managers I could convert the form to a web application make it mobile friendly and have the data flowing into a data store that could be accessed online or be downloaded as an Excel spreadsheet. The project manager liked the idea, but said it had to be deployed in 8 weeks. Following traditional government processes I don’t think I could even get approval to "start" a project in eight weeks, I decided to work a proof of concept (POC) demonstration that if the business owner liked he could use it as a production application. The rules for generating a POC are much less than a full blown waterfall project, I decided to use modified eXtreme Programming (XP). By generating a useful developed bit of code fast and letting the users provide feedback then refactoring to adjust to what the user wanted to see and repeating that cycle until the business owner accepted the application. 

I started off by consulting with my friend and colleague [Vijay Goswami](https://www.linkedin.com/in/vijaygoswami/) owner of XFinion Inc. In deriving the requirements from the paper form and planning design of the web application we choose a typical form layout for example:

First Name | Last Name     | Location   | Email
---------- | ------------- |----------- | -------------
Johnny |    Doe |      Japan | Johnny.Doe@agency.gov
Jane |     Kirk |        USA | Jane.Kirk@agency.gov

We worked together to set up what the key values pairs would be

```JSON
firstName: First Name, 
lastName: Last Name, 
location: Country, 
email: eMail
```
and how we would set up the data store. We worked together to come up with the design of a simple Web form in HTML5 (Using Bootstrap Twitter, JQuery and Angular Java Script, with a cloud based Mongo Lab, Mongo DB backend). The fields would be the defined key value pairs. Which would look like the example below:


![Bootstrap Form Example](https://github.com/Johnny2136/GitlabAppDemo/blob/master/Documentation/images/GitlabAppdemo3.png)

We utilized [pair programming](https://en.wikipedia.org/wiki/Pair_programming), Where two programmers work together at one workstation. One, the driver, writes code while the other, the observer or navigator, reviews each line of code as it is typed in. The two programmers switch roles frequently.(https://en.wikipedia.org/wiki/Pair_programming) As of this writing I think this was the first instance of a Federal employee and a contractor collaborating via pair programming. 

## The Benefits of Pair programming

The Benefits of Pair programming are:

* improved Code quality  - Without even concentrating on code quality once the static analysis was ran it had a really high quality score, I attribute that to there being a state of constant peer review. 
* Lower Deployment costs – While our development time may have been about 15% to 20% longer but there was no rework for code defects as all bugs were caught early by the constant peer review. No rework means lower overall maintenance costs.
* Improved programming skills – As a federal employee I seldom get the opportunity to do production coding and being paired with an expert at production coding really improved my skills at HTML5/ JavaScript. Learning a new “no-SQL” database structure was very helpful.
* Team building – Working together we produced something of high quality that was able to be transitioned from “proof of concept” to production ready application with no additional coding. It felt very rewarding to be part of this team.
* It was fun – It was an awesome experience to work side by side with such a talented team mate. I looked forward to each block of code, each change the users requested. It was going so well we had one day sprints at the end. We would deploy the code the user would try it and say well it works well, but how about putting “this functionality” in? We would code it the next day and have a new version ready for them to test. After about a week we had a version the user liked and started using as a production application. 

## The Tools we Used





