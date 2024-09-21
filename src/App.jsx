
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import LiveTv from './pages/liveTv';
import Movies from './pages/movies';
import Header from './components/Header';
import TvShows from './pages/TvShows';



function App() {

  return(


    
      <BrowserRouter>
      <Header></Header>
      
      <Routes>
        <Route path ="/" element ={<Home></Home>}></Route>
        <Route path ="/tv" element ={<LiveTv></LiveTv>}></Route>
        <Route path ="/movies" element ={<Movies></Movies>}></Route>
        <Route path ="/show" element ={<TvShows></TvShows>}></Route>
      </Routes>
      </BrowserRouter>
  

  );
  
}

export default App
