import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Components/Layout'

function App() {
    return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path="" element={<Home/>}/>
      </Route>
    </Routes>
    </>
  )
}
export default App
