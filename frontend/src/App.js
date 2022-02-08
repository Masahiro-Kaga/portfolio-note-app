import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/SingleNote/SingleNote";

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/login" element={<LoginScreen />} exact />
          <Route path="/register" element={<RegisterScreen />} exact />
          <Route path="/createnote" element={<CreateNote />} exact />
          <Route path="/note/:id" element={<SingleNote />} exact />
          <Route path="/mynotes" element={<MyNotes />} />
        </Routes>
      </main>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
