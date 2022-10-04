import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Customer from "./components/customer";
import LoginForm from "./components/login";
import MovieForm from "./components/movieForms";
import Movies from "./components/moviesComponent";
import NotFound from "./components/not-found";
import Rentals from "./components/rentals";
import RegisterForm from "./components/registerForm";

class App extends Component {
  render() {
    return (
      //Added a Routes for React
      <Routes>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:id" element={<MovieForm />}></Route>
        <Route path="/rentals" element={<Rentals />}></Route>
        <Route path="/customers" element={<Customer />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route path="/" element={<Navigate to="/movies" replace />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    );
  }
}

export default App;
