import Start from "./pages/Start";
import Chat from "./pages/Chat";
import Pec from "./components/Maps/pec";
import Gaco from "./components/Maps/gaco";
import Gccd from "./components/Maps/gccd";
import Sgm from "./components/Maps/sgm";
import Mmi from "./components/Maps/mmi";

import Loader from "./pages/Loader";
import{Routes, Route} from "react-router-dom"
import {useState, useEffect} from 'react'

function App() {
  const [loading, setLoading] = useState(true)


  window.addEventListener('load', load())

  useEffect(() => {
    load();
  }, []);

  function load() {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={loading ? <Loader/> : <Start/>}/>
        <Route path='chat' element={<Chat/>}/>
        <Route path='gaco' element={<Gaco/>}/>
        <Route path='sgm' element={<Sgm/>}/>
        <Route path='gccd' element={<Gccd/>}/>
        <Route path='mmi' element={<Mmi/>}/>
        <Route path='pec' element={<Pec/>}/>
      </Routes>
    </div>
  )
}

export default App
