import {useState,useEffect} from 'react';
import Addmovie from "./component/Addmovie.js";
import "./app.css";
import Movielist from './compnents/Movielist.js';
import Filter from './components/Filter.js';
import Description from './components/Description.js';
import {Routes,Route } from "react-router-dom";
import './planetearth.jpg';
import './cosmos.jpg';
import './theexpense.jpg';
import'./thewalkingdead.jpg';


const info = [
  { title:'Cosmos',trailer:"https://www.youtube.com/embed/_erVOAbz420", img:'./Cosmos.jpg', description:"An exploration of our discovery of the laws of nature and coordinates in space and time.", posterURL:"www.cosmos.com", rating:9.3 },
  { title:'Planet Earth',trailer:"https://www.youtube.com/embed/7n_1JZgDPf4", img:'./Planet Earth.jpg', description:"Emmy Award-winning, 11 episodes, five years in the making, the most expensive nature documentary series ever commissioned by the BBC, and the first to be filmed in high definition.", posterURL:"www.planetearth.com", rating:9.4 },
  { title:'The Expanse',trailer:"https://www.youtube.com/embed/caLji74IIp4", img:'./The Expanse.jpg', description:"In the 24th century, a disparate band of antiheroes unravel a vast conspiracy that threatens the Solar System's fragile state of cold war.", posterURL:"www.theexpanse.com", rating:8.5 },
  { title:'The Walking Dead',trailer:"https://www.youtube.com/embed/R1v0uFms68U", img:'./The Walking Dead.jpg', description:"Police officer (Rick) wakes up from a coma in which he was in for several months as a result of being shot while on the job, to find that the world has been ravaged by the zombies and he is the only survivor. An army of the zombies, events escalate.", posterURL:"www.thewalkingdead.com", rating:8.2 },
  
];

function App(){
  
  const [list,setList] = useState(info);
  const [filtredList, setFiltredList] = useState(list);
  const [rate,setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  function adding(movie){
    if( movie.title && movie.img && movie.description && movie.posterURL ) {
      setList([...list, movie]);
    }
  }


  function filter(key, rate){
    setKeyword(key);
    setRate(rate);
    setFiltredList(list.filter( (element)=>{ return ( (element.title.toLowerCase().includes(key.toLowerCase())) && (element.rating >= rate) ) } ));
  }

  useEffect(()=>{ filter(keyword,rate); },[list]);


  return(
    <div className="App">
      <Routes>
        <Route path="/"  element={ <> <Filter filter={filter}/>  <Movielist list={filtredList} /> <Addmovie adding={adding} />   </> } />
        <Route path="/:id" element={ <Description list={list} /> } />
      </Routes>
    </div>
      );
}
export default App;
