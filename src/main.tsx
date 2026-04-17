import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { BrowserRouter, Routes, Route } from "react-router";
import { AboutPage, MembersPage, ProjectsPage, SponsorsPage } from "./pages/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<AboutPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="members" element={<MembersPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="sponsors" element={<SponsorsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
