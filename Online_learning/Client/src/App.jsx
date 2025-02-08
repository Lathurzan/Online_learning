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
import AdminUserManage from "./admin/components/AdminUserManage";
import AdminCourse from "./admin/components/AdminCourse";
import AdminAnalisys from "./admin/components/AdminAnalisys";
import Profile from "./components/Profile";
import ScoreCalculator from "./components/ScoreCalculator";
import ResultsTimeline from "./components/ResultsTimeline";
import AdminSetting from "./admin/components/AdminSetting";
import Library from "./components/Library";
import PaymentCancel from "./components/PamementCancel";
import PaymentSuccess from "./components/PaymentSuccess";
import PaymentCard from "./components/PaymentCard";


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
        <Route path="/adminusermanage" element={<AdminUserManage />} />
        <Route path="/admincourse" element={<AdminCourse />} /> 
        <Route path="/adminanalisys" element={<AdminAnalisys />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/scorecalculator" element={<ScoreCalculator />} />
        <Route path="/resultstimeline" element={<ResultsTimeline />} />
        <Route path="/adminsetting" element={<AdminSetting />} />
        <Route path="/library" element={<Library />} />
        <Route path="/paymentcancel" element={<PaymentCancel />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/paymentcard" element={<PaymentCard />} />
      </Routes>
    </Router>
  );
}

export default App;
