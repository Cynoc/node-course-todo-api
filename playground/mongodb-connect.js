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
