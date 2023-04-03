import Start from "./pages/Start";
import Chat from "./pages/Chat";
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
      </Routes>
    </div>
  )
}

export default App
