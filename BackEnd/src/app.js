
const express = require("express");

require("./db/conn");

const ItemsList=require("./models/items")
const cors = require("cors")
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());  
app.use(express.urlencoded({extended:true}))
app.use(cors())

//Post Method
app.post("/items", async (req, res) => {
    try {
        const addingItems = new ItemsList(req.body);
		//console.log(addingItems)
       // console.log(req.body);
        const list = await addingItems.save();
        res.status(201).send(list)
    } catch (e) {
        res.status(400).send(e)
    }
})

//GET Method
app.get("/items", async (req, res) => {
	//console.log(req)
	try {
		const category = req.query
		 console.log(category)
		const getItems = await ItemsList.find(category || {});
		//console.log("ab")
		res.send(getItems);
	} catch (e) {
		res.status(400).send(e);
	}
});


//GET Method
app.get("/items/:id", async (req, res) => {
	//console.log("ab")
    try {
        const _id = req.params.id;
		const getItem = await ItemsList.findById(_id);
		res.send(getItem);
	} catch (e) {
		res.status(400).send(e);
	}
});

////

// app.get("/items", async (req, res) => {
// 	//console.log("ab")
//     try {
//         const category = req.params.category;
// 		console.log(category)
// 		const getItem = await ItemsList.filter({category : category });
// 		res.send(getItem);
// 	} catch (e) {
// 		res.status(400).send(e);
// 	}
// });


//PUT Method
app.put("/items/:id", async (req, res)=> {
	console.log("ab")
	try {
		const _id = req.params.id;
		console.log(_id,"qwe")
		const getItem = await ItemsList.findByIdAndUpdate(_id,req.body,{new:true});
		console.log("patch item at backend",getItem)
		res.send(getItem);
	} catch (e) {
		res.status(500).send(e);
		console.log("not patched",e)
	}
});

//DELETE Method
app.delete("/items/:id", async (req, res)=> {
	try {
		const _id = req.params.id;
		const getItem = await ItemsList.findByIdAndDelete(_id);
		//console.log("delete item at backend",getItem)
		res.send(getItem);
	} catch (e) {
		res.status(500).send(e);
	}
});


app.listen(port, () => {
    console.log(`connecting to port ${port}`);
})