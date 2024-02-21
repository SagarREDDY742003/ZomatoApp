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

# (GET) Menu of Selected Restaurant

// Page4

# (POST) Details of menu selected

# (POST) Place Order

// Page5

# (GET) List of all orders wrt to user

# (PUT) Update Order details

# (DELETE) Delete Orders
