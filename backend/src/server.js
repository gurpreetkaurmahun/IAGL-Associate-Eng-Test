const express = require('express');
const cors = require('cors');
const repository = require('./repository/todo');
const todoService = require('./service/todo')(repository);

const server = () => {
  const server = express();
  server.use(express.json());
  
  server.use(cors());
  const corsOptions = {
    origin: "http://localhost:3000", 
    methods: "GET,POST,PATCH,DELETE",
    credentials: true
  };

  server.use(cors(corsOptions));
  
  server.get('/api/todos', async (req, res) => {
    try {
        const todos = await todoService.getAllTodos();
        res.status(200).json(todos);
    } catch (error) {
        res.status(error.status).json({ error: error.externalMessage});
    }
});

  /**
  POST /api/todo
  {
   "task": "Some API"
  }

   {
    "todos": [
      {
        "task": "Some API"
      }
    ]
   }
  **/

  return server;
};
module.exports = server;