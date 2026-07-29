import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PrimaryPage from "./pages/PrimaryPage";
import Introduction from "./pages/content/content-page/Introduction";
import ImproveListening from "./pages/content/content-page/ImproveListening";
import ChatBot from "./pages/content/content-page/ChatBot";
import EditPerfil from "./pages/content/content-page/EditPerfil";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutProject from "./pages/AboutProject";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="About" element={<AboutProject />} />

        <Route path="primarypage" element={<PrimaryPage />}>
          <Route index path="Introduction" element={<Introduction />} />
          <Route path="ImproveListening" element={<ImproveListening />} />
          <Route path="ChatBot" element={<ChatBot />} />
          <Route path="editPerfil" element={<EditPerfil />} />
        </Route>
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
