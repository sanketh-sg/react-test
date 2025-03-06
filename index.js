
const http = require('http') //commonJS syntax
const express = require('express')
const cors = require('cors')

// import http from 'http' ES6 syntax not supported directly in Node.js

const app = express()
app.use(express.json())
app.use(express.static('dist'))
app.use(cors())

let notes = [
    {
      id: "1",
      content: "HTML is easy",
      important: true
    },
    {
      id: "2",
      content: "Browser can execute only JavaScript",
      important: false
    },
    {
      id: "3",
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true
    }
  ]
  // app.get('/', (req,res) => {
  //   res.send('<h1>Hello World!</h1>')
  // })

  app.get('/api/notes', (req,res) => {
    res.json(notes)
  })

  app.get('/api/notes/:id', (req,res) => {
    const id = req.params.id
    const note = notes.find(note => note.id === id)
    res.json(note)
  })

  app.post('/api/notes', (req,res) => {
    const note = req.body
    notes = [...notes, note]
    res.json(note)
  })


  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })