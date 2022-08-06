import {StyledContainer} from "./components/Styles"; 
import Login from "./pages/Login"; 
import Landing from "./pages/Landing";
import Video from "./pages/Video";
import video from "./assets/nature2.mp4";
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
          <Route path="/login/" element={<Login/>} /> 
          <Route path="/video/" element={<Video/>} />  
          <Route path="/" element={<Landing/>} />  
        </Routes>
        </div>
     </div>
          
    </Router>
  );
}

export default App;
