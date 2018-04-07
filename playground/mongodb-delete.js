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

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) =>{
    //   console.log(result);
    // })

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) =>{
    //       console.log(result);
    //     })






            // db.collection('Users').deleteMany({name: 'Linda'}).then((result) =>{
            //   console.log(result);
            // })

    // db.collection('Users').deleteOne({name: 'Cynoc'}).then((result) =>{
    //           console.log(result);
    //         })
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5ac73b38a40e935be4ce5264')}).then((result) =>{
              console.log(JSON.stringify(result,undefined,2));
            })
// delete Many

//deleteOne


//findoneanddelete
  //  client.close();
})
