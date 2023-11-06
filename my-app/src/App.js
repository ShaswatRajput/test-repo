
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import Tab3 from "./components/Tab3";
import Tabs from './components/Tabs';


function App() {
  return (
    <>
    <BrowserRouter>
    <Tabs/>
    <Routes>
    
    <Route exact path='/tab1' element={<Tab1/>}/>
    <Route exact path='/tab2' element={<Tab2/>}/>
    <Route exact path='/tab3' element={<Tab3/>}/>
    </Routes>
    
    </BrowserRouter>
   
    </>
  );
}

export default App;
