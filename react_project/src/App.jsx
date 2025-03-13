import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}></Route>
          <Route exact path='/detail/:productID' element={<ItemDetail/>}></Route>
          <Route exact path='/cart' element={<div>Mi carrito</div>}></Route>
          <Route exact path='/category/electronica' element={<div>Electronica</div>}></Route>
          <Route exact path='/category/joyas' element={<div>Jewelery</div>}></Route>
          <Route exact path='/category/blog' element={<div>Blogs</div>}></Route>


        </Routes>
    </BrowserRouter>
  )
}

export default App
