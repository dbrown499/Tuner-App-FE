import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from 'react'
import './App.css'

// import Edit from "./Pages/Edit";
// import FourOFour from "./Pages/FourOFour";
// import Home from "./Pages/Home";
// import Index from "./Pages/Index";
// import New from "./Pages/New";
// import Show from "./Pages/Show";


import Navbar from "../Components/Navbar";

function App() {

  return (
    <>
      <div className="App">
        <Navbar />
        <main>
      {/* <Router> */}
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/colors" element={<Index />} /> */}
            {/* <Route path="/colors/new" element={<New />} /> */}
            {/* <Route path="/colors/:id" element={<Show />} /> */}
            {/* <Route path="/colors/:index/edit" element={<Edit />} /> */}
            {/* <Route path="*" element={<FourOFour />} /> */}
          </Routes>
      {/* </Router> */}
        </main>
    </div>
    </>
  )
}

export default App
