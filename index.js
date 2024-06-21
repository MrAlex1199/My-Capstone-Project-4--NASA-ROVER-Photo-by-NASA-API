import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import 'dotenv/config';

const app = express();
const port = 3000 || process.env.PORT;
const APIKEY = process.env.APIKEY;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => { 
  res.render("index.ejs"); });

app.get("/home", (req, res) => { 
  res.redirect("/"); });

app.get("/photo", (req, res) => { 
  res.render("photos.ejs"); });

app.get("/camrover", (req, res) => { 
  res.render("camrover.ejs"); });

app.get("/about", (req, res) => { 
  res.render("about.ejs"); });

app.get("/contact", (req, res) => { 
  res.render("contact.ejs"); });

app.post("/SEARCH", async (req, res) => {
  const Rname = req.body["NasaRovername"];
  const RoverDay = req.body["RoverDay"];

  try {
    const NASARover = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${Rname}/photos?earth_date=${RoverDay}&api_key=${APIKEY}`);
    const photos = NASARover.data.photos;

      const selectedPhotos = [];
      for (const photo of photos) {
        if (RoverDay) {
          selectedPhotos.push(photo);
        }
      }
      
      if (selectedPhotos.length === 0) {
        res.render("index.ejs", { Message: { locol: true }});
      } else {
        res.render("photos.ejs", {APIphotos: selectedPhotos});
      }
      
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).send("Error: " + error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});