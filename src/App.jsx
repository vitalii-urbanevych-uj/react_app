import Quiz from "./components/quiz"
import Navbar from "./components/navbar"
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="container-fluid border col-10 mt-2 text-center">
      {/* <h1 className="display-3"> Quiz </h1> */}
      {/* <Quiz /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<h1> Witam na Quiz </h1>}/>
        <Route path="/quiz" element={<Quiz />}/>
      </Routes>
    </div>
  )
}

export default App
