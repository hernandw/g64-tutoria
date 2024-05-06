import express from 'express';
import router from './routes/router.js';
import exphbs from 'express-handlebars';
import path from 'path';
const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 3000;

//confirguración de archivos estaticos
app.use(express.static('assets'));


app.set('view engine', 'hbs');
app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
  })
);

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Routes
app.use('/', router)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
})