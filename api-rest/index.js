import express from 'express';
import { StatusCodes } from 'http-status-codes'; 

const app = express();
const PORT = 3000;
let users = [
  {
    id: 1,
    name: "Radamés",
    age: 34,
  },
  {
    id: 2,
    name: "Camila",
    age: 29,
  },
];
app.use(express.json()); //middleware


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/', (request, response) => {
  return response.send('<h1>Trabalhando com servidor express.</h1>');
});

//this route returns a list of users
app.get('/users', (request, response) => {
  return response.send(users);
});

//this route returns a specific user in a list of users using method find
app.get('/users/:userId', (request, response) => {
  const userId = request.params.userId;
  const user = users.find(user => {
    return (user.id === Number(userId))
  })
  return response.send(user)
});

//Method POST
app.post('/users', (request, response) => {
  const newUser = request.body;

  users.push(newUser);

  return response.status(StatusCodes.CREATED).send(newUser);

});

//Method PUT
app.put("/users/:userId", (request, response) => {
  const userId = request.params.userId;
  const updatedUser = request.body;

  users = users.map((user) => {
    if (Number(userId) === user.id) {
      return updatedUser;
    }
    return user;
  });

  return response.send(updatedUser);
});

//Method DELETE status 204
app.delete('/users/:userId', (request, response) => {
  const userId = request.params.userId;

  users = users.filter((user) => user.id !== Number(userId));

  return response.status(StatusCodes.NO_CONTENT).send();
});