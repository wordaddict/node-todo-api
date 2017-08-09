// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('598b0aaa344d6030349aa605')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(JSON.stringify(result, undefined, 2));
  // });

// db.collection('Users').findOneAndUpdate({
//   _id: new ObjectID('598aeaaa922955172878d75a')
// }, {
//   $set: {
//     name: 'Mike'
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result)
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('598aeaaa922955172878d75a')
}, {
  $inc: {
    age: 1
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result)
})

  // db.close()
});
