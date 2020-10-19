# House Reserve | back-end | NodeJS

A NodeJS API to register houses for rent using email and make reservations.

## How to configure the project:

> If you use npm, just replace the **yarn** > **npm**.

* Clone the repository to your computer, navigate to the folder and use the command **yarn install** to install the dependencies.
* Turn on your database and create a database with the name of **housereserve** (or whatever you prefer). > **This project was created using MongoDB.**

* Open the project folder in your text editor to include your database information:

The information of what to fill is commented in the scripts.

* Navigate to **src > app.js** and add your MongoDB connection URL.
* Navigate to **src > server.js** and include the port the server will listen to.
* Navigate to **src > models > House.js** and include your host and port to save the image upload.

Now start the project with the command **yarn dev** (accessing the project's root folder from the terminal).

### If you have followed the steps here, everything is ready for use! Now just use the API on your front-end or test the routes using Insomnia.

## Access routes to the API:

> Replace **base_url** with your server's url. **Example: localhost:3333**

### User routes

* Route to create and login user: **base_url/sessions**

Example: {
	         "email": "YOUR_EMAIL",
         }

### Registration routes

* Route to register house: **base_url/houses** (necessary to send the headers with **user_id** and use in body **multipart/form-data**)

Example:
    >
    thumbnail YOUR_IMAGE_FILE
    description HOUSE_DESCRIPTION
    price HOUSE_PRICE
    location HOUSE_LOCATION
    status TRUE_OR_FALSE
    >
    
* Route to update register house: **base_url/houses/:house_id** (where **house_id** is the house id. Necessary to send the headers with **user_id** and use in body **multipart/form-data**)

Example:
    >
    thumbnail YOUR_IMAGE_FILE
    description HOUSE_DESCRIPTION
    price HOUSE_PRICE
    location HOUSE_LOCATION
    status TRUE_OR_FALSE
    >
    
* Route to list all houses: **base_url/houses** (necessary to send the query params with **status TRUE** or **status FALSE** to list available or unavailable houses)

* Route to delete house: **base_url/houses** (necessary to send the headers with **user_id** and a JSON body with **house_id**)

Example:
    {
      "house_id": "YOUR_HOUSE_ID"
    }
    
### Routes to create reservation

* Route to create reserve: **base_url/houses/:house_id/reserve** (where **:house_id** is the house id. Necessary to send the headers with **user_id** and a JSON body with reserve date)

Example:
    {
      "date": "YOUR_RESERVE_DATE"
    }

* Route to cancel reserve: **base_url/reserves/cancel** (just send a JSON body with reserve id)

Example:
    {
      "reserve_id": "YOUR_RESERVE_ID"
    }

* Route to list all reserves: **base_url/reserves** (just send the headers with **user_id**)

### Routes to the dashboard with your registered houses

* Route to list all registers: **base_url/dashboard** (just send the headers with **user_id**)

### Doubts? Send me a message on my social networks. Good luck! ;)
