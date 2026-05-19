import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import ClassPage from "./pages/ClassPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/class/:c" element={<ClassPage />} />
            <Route path="/class/:c/profile/:a" Component={(props)=><ProfilePage {...props} />} />
            {/*<Route path="/${semester.semester}/${semester.name}" element={<AvatarProfilePage />} />*/}
        </Routes>
    </BrowserRouter>
);
