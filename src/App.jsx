import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Components/Layout'
import Event from './Pages/Event'
import Timeline from './Pages/TImeline'
import About from './Pages/About'

function App() {
    return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="/events" element={<Event/>}/>
        <Route path="/timeline" element={<Timeline/>}/>
        <Route path="/about" element={<About/>}/>
      </Route>
    </Routes>
    </>
  )
}
export default App
