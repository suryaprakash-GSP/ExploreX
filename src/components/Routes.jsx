import React from "react";
import Results from "./Results";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/web" replace />} />
      <Route path="/web" element={<Results />} />
      <Route path="/image" element={<Results />} />
      <Route path="/videos" element={<Results />} />
      <Route path="/news" element={<Results />} />
    </Routes>
  );
};

export default AppRoutes;
