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
//look up update operators
// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5ac737d2f80ffb6624d31d1e')
// },{
//   $set:{
//     completed:true
//   }
// },{
//   returnOriginal:false
// }).then((result) =>{
//   console.log(result);
// })

db.collection('Users').findOneAndUpdate({
  name:'Cynoc'
},{
  $set:{
    name:'Solomon'
  },
  $inc:{
    age:1
  }
},{
  returnOriginal: false
}).then((result) =>{
  console.log(result);
})

  //  client.close();
})
