var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazonDB"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
    showProducts();
});

function showProducts() {
    console.log("Items available for sale: \n");
    connection.query("SELECT * FROM Products", function(err, res) {
        if (err) throw err;
        console.table(res);
       askCustomer();
    });
}
function askCustomer() {
    inquirer.prompt([
        {type: "number",
        message: "What items do you want to purchase?",
        name: "item"
        },
        {type: "number",
        message: "How many?",
        name: "quantity"
        }        
    ]) .then(function(response){
        //console.log(response);
        checkInventory(response);
        // go to the db where the item_id === your item and verify the stock
        //if stcok < the quatity then yo don't have enought 
        // if enough then sell it and update the db 
    })    
}
function checkInventory(response) {
    connection.query("SELECT * FROM Products WHERE item_id = " + response.item, function(err, res) {
        //console.log(res);
        if(res[0].stock_quantity < response.quantity) {
            console.log("Insufficient quantity!");
            showProducts()
        }
        else{
            console.log("Order placed! Total price: ", res[0].price * response.quantity);
            var newQ = res[0].stock_quantity - response.quantity
            // update

            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                  {
                    stock_quantity: newQ
                  },
                  {
                    item_id: response.item
                  }
                ],
                function(err, res) {
                  if (err) throw err;
                  console.log(res.affectedRows + " products updated!\n");
                  // Call deleteProduct AFTER the UPDATE completes
                  showProducts();
                }
              );


        }
    })

}