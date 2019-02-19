import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;
    const infoBar =
      count !== 0 ? `Showing ${count} movies` : "There are no movies to show";

    return (
      <React.Fragment>
        <div>{infoBar}</div>
        {count !== 0 && (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map(movie => (
                <tr key={movie.title}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => {
                        this.handleDelete(movie);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </React.Fragment>
    );
  }
}

export default Movies;
