import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import ClassAvatars from "./pages/ClassAvatarPage/ClassAvatars.tsx";
import AvatarProfilePage from "./pages/AvatarProfilePage/AvatarProfilePage.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/ClassAvatars" element={<ClassAvatars />} />
            <Route path="/AvatarProfilePage" element={<AvatarProfilePage />} />
        </Routes>
    </BrowserRouter>
);
