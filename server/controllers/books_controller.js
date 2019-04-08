let books = []

let id = 0

// after creation of a book, increment id by 1

module.exports = {
  read: (req, res) => {
    res.status(200).send(books)
  },

  create: (req, res) => {
    let { title, author } = req.body
    books.push({ id, title, author })
    id++
    res.send(books)
  },

  update: (req, res) => {
    let { id } = req.params
    let bookUpdate = req.body
    bookUpdate.id = id
    index = books.findIndex(book => +book.id === +id)
    books.splice(index, 1, bookUpdate)
    res.send(books)
  },

  delete: (req, res) => {
    let { id } = req.params
    index = books.findIndex(book => +book.id === +id)
    books.splice(index, 1)
    res.send(books)
  }

}


// {
//   "id": 7,
//   "title": "Hi",
//   "author": "Me"
// }