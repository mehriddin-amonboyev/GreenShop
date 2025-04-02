import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layouts/main-layout"

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />  */}
    </Routes>
  )
}

export default App
