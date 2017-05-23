# the-diet-tracker

### What you can do

- Add items (food) to a list, and use a button to determine whether you have eaten each item.

### Web Technologies Used

- Node.js
- Express.js
- Handlebars
- MySQL / Sequelize

### How it works

- The intent of this app is to display the functionality of `CREATE` `READ` and `UPDATE` in `CRUD`, while utilizing an ORM.
- When the app is initialized, the Node/Express server will `READS` all the food items in the MySQL database and uses Handlebars to render the results to the index view.
- If the food item has been marked as `devoured` it is placed in the "What You've Eaten" Section. If it hasn't been eaten it is placed in the "Eat These Foods" section and provided with a button to "eat" the item.
- A form is provided for users to `CREATE` a food item to be added to the database via a POST request with a default devoured value of `false`.
- When a new item successfully saves to the database the page redirects to the home page a rerenders to show the updated items.
- Items `UPDATE` when the `Just Eat It!` button is clicked. This will set their `devoured` value to false cuasing the item to render in the "What You've Eaten" section when the page redirects