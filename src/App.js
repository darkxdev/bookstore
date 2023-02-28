import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Navbar from './components/navbar';
import Books from './pages/Books';
import Categories from './pages/Categories';
import store from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
