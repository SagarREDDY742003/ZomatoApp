API's

// Page1

# (GET) List of city
http://localhost:5500/location

# (GET) Rest Wrt City
http://localhost:5500/restaurants?state_id=1

# (GET) List of Restaurants
http://localhost:5500/restaurants

# (GET) List of mealType
http://localhost:5500/mealType

// Page2

# (GET) Restaurants wrt mealType
http://localhost:5500/restaurants?mealId=2
http://localhost:5500/restaurants?stateId=2&mealId=2

# (GET) Restaurants wrt mealType + Cuisine
http://localhost:5500/filter/1?cuisineId=3

# (GET) Restaurants wrt mealType + Cost
http://localhost:5500/filter/1?lcost=100&hcost=700

# (GET) Restaurants wrt mealType + Cusine + Cost
http://localhost:5500/filter/1?cusineId=1&lcost=100&hcost=700

// Page3

# (GET) Details of the restaurant
http://localhost:5500/details/1

# (GET) Menu of Selected Restaurant
http://localhost:5500/menu/7

// Page4

# (POST) Details of menu selected
http://localhost:5500/menuDetails

# (POST) Place Order
http://localhost:5500/placeOrder
 
// Page5

# (GET) List of all orders wrt to user
http://localhost:5500/orders?email=anchal@gmail.com

# (PUT) Update Order details
http://localhost:5500/updateOrder
# (DELETE) Delete Orders
http://localhost:5500/deleteOrder