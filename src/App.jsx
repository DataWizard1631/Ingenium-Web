import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Components/Layout'
import Event from './Pages/Event'
// import TimelinePage from './Pages/TimelinePage'
import About from './Pages/About'

function App() {
    return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="/events" element={<Event/>}/>
        {/* <Route path="/timeline" element={<TimelinePage/>}/> */}
        <Route path="/about" element={<About/>}/>
      </Route>
    </Routes>
    </>
  )
}
export default App
