const mongoose = require('mongoose');

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>');
    process.exit(1);
}

const db_password = encodeURIComponent(process.argv[2]);

const url = `mongodb+srv://fullstack:${db_password}@phonebook-app-db.cr6iz.mongodb.net/noteApp?retryWrites=true&w=majority&appName=phonebook-app-db`

mongoose.set('strictQuery', false);

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema);

const newNote = new Note({
    content: 'HTML is Easy',
    important: true,
})

newNote.save().then(result => {
    console.log('note saved!');
    mongoose.connection.close();
})
