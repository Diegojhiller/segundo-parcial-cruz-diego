import books from "../models/book.model.js";


export const getAllBook = async (req, res) => {
  try {
    const getAllBook = await books.findAll();
    res.json(getAllBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const book = await books.findByPk(req.params.id);
    if (!book) return res.status(404).json({ error: "Libro no encontrado" });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const createBook = async (req, res) => {

  try {
    const newBook = await books.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: error.message });
  }
};

export const updateBook = async (req, res) => {
  const books = await books.findByPk(req.params.id);
  if (!books) return res.status(404).json({ error: "El libro no se encontro" });

  try {
    await books.update(req.body);
    res.json(books);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
export const deleteBook = async (req, res) => {
  const book = await book.findByPk(req.params.id);
  if (!book) return res.status(404).json({ error: "Libro no encontrado" });

  try {
    await book.destroy();
    res.json({ message: "el libro se elimino" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}