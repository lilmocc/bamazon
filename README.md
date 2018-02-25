# bamazon
**Summary**
Faux amazon CLI app using MySQL

**Description Of App**
This CLI application asks the user via Inquirer to choose from a list of items on what they would like to purchase, and the quantity. The response returned to the user is the product information and total. Once the user chooses an item, the MySQL table is updated with new stock information.

**Technologies Used**
* Node.js
* MySQL
* NPM packages:
  * MySQL
  * Inquirer
  * Chalk

**User Flow - see screenshots in directory /screenshots**

![Starting inventory in MySQL](/screenshots/mysql-before.png)
1. This shows the inventory before running the app. Note the quantity of dishwasher soap is 86.

![Initiate app via Node](/screenshots/node1.png)
2. When the app is initialized via Node, a connection is made to the mySQL database and Inquirer asks the user to select a product and quantity.

![User selects product and quantity](/screenshots/node2.png)
3. In this example, the user selects "dishwashing soap" and quantity of 7. The app gives a summary of the item and total for 7 units.

![Updated inventory in MySQL](/screenshots/mysql-after.png)
4. This shows the inventory after the user selects 7 units of dishwasher soap, which is 79.
