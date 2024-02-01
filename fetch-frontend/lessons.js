/* “Display List of Lessons” functionality (5%):
A. there should be at least 10 lessons, and each lesson should have 5 
spaces (or availability) (1%).
B. each lesson should have at least (2%): Subject, Location, Price, 
Spaces (or availability: this indicates how many spaces are left), a Font 
Awesome icon (or an Image).
C. the list of lessons must be stored as an array of JSON objects, one 
object for each lesson, in a separate JavaScript file, such as lessons.js
or lessons.json (1%).
D. v-for must be used for the display of the lesson list (1%) */



let lessons = [
    {
        "id": 1001,

        "Subject": "Bangla",

        "Location": "Bangladesh", 

        "price": 100,

        "image": "images/bangla.png",

        "Spaces": 5,

        "rating": 4

        //"availableInventory": 10 and "Spaces": 10 are Same thing
    },
    {
        "id": 1002,

        "Subject": "Math",

        "Location": "London", 

        "price": 100,

        "image": "images/math.png",

        "Spaces": 5,

        "rating": 4

        //"availableInventory": 10 and "Spaces": 10 are Same thing
    },
    {
        "id": 1003,

        "Subject": "Math",

        "Location": "Oxford",  

        "price": 110,

        "image": "images/math.png",

        "Spaces": 5,

        "rating": 3

        //"availableInventory": 10 and "Spaces": 10 are Same thing
    },
    {
        "id": 1004,

        "Subject": "English",

        "Location": "London", 

        "price": 80,

        "image": "images/english.png",

        "Spaces": 5,

        "rating": 3

        //"availableInventory": 10 and "Spaces": 10 are Same thing
    },
    {
        "id": 1005,

        "Subject": "English",

        "Location": "New York", 

        "price": 80,

        "image": "images/english.png",

        "Spaces": 5,

        "rating": 4

        //"availableInventory": 10 and "Spaces": 10 are Same thing
    },
    {
        "id": 1006,

        "Subject": "French",

        "Location": "France",  

        "price": 80,

        "image": "images/french.png",

        "Spaces": 5,

        "rating": 3

        //"availableInventory": 10 and "Spaces": 10 are Same thing
    },
    {
        "id": 1007,

        "Subject": "Spanish",

        "Location": "Madrid", 

        "price": 80,

        "image": "images/spanish.png",

        "Spaces": 5,

        "rating": 4

        //"availableInventory": 10 and "Spaces": 10 are Same thing
    },
    {
        "id": 1008,

        "Subject": "Spanish",

        "Location": "Barselona", 

        "price": 80,

        "image": "images/spanish.png",

        "Spaces": 5,

        "rating": 4

        //"availableInventory": 10 and "Spaces": 10 are Same thing
    },
    {
        "id": 1009,

        "Subject": "Art",

        "Location": "India", 

        "price": 100,

        "image": "images/art.png",

        "Spaces": 5,

        "rating": 4

        //"availableInventory": 10 and "Spaces": 10 are Same thing
    },
    {
        "id": 1010,

        "Subject": "Yoga",

        "Location": "India", 

        "price": 100,

        "image": "images/yoga.png",

        "Spaces": 5,

        "rating": 4

        //"availableInventory": 10 and "Spaces": 10 are Same thing
    }
] ;
