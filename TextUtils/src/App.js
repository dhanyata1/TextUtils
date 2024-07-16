import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm'
import About from './components/About';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App(props) {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#062D5E';
      showAlert("Dark Mode Has Been Enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Dhanyata" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>            
            <Route path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />} />
            <Route path="/about" element={<About mode={mode} /> } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
















// import './App.css';
// import Navbar from './components/Navbar';
// import Alert from './components/Alert';
// import TextForm from './components/TextForm'
// import About from './components/About';
// import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Switch as RouterSwitch,
//   Route
// } from "react-router-dom";


// function App(props) {

//  const[mode , setMode] = useState('light');
//  const[alert,setAlert] = useState(null);


//   const showAlert=(message,type)=>{
//          setAlert({
//           msg:message,
//           type:type
//          })
//          setTimeout(()=>{
//           setAlert(null);
//          },1500);
//  }

//  const toggleMode=()=>{
//     if(mode === 'light'){
//       setMode( 'dark');
//       document.body.style.backgroundColor='#062D5E';
//       showAlert("Dark Mode Has Been Enabled","success");
//     }
//     else{
//       setMode('light');
//       document.body.style.backgroundColor='white';
//       showAlert("Light Mode Has Been Enabled","success");
//     }
//  }
//   return (
//     <>
//     <Router>
//     <Navbar title="Dhanyata" about="About" mode={mode} toggleMode={toggleMode}/>
//     <Alert alert={alert}/>
//     <div className="container my-3">
//     <RouterSwitch>
//     <div className="container">
//           <Routes>
//             <Route path="/about" element={<About />}>
//             </Route>
//             <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
//             </Route>
//           </Routes>
//         </div>
//   <Route path="/">
//     <TextForm  showAlert={showAlert} heading = "Enter the Text To Analyze" mode={mode}></TextForm>
//   </Route>         
// </RouterSwitch>

//        </div>
//       </Router>
//     {/* <About/> */}
//     </>
//   );
// }

// export default App;
