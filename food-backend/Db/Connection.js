const mongooes = require('mongoose');

mongooes.set('strictQuery', false);

mongooes.connect("mongodb+srv://karanvd2002:karan1234@food.p0owlk0.mongodb.net/food?retryWrites=true&w=majority", {
    useNewUrlParser: true,
}).then(() => {
    console.log('DB connect Done');
}).catch((error) => {
    console.log(error);
})


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://karanvd2002:KD123456@cluster1.mtuohwg.mongodb.net/gym?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();
//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);
