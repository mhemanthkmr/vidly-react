import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Customer from "./components/customer";
import Login from "./components/login";
import MovieForm from "./components/movieForms";
import Movies from "./components/moviesComponent";
import NotFound from "./components/not-found";
import Rentals from "./components/rentals";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:id" element={<MovieForm />}></Route>
        <Route path="/rentals" element={<Rentals />}></Route>
        <Route path="/customers" element={<Customer />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Navigate to="/movies" replace />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    );
  }
}

export default App;
