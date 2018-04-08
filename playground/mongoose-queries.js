const {ObjectID}=require('mongodb');
const {mongoose} =require('./../server/db/mongoose');
const {Todo} =require('./../server/models/todo');
const {User} =require('./../server/models/user');

var id='5ac8894fd134674c3c184363';

User.findById(id).then((user) =>{
  if(!user){
    return console.log('user not found');
  }
  console.log('User By id', user);
}).catch ((e) =>{
  console.log(e);
})

// var id='5ac8c16c32431876dcf3792711';
//
// if(!ObjectID.isValid (id)){
//   console.log('ID not valid');
// }
//
// Todo.find({
//   _id:id
// }).then((todos) =>{
//   console.log('Todos', todos);
// })
//
// Todo.findOne({
//   completed:false
// }).then((todo) =>{
//   console.log('Todo', todo);
// })
//find by id is specific to the id while findOne is use to find any other field
// Todo.findById(id).then((todo) =>{
//   if(!todo){
//     return console.log('id not found');
//   }
//   console.log('Todo By id', todo);
// }).catch ((e) =>{
//   console.log(e);
// })
