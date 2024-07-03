// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/LandingPage';
import Dashboard from './Operator/OperatorDashboard';
import OperatorLogin from './Operator/operatorlogin';
import AttendantLogin from './Attendent/attendantlogin';
import DailyReport from './Operator/OperatorDailyReport';
import Analytics from './Operator/OperatorAnalytics';
import Attendants from './Operator/Attendants';
import SignIn from './components/SignIn';
import AttendantDashboard from './Attendent/AttendantDashboard';
import MakeEntry from './Attendent/MakeEntry';
import MakeExit from './Attendent/MakeExit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/operatorlogin" element={<OperatorLogin/>}/>
        <Route path="/attendantlogin" element={<AttendantLogin/>}/>
        <Route path="/attendantdashboard" element={<AttendantDashboard />}>
          <Route path="make-entry" element={<MakeEntry />} />
          <Route path="make-exit" element={<MakeExit />} />
          {/* Add other routes for the AttendantDashboard as needed */}
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Navigate to="daily-report" />} />
          <Route path="daily-report" element={<DailyReport />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="attendants" element={<Attendants />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
