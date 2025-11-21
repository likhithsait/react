import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";

import {Portfolio} from "./pages/Portfolio";
import  {CaseStudies}  from "./pages/CaseStudies";
import  Testimonials  from "./pages/Testimonials";
import  RecentWork  from "./pages/RecentWork";
import  Contact  from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Portfolio />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/recent-work" element={<RecentWork />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
