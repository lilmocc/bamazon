var mysql = require("mysql");
var inquirer = require("inquirer");
var chalk = require("chalk");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "spacejam86",
  database: "bamazonDB"
});

connection.connect(function(error) {
  if (error) throw error;
  console.log("connected as id " + connection.threadId + "\n");
  getData();
});

function getData() {
  connection.query("SELECT * FROM products", function (error, data) {
      if (error) throw error;
      askUser(data);
  });
}

function askUser(data) {
  var items = [];
   for (i in data) {
       items[i] = data[i].item_id + " : " + data[i].product_name;
   }
   var whichProduct = chalk.magentaBright.bold("Which product would you like to buy?");
   var quantityOfProduct =  chalk.magentaBright.bold("Enter quantity: ");

   inquirer.prompt([
       {
           type: "list",
           name: "id",
           message: whichProduct,
           choices: items,
       },
       {
           type: "input",
           name: "quantity",
           message: quantityOfProduct,
       }
   ]).then(function(userInput){

       var product = userInput.id.split(" :");
       var id = product[0];

       connection.query("SELECT * FROM products WHERE ?",
           [{ item_id: id }],
           function (error, data) {
               if (error) throw error;
               inStock(data, userInput.quantity);
           });
   });

   function inStock(data, quantity) {
       if (data[0].quantity < quantity) {
           console.log(chalk.bgRed("Insufficient quantity!"));
           connection.end();
       } else {
           updateDatabase(data, quantity);
           cost(data, quantity);
       }
   }

   function updateDatabase(data, quantity) {
       var quantity_left = data[0].quantity - quantity;
       connection.query("UPDATE products SET ? WHERE ?",
           [
               { quantity: quantity_left },
               { item_id: data[0].item_id }
           ],
           function (error, data) {
               if (error) throw error;
           });
   }

   function cost(data, quantity) {
       console.log(chalk.cyan("\n===============\n"));
       console.log("Product Name: " + data[0].product_name);
       console.log("Dept Name: " + data[0].department_name);
       console.log("Price: " + data[0].price);
       console.log("Quantity :" + quantity + "\n");
       console.log("Total: " + (data[0].price * quantity).toFixed(2));
       console.log(chalk.cyan("\n===============\n"));
       connection.end();
   }

}
