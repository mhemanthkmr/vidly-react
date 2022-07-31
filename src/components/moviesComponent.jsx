import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/pagination";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import MoviesList from "./moviesList";
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
  };
  componentDidMount() {
    const genres = [{ name: "All Genres", _id: "all genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres });
  }
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = (genre) => {
    this.setState({ selectGenre: genre, currentPage: 1 });
  };
  render() {
    const { length } = this.state.movies;
    const {
      pageSize,
      currentPage,
      selectGenre,
      movies: allMovies,
    } = this.state;
    if (length === 0) {
      return <p>There is No Movies in the Database.</p>;
    }
    const filtered =
      selectGenre && selectGenre._id !== "all genres"
        ? allMovies.filter((m) => m.genre._id === selectGenre._id)
        : allMovies;
    console.log(selectGenre);
    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            genres={this.state.genres}
            onItemSelect={this.handleGenreSelect}
            currentGenre={this.state.selectGenre}
          />
        </div>
        <div className="col">
          <p>Showing {filtered.length} movies in the database.</p>
          <MoviesList
            onDelete={this.handleDelete}
            movies={movies}
            onLike={this.handleLike}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
