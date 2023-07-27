import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
  const event = req.body;
  
  await axios.post('localhost:4000/events', event);
  await axios.post('localhost:4001/events', event);
  await axios.post('localhost:4002/events', event);

  res.send({ status: 'OK' });
});

app.listen(4005, () => {
  console.log('Listening on 4005');
});