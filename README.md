# capstone

Edify is a web application designed to provide the ability for small businesses to allow their customers to book online, contact them, and purchase their products.

How to run on your own system
Here is details on how to get the frontend and backend to run on your system.

Get everything (frontend, backend) running via Docker Compose

Pull the code from GitHub

In the backend directory, create a .env file
In line 1 of the .env file, write MONGODB_URI="mongodb-uri-here" and replace mongodb-uri-here with the URI for the MongoDB database you wish to connect.
In line 2 of the .env file, write EMAIL_PASS="email-password-here" and replace email-password-here with the password of the email account you wish the messages from your contact form to be sent to. 
In line 3 of the .env file, write EMAIL_USER="email-username-here" and replace email-username-here with the email address of the email account you wish the messages from your contact form to be sent to. 
In line 4 of the .env file, write EMAIL_ACCOUNT="email-account-here" and replace email-account-here with the type of the email account you wish the messages from your contact form to be sent to e.g. hotmail, gmail, yahoo etc.

In the frontend/src/screens directory, 
In line 59 of the individualServiceScreen.js file, find url="https://calendly.com/avrilmaleham" and replace https://calendly.com/avrilmaleham with the URl for the Calendly account you wish to connect.

In the frontend/src/components directory,
In lines 8 and 29 of the mailchimp.js file, find const postUrl = https://outlook.us21.list-manage.com/subscribe/post?u=0be82fdd5ab574d0cfd70848a&id=205041509b and replace https://outlook.us21.list-manage.com/subscribe/post?u=0be82fdd5ab574d0cfd70848a&id=205041509b with the URl for the Mail Chimp account you wish to connect.
In lines 61 and 62 of the payPalButton.js file, find  "client-id":
            "AXjKvOCbKAY8X0lWq_z8gTP2m-qLXNJBEptj9ArMzkTxxQ-Nrj9GV44CkRMnM6U0qKr08VEtQB4v5KvP", and replace AXjKvOCbKAY8X0lWq_z8gTP2m-qLXNJBEptj9ArMzkTxxQ-Nrj9GV44CkRMnM6U0qKr08VEtQB4v5KvP with the client id for the PayPal account you wish to connect.


Start Docker
Once Docker has started, in the code directory, run the command docker-compose up --build
Once the docker images have built and the containers start up, open your browser and go to http://localhost
If everything was successful, the home page will show up.
If anything other than that happens, it was not successful.



