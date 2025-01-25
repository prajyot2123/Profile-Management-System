import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileList from "./pages/ProfileList";
import AddProfile from "./pages/AddProfile";
import ProfileDetails from "./pages/ProfileDetails";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ProfileList />} />
      <Route path="/add-profile" element={<AddProfile />} />
      <Route path="/profile/:id" element={<ProfileDetails />} />
    </Routes>
  </Router>
);

export default App;
