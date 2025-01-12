# GoodReads - Sprint1 Closure

Run the below command to run the WebApp Server
>`ng serve --proxy-config proxy.config.json`

# Development server
Run the below commands to start the development server.
> `cd WebApp`

> `ng serve --proxy-config proxy.config.json`

> `cd ../backend`

> `go run main.go `

Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

# Sprint 1 Demo Run

Run Backend :
![Running-the-code](https://user-images.githubusercontent.com/97717233/152629613-ff8847d5-6d0e-4dfb-ae27-daa01fbb36d6.gif)

Run FrontEnd :
![Running-the-code(1)](https://user-images.githubusercontent.com/97717233/152629631-86175819-b4a1-435c-b726-158fa617fcfd.gif)


# Backend
API :: 
The below API's are used to fetch the details from database and return it to the calling API so that data in FRONTEND can be rendered based on the data stored in BACKEND
1. Get Genre API
2. Get Particular Genre API
3. Get Books based on Genre
4. Insert Books into Database


The Postman commands and sample examples can be viewed here : https://documenter.getpostman.com/view/19432934/UVeGqRHi  

## 1. Get Genre API
###  GET localhost:8080/api/getGenres
This getGenres API is used to fetch all the Genres Present in The Genres Table from the Database.

Sample API and Sample Output
![Sample GetGenre API](https://github.com/Bhuvana102/Good-Reads/blob/main/Wiki-Images/localhost-GetGenre.png)

Sample Output :
![Sample Output](https://github.com/Bhuvana102/Good-Reads/blob/main/Wiki-Images/GetGenerate-Sample-Response.png)

Sample Demo :
![Postman](https://user-images.githubusercontent.com/97717233/152629582-80d900f1-09ca-439f-8458-c7ebf065b1ed.gif)


## 2. Get Particular Genre API
###  GET localhost:8080/api/getGenres/5
The getGenres/{id} API is used to fetch a particular Genre from the database based on the Genre ID requested from the frontend Webpage.

Sample API and Sample Output
![Get a Particular Genre](https://github.com/Bhuvana102/Good-Reads/blob/main/Wiki-Images/GetParticularGenre.png)

Sample Demo :
![Postman(1)](https://user-images.githubusercontent.com/97717233/152629591-0bdd823a-0f59-4bee-a344-6579229771b8.gif)


## 3. API to Insert books into Database
### http://localhost:8080/api/insertBook
Method Type: POST
API will receive a POST request from the body in JSON format. This JSON is Decoded to a struct type Book and insert the values into database books.db books table as per the user's request.

Sample API usage via POSTMAN

![image](https://user-images.githubusercontent.com/61014960/152491281-6dc95cd0-635e-4994-87f8-e0f8d6e4a651.png)

After the insertion API will return values in JSON format of the information inserted in DB and the ID generated for the book.

Sample Demo :
![Postman(2)](https://user-images.githubusercontent.com/97717233/152629596-b53a92a1-f9fe-413b-a7f7-c8f774fc28db.gif)


## 4. API to fetch Books from the Database tagged with requested GenreID
### http://localhost:8080/api/fetchGenreBooks?id=5

API will receive a request with Genre ID query in URL string and returns a array of all the books in DB tagged with the requested Genre ID in JSON format.

Sample API usage via POSTMAN

![image](https://user-images.githubusercontent.com/61014960/152610415-8d048b20-9943-4b76-a936-439fdee46489.png)

Sample Demo :
![Postman(3)](https://user-images.githubusercontent.com/97717233/152629602-5134250b-97cc-4688-8752-a18f63b72759.gif)


# Front End

- The below modules are created as part of Sprint 1 - UI in Good Reads Web Application
 1. Login Page Basic Template
 2. Landing Homepage
 3. Top and Side Menu Bar
 4. Browse Menu Item
 5. Details of Books
 
## 1. Login Page Basic Template
###  https://localhost:4200/login
This is a basic non-functional and a design oriented login screen implemented to maintain the continuity of the Web Application. User as of Sprint 1 can click on login to enter the Web App.


![loginPage](https://user-images.githubusercontent.com/41356950/152628108-728afaa1-7823-4af3-9369-05fef03aecad.png)



### Login Demo


![LoginScreen](https://user-images.githubusercontent.com/41356950/152629281-fb1c8875-64c9-49f0-b653-3927fe94fc77.gif)



## 2. Landing Homepage
###  https://localhost:4200/home
The Home Page is the first page post login to Good Reads, and contains basic promotion and interactive content for the users in the form of a carousel and auto slide items. This page can also be accessed from the top right hamburger menu and clicking on Home.


![HomePage](https://user-images.githubusercontent.com/41356950/152628114-adae4570-da3f-408b-aa42-98a9b02097de.png)



## 3. Top and Side Menu Bar
Good Reads is equipped with a top menu bar which is embedded with a hamburger menu icon. A click event on the icon pops a floating Side Draw menu bar holding the key functionalities of Good Reads.


![Toolbar+Sidemenu](https://user-images.githubusercontent.com/41356950/152628116-efcb672c-9dee-4b03-8419-93271667f693.png)]]


## 4. Browse Menu Item
Browse option is one of the key functions of Good Reads and it enables users to select the Genre of Books which they are looking for. User can select a genre from the provided list, which redirects to the description screen.

### Toolbar and Menu Demo

![Toolbar and Menu](https://user-images.githubusercontent.com/41356950/152629395-5dcb8da9-a5c1-483a-a361-2136867a4f69.gif)



## 5. Details of Books
  ###  https://localhost:4200/genre/{Selected Book ID}
As the user selects a genre from browse side menu option, the details of the genre are fetched from the backend. We also fetch the books that fall under that particular genre and display the cover pages of the books.

![Description](https://user-images.githubusercontent.com/41356950/152628398-5d9157b5-054d-44c6-971e-cfa0cc1fe1fa.png)


### Description Demo
![Genre Description](https://user-images.githubusercontent.com/41356950/152629213-4a841837-24c3-44ca-9e2b-e21b7361b9da.gif)



