import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting='Hello World !'></ItemListContainer>
    </>
  )
}

export default App
