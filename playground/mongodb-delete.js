// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

// deleteMany
// db.collection('Todos').deleteMany({text: 'Dance'}).then((result) => {
//   console.log(result)
// });
// deleteOne
// db.collection('Todos').deleteOne({text: 'Dance'}).then((result) => {
//   console.log(result);
// });
// findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// });

// db.collection('Users').deleteMany({name: 'Tosin'}).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndDelete({
  _id: new ObjectID ('598ae78ae166fd26842b5b0c')
}).then((result) => {
  console.log(JSON.stringify(result, undefined, 2));
});


  // db.close()
});
