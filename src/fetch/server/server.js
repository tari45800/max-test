const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

let id = 2;
const todoList = [
  {
    id : 1,
    text: '할일 1',
    done: false,
  }
];

app.get('/', (req, res) => {
    res.send('잘 됐다 그지 깽깽아')
});


app.get('/api/todo', (req, res) => {
  res.json(todoList);
});

app.post('/api/todo', (req, res) => {
  const {text, done} = req.body;
  todoList.push({
    id: id++,
    text,
    done,
  })
  return res.send('성공함')
})


app.listen(3000, () => {
  console.log('정신차리라')
})