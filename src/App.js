import { Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar';
import Books from './pages/Books';
import Categories from './pages/Categories';

function App() {
  const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' }
  ];

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Books books={books} />} />
        <Route path='/categories' element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
