//mongo client helps you to connect to server

// const MongoClient =require('mongodb').MongoClient;
const {MongoClient, ObjectID} =require('mongodb'); //similar to code above, but we have two vars now
//object destructioning allows as to get a fields
//from objects to and set them to variables


// create new databsse and connect to server
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
  if(err){
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('connected to Mongodb server');
   const db=client.db('TodoApp')
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed : false
  // }, (err,result) =>{
  //   if(err){
  //     return console.log('unable to insert todo', err);
  //     }
  //     console.log(JSON.stringify(result.ops, undefined,2))
  //
  // })

  db.collection('Users').insertOne({
    name:'Cynoc',
    age:21,
    location:'Ithaca'
  }, (err, result) => {
    if(err){
      return console.log('Unable to Insert to User', err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  })
    client.close();
})



const MONGODB_URL = 'mongodb://Cynoc:0244938894@ds229690.mlab.com:29690/node-todo-api';

MongoClient.connect(MONGO_URL, (err, db) => {
  if (err) {
    return console.log(err);
  }

  // Do something with db here, like inserting a record
  db.collection('note-todo-api').insertOne(
    {
      title: 'Hello MongoDB',
      text: 'Hopefully this works!'
    },
    function (err, res) {
      if (err) {
        db.close();
        return console.log(err);
      }
      // Success
      db.close();
    }
  )
});
