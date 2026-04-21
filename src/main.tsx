import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage, AboutPage, MembersPage, ProjectsPage, SponsorsPage, ContactPage, ApplyPage } from "@/pages";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="members" element={<MembersPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="sponsors" element={<SponsorsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="apply" element={<ApplyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
