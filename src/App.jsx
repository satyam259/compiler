import './App.css'
import NotFound from './pages/404'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Editior from './pages/editor'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Editior />} />
          <Route path="*" element={ <NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
