import React from "react";
import { Route, Routes } from "react-router-dom";
import AppContent from "../components/Content";

const AppRoute = () => {
    return <>
        <Routes>
            <Route path="/DataCollection-HostGroups" element={<AppContent />} />
            <Route path="/DataCollection-TemplateGroups" element={<AppContent />} />
            <Route path="/DataCollection-Template" element={<AppContent />} />
            <Route path="/DataCollection-Host" element={<AppContent />} />
            <Route path="/Monitoring-Hosts" element={<AppContent />} />
        </Routes>
    </>
}

export default AppRoute;