import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {BrowserRouter, Routes, Route, useLocation } from "react-router";
import ClassPage from "./pages/ClassPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import {useLayoutEffect} from "react";

const Wrapper = ({ children }) => {
    const location = useLocation();

    useLayoutEffect(() => {
        // Scroll to the top of the page when the route changes
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [location.pathname]);

    return children;
};

ReactDOM.createRoot(document.getElementById("root")!).render(


    <BrowserRouter>
        <Wrapper>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/class/:c" element={<ClassPage />} />
                <Route path="/class/:c/profile/:a" Component={(props)=><ProfilePage {...props} />} />
                {/*<Route path="/${semester.semester}/${semester.name}" element={<AvatarProfilePage />} />*/}
            </Routes>
        </Wrapper>
    </BrowserRouter>
);
