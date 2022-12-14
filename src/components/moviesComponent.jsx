import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/pagination";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import MoviesList from "./moviesList";
import _ from "lodash";
import { Link } from "react-router-dom";
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };
  componentDidMount() {
    const genres = [{ name: "All Genres", _id: "" }, ...getGenres()];
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
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      selectGenre,
      movies: allMovies,
      sortColumn,
    } = this.state;
    const filtered =
      selectGenre && selectGenre._id
        ? allMovies.filter((m) => m.genre._id === selectGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };
  render() {
    const { length } = this.state.movies;
    const { pageSize, currentPage, sortColumn } = this.state;
    const { totalCount, data: movies } = this.getPagedData();
    if (length === 0) {
      return <p>There is No Movies in the Database.</p>;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <ListGroup
              genres={this.state.genres}
              onItemSelect={this.handleGenreSelect}
              currentGenre={this.state.selectGenre}
            />
          </div>
          <div className="col">
            <Link to="/movies/new" className="btn btn-primary mb-3">
              New Movie
            </Link>
            <p>Showing {totalCount} movies in the database.</p>
            <MoviesList
              onDelete={this.handleDelete}
              movies={movies}
              onLike={this.handleLike}
              onSort={this.handleSort}
              sortColumn={sortColumn}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
