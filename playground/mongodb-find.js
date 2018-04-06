//mongo client helps you to connect to server

// const MongoClient =require('mongodb').MongoClient;
const {MongoClient, ObjectID} =require('mongodb'); //similar to code above, but we have two vars now
//object destructioning allows as to get a fields
//from objects to and set them to variables

//fetch items from db
// create new databsse and connect to server
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
  if(err){
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('connected to Mongodb server');
    const db=client.db('TodoApp')
   // //fetch based on a property
   // db.collection('Todos').find({
   //   _id:new ObjectID('5ac739bf84276e5064057006')}).toArray().then((docs)=>{
   //   console.log('Todos');
   //   console.log(JSON.stringify(docs,undefined,2))
   // },(err) =>{
   //   console.log('Unable to fetch todos', err)
   // })

   db.collection('Users').find({name:'Solomon'}).toArray().then((docs)=>{
     console.log('Todos');
     console.log(JSON.stringify(docs,undefined,2))
   },(err) =>{
     console.log('Unable to fetch todos', err)
   })


   //fetch based on a property
   // db.collection('Todos').find().count().then((count)=>{
   //   console.log(`Todos count: ${count}`);
   //
   // },(err) =>{
   //   console.log('Unable to fetch todos', err)
   // })


  //  client.close();
})
