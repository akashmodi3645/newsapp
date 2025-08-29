
import './App.css';




import React from 'react'
import News from './components/News';
import Newscmp from './components/Newscmp';


import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";





const App = ()=> {
  
    return (
      <div>
        <Router>
       <News/>
       
      <Routes>
        {/* Example routes */}
        
<Route path="/health"   element={<Newscmp key="health" country="us" pagesize={8} category="health" />} />

        <Route path="/" element={<Newscmp key="general" country="us" pagesize={8} category="general" />} />
        <Route path="/business"  element={<Newscmp key="business" country="us" pagesize={8} category="business" />} />
        <Route path="/sports"  element={<Newscmp key="sports" country="us" pagesize={8} category="sports" />} />
        <Route path="/technology"  element={<Newscmp key="technology" country="us" pagesize={8} category="technology" />} />
      </Routes>
       </Router>
      </div>
    )
  
}
export default App