
import Navbar from "./component/Navbar";
//import About from "./component/About";
import TextForm from "./component/TextForm";
import React, {useState} from 'react';
import Alert  from "./component/Alert";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  
  
  const [alert, setAlert]=useState(null);
  
  const showAlert=(messege,type)=>{
    setAlert({
      type:type,
      msg:messege
    })
  }
  setTimeout(()=>{
    setAlert(null);
  },1500);

  const [mode,setMode]=useState('dark');// whether dark mode is enabled or not
  if(mode ==='dark'){
    document.body.style.backgroundColor="#0e3243";
    document.body.style.color='white';
    }else
    {
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
  }
  
  const toggleMode=()=>{
    if(mode ==='dark'){
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("light mode has been enabled",'success');
      }else
      {
      setMode('dark');
      document.body.style.backgroundColor='#0e3243';
      showAlert("dark mode has been enabled",'success');
    }
  }
  const greenMode=()=>{
    document.body.style.backgroundColor="rgb(50 120 33)";
    document.getElementsByClassName("btn btn-primary").backgroundColor="green";
  }
  return (
  <> 
  {/* <Router> */}
  <Navbar title="TextUtil2" mode={mode} toggleMode={toggleMode} greenMode={greenMode} />
  <Alert alert={alert}/>
  <div className="container my-3" >
  {/* <Routes>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} greenMode={greenMode} toggleMode={toggleMode} />}>
          </Route>
  </Routes> */}
  
  {/* <About/> */}
  <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} greenMode={greenMode} toggleMode={toggleMode} />
  </div>
  {/* </Router> */}
  </>
  );
}

export default App;
