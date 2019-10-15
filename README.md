# Credit-Card-System
A small full stack application for a credit card provider. It allows to add new credit card accounts and view them as a list. ReactJs and NodeJs([Node Installation](https://nodejs.org/en/download/)) 


## Creditcard-server is the backend(NodeJs)
In the project directory, you can run:
```
npm install
```
To run the server use
```
node server.js
```
from the directory.
Run the server api in Postman. using http://localhost:3000 url

#### Two Rest Api
POST : /creditcard

   It accept the credit card details and save in the file at the server.
   Payload:
    
    
    {
	   "cardholdername": "Harsh",
      "cardlimit": 10000,
      "cardnumber": "5182913491948975"
    }
    
  
GET : /creditcard

   It fetch the all credit card details to display it on the UI.
