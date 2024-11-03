import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Navbar from "./components/Navbar/Navbar";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Login from "./pages/Auth/Login/Login";
import SignUp from "./pages/Auth/SignUp/SignUp";
import EmailConfirmation from "./components/EmailConfirmation/EmailConfirmation";
import Profile from "./pages/Auth/Profile/Profile";
import Quizzes from "./pages/Quiz/Quizzes";
import QuizDetail from "./components/QuizDetail/Quizdetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/confirm/:token" element={<EmailConfirmation />} />
           
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/quizzes" element={<Quizzes />} />
              <Route path="/quizzes/:id" element={<QuizDetail />} />
              
            </Route>
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
