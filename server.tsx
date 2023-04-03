import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/api/data', (req, res) => {
  // code to fetch data from the server
});
app.listen(5000, () => {
  console.log('Server is listening on port 4000');
});