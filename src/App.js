import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {CompanyProfile, CourseRegistration, InteractiveCourseLearning, Assessment, FeedbackContact} from './components/Home';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home/company-profile" element={<CompanyProfile />} />
        <Route path="/home/course-registration" element={<CourseRegistration />} />
        <Route path="/home/interactive-course-learning" element={<InteractiveCourseLearning />} />
        <Route path="/home/assessment" element={<Assessment />} />
        <Route path="/home/feedback-contact" element={<FeedbackContact />} />
      </Routes>
    </Router>
  );
};

export default App;
