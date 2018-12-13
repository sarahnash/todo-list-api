var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var todoList = [
  {
    id: 1,
    todo: 'Implement a REST API'
  }
]

// GET /api/todos
app.get('/api/todos', function (req, res, nextFn) {
  console.log('HTTP request sent to GET /todos')
  res.send(todoList)
})

// GET /api/todos/:id
app.get('/api/todos/:id', function (req, res, nextFn) {
  console.log(req.params.id)
  res.send(todoList[req.params.id - 1])
})

// POST /api/todos
app.post('/api/todos', function (req, res, nextFn) {
  console.log(req.body)
  res.send('req.body is an empty object, how do I put something in it, with a nextFN?')
})

// PUT /api/todos/:id
app.put('/api/todos/:id', function (req, res, nextFn) {
  console.log(req.params.id)
  res.send('putting something in this req.params.id: ' + req.params.id + ' But what?')
})

// DELETE /api/todos/:id
app.delete('/api/todos/:id', function (req, res, nextFn) {
  console.log('you deleted req.params.id: ' + req.params.id)
  res.send(todoList)
})

app.listen(3000, function () {
  console.log('Todo List API is now listening on port 3000...')
  console.log(__dirname)
})
