const express = require("express")
const app = express()
const port = 4000

const BooksCtrl = require("./controllers/books_controller")

app.use(express.json())

app.use(express.static(__dirname + "/../build"))

app.get("/api/books", BooksCtrl.read)
app.post("/api/books", BooksCtrl.create)
app.put("/api/books/:id", BooksCtrl.update)
app.delete("/api/books/:id", BooksCtrl.delete)



app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
