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

![Initiate app via Node](/screenshots/node1.png)

![User selects product and quantity](/screenshots/node2.png)

![Updated inventory in MySQL](/screenshots/mysql-after.png)
