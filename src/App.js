
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import PropByCategory from './Pages/Property/PropByCategory';

function App() {
  return (
    <div className="App">
    <Header />
    <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/:category' element={<PropByCategory/>}/>
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
