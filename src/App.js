
import './App.css';
import Home from './Home/Home';
import Layout from './Layout/Layout';
import About from './About/About';
import Portfolio from './Portoflio/Portfolio';
import { HashRouter } from "react-router-dom";

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './Contact/Contact';
import NotFound from './NotFound/NotFound';


  let routes=createHashRouter([{
    path:"",element:<Layout/>,children:[
      {path:"about",element:<About/>} ,
      {index:true,element:<Home/>},
      {path:"portofolio",element:<Portfolio/>},
      {path:"contact",element:<Contact/>},
      {path:"*",element:<NotFound/>}
     
    ]
  }])
function App() {
  return (
    <>
  <RouterProvider
    router={routes}

  />
    </>
  );
}

export default App;
