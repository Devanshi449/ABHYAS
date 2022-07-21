import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contribute from "./components/Contribute/Contribute";
import Landing from "./components/Landing/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Global/NavigationBar";
import TeacherDashboard from "./components/TeacherDashboard/TeacherDashboard";
import GenerateQPaper from "./components/GenerateQPaper/GenerateQPaper";
import QBank from "./components/QBank/QBank";
import StudentDashboard from "./components/StudentDashboard/StudentDashboard";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/" element={<Landing />} />
        <Route path="/StudentDashboard" element={<StudentDashboard/>} />
        <Route path="/Contribute" element={<Contribute />} />
        <Route path="/TeacherDashboard" element={<TeacherDashboard/>} />
        <Route path="/GenerateQPaper" element={<GenerateQPaper/>} /> 
        <Route path="/QBank" element={<QBank/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
