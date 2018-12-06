# Food List
Food List is an application to help you put together a grocery list based on searched recipes. It then allows you to save and email your list for shopping.

## Parameters of the project
https://github.com/ga-chicago/wdi-13-capstone
1. User can create a unique account, including username and email.
2. User can login using this account.
3. User can put together their grocery list:
	* Recipe search available to user via API
	* Recipe can be added or a removed from a list of user recipes pertaining to the grocery list. Doing so removes the needed ingredient amounts. 
	* User can add other items to their shopping list as needed.
	* User can delete items from grocery list as needed.
	* User can make conversions of amounts of food when two recipes have differing measurements for the same ingredient.
4. User can complete grocery list, rendering it static and saved by title/date for future reference. 
5. User receives a pdf or email of the static grocery list
6. User's selected recipes become part of recipe favorite list AND are attached to the grocery list for past perusal.

Notes: 
* Recipes are linked externally
* User's grocery lists are private use; other user's grocery lists are inaccessible entirely by other users. 

## Flex Goals
1. Internal recipe page vs. use of url that links outside
2. Create your own recipe

## User Story

A user needs to first log in, or register. Registration requires an email, username, password. Once logged in, they are taken to a New Grocery List page. 
This page contains:
Grocery list - unfinished, requires user input
Added Recipes - unfinished, requires user input
Recipe search (API supported)
Recipe results from search.

User adds however many recipes they desire and their ingredients are added to the grocery list above. This includes removal of duplicates. Units of measure will be checked against one another and user will be asked to convert units where necessary. 

Removal of a recipe will remove the amount of the ingredients added as a result of that recipe.

User completes list by hitting complete button (email or pdf or both is taken care of)

### Technology

Front End: React.js | Bootstrap4
Back End: Nodejs | express | Sequelize (ORM) (sanitizes and translates data for you)
Database: Postgresql 
API: spoonacular 

Other frameworks: 
Flask - written with python

## Wireframes

![login](./imgs/login.png)
![homepage](./imgs/homepage.png)
![action](./imgs/action.png)
![profile](./imgs/profile.png)

## Data Models
https://docs.google.com/spreadsheets/d/12K1l97x7fLH3XVBiPK5_I6km61obcIp9Kl06xj_TiYU/edit#gid=0
