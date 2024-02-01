const express = require("express"); //Basic Express library code
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");



///////////////////////////////
let propertiesReader = require("properties-reader");
let propertiesPath = path.resolve(__dirname, "conf/demo-db.properties");
let properties = propertiesReader(propertiesPath);

let dbPprefix = properties.get("db.prefix");
//MongoDB require url encoded pwd and user, in case them have particular characters, more info at http://mongodb.com/docs/atlas/troubleshoot-connection/#special-characters-in-connection-string-password
let dbUsername = encodeURIComponent(properties.get("db.user"));
let dbPwd = encodeURIComponent(properties.get("db.pwd"));
let dbName = properties.get("db.dbName");
let dbUrl = properties.get("db.dbUrl");
let dbParams = properties.get("db.params");


const uri = dbPprefix + dbUsername + ":" + dbPwd + dbUrl + dbParams;

/////////////////////////////



const app = express(); //Basic Express library code
app.use(cors()); //Basic Express library code


//Basic Express library code
app.use(function (req, res, next) {
    console.log("Incoming request: " + req.url);
    next();

});

///////////////// 

app.use(cors());

app.use(morgan("short"));

app.use(express.json());





///OPTION 1; indicated by MongoDB Atlas
let db;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
//const uri = "mongodb+srv://webstoreUser:<password>@webstorecluster.cqdublf.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        db = await client.db("dbName");
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
     finally {
        db = await client.db("dbName");
        // Ensures that the client will close when you finish/error
        //await client.close();
    }
}
run().catch(console.dir);








app.param('collectionName', function (req, res, next, collectionName) {
    req.collection = db.collection(collectionName);
    return next();
});


//Basic Express library code
app.get('/', function (req, res, next) {
    res.send("seclect a collection, e.g., /collections/lessons");
});


app.get('/collections/:collectionName', function(req, res, next) {
    req.collection. find({}). toArray(function(err, results) {
        if(err) {
            return next(err);
        }
        res.send(results);
    });
});




app.get('/collections/:collectionName/:max/:sortAspect/:sortAscDesc', function (req, res, next) {
    //TO-DO: Validate params
    var max = parseInt(req.params.max, 10); //base 10

    let sortDirection = 1;
    if (req.params.sortAscDesc === "desc") {
        sortDirection = -1;
    }

    req.collection.find({}, { limit: max, sort: [[req.params.sortAspect, sortDirection]] }).toArray(function (err, results) {
        if (err) {
            return next(err);
        }
        res.send(results);

    });
});


//we do not need the following line because we already load ObjectId with the connection to the db
//const ObjectId = require('mongodb').ObjectId;
app.get('/collections/:collectionName/:id', function (req, res, next) {
    req.collection.findOne({ _id: new ObjectId(req.params.id) }, function (err, results) {
        if (err) {
            return next(err);
        }
        res.send(results);
    });
});

// app.get('/collections/:collectionName/:id', function(req, res, next) {
//     //TO-DO: validate id
//     var id = parseInt(req.params.id, 10); // base 10

//     req.collection.findOne({id: id}, function(err, results) {
//         if (err) {
//             return next(err);
//         }
//         res.send(results);
//     });
// });

app.post('/collections/:collectionName', function (req, res, next) {
    //TO-DO: validate req.body
    req.collection.insertOne(req.body, function (err, results) {
        if (err) {
            return next(err);
        }
        res.send(results);
    });
});



app.delete('/collections/:collectionName/:id', function (req, res, next) {
    req.collection.deleteOne(
        { _id: new ObjectId(req.params.id) }, function (err, results) {
            if (err) {
                return next(err);
            } else {
                res.send((result.deleteCount === 1) ? { msg: "success" } : {
                    msg:
                        "erorr"
                });
            }
        }
    );
});


app.put('/collections/:collectionName/:id', function (req, res, next) {
    //TO-DO: validate req.body
    req.collection.updateOne({ _id: new ObjectId(req.params.id) },
        { $set: req.body },
        { safe: true, multi: false }, function (err, result) {
            if (err) {
                return next(err);
            } else {
                res.send((result.matchedCount === 1) ? { msg: "success" } : {
                    msg:
                        "erorr"
                });
            }
        }
    );
});



/////////////////


//this is prettify the json that sent back in the REST services, with 3 spaces among JSON elements:
app.set('json spaces', 3);





//Basic Express library code
app.use(function (req, res) {
    res.status(404).send("Resource not found");
});
//Basic Express library code
app.listen(3000, function () {
    console.log("App started on port 3000");
});
