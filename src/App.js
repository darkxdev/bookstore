import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Books from './pages/Books';
import Categories from './pages/Categories';
import { initialBooksState } from './redux/books/booksSlice';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books books={initialBooksState.books} />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
