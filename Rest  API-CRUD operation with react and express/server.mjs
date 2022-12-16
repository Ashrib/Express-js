import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/weather/:cityName', (req, res) => {
  console.log("request ip: ", req.ip);
  console.log(req.params.cityName)
  res.send({
    city:req.params.cityName,
    temp: "30°C",
    wind:"7 km/h",
    humidity: "20%",
    minimum: "25°C",
    maximum: "32°C" ,
    weather:"sunny"
  });
})

const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname , '/weather-app/build')));
app.use('*', express.static(path.join(__dirname , '/weather-app/build')));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})