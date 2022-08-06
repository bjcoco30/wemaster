import {StyledContainer} from "./components/Styles"; 
import Login from "./pages/Login";  
import video from "./assets/video-02.mp4";
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>  

            <div style={{
               width: "100%",
               height: "100%",

            }}>
        <video src={video} autoPlay loop muted /> 
        <div style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Routes> 
          <Route path="/" element={<Login/>} />    
        </Routes>
        </div>
     </div>
          
    </Router>
  );
}

export default App;
