import './App.css';

import {Routes , Route} from "react-router-dom"
import PublicLayout from './Layouts/PublicLayout';
import Home from './Pgaes/Home';
function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />} >
      <Route index element={<Home />} />
      
      </Route>
    </Routes>
  );
}

export default App;
