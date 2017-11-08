# Adventures in Extreme Programming

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


![Bootstrap Form Example](http://spyrestudios.com/wp-content/uploads/29-bootstrap-v3-contact-form-freebie.jpg)




