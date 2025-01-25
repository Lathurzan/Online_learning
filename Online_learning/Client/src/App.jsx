import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AcademicIelts from "./pages/AcademicIelts"; // Import AcademicIelts page
import GeneralIelts from "./pages/GeneralIelts";
import GeneralUkvi from "./pages/GeneralUkvi";
import AcademicUkvi from "./pages/AcademicUkvi";
import A1 from "./pages/A1";
import A2 from "./pages/A2";
import B1 from "./pages/B1";
import PaymentSection from "./components/PaymentSection";
import AdminLogin from "./admin/components/AdminLogin";
import Trainers from "./pages/Trainers";
import Signup from "./components/signup";
import TestOptions from "./components/TestOptions";
import Complaints from "./components/Complaints";
import AdminPanel from "./admin/components/AdminPanal";


function App() {
  const [showPopup, setShowPopup] = React.useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academic-ielts" element={<AcademicIelts />} />
        <Route path="/general-ielts" element={<GeneralIelts />} />
        <Route path="/general-ukvi" element={<GeneralUkvi />} />
        <Route path="/academic-ukvi" element={<AcademicUkvi />} />
        <Route path="/a1" element={<A1 />} />
        <Route path="/a2" element={<A2 />} />
        <Route path="/b1" element={<B1 />} />
        <Route path="/payment-section" element={<PaymentSection />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/Trainers" element={<Trainers />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/testoption" element={<TestOptions />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
