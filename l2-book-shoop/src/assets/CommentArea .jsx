import { Component } from "react";

const URL = `https://striveschool-api.herokuapp.com/api/comments/${asin}`;

class CommentArea extends Component {
  state = {
    reviews: [],
  };

  getReviews = () => {
    fetch(URL, {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMjgwZDM4MzRiZjAwMTUwMDA3MDEiLCJpYXQiOjE3NDM2ODY0NTIsImV4cCI6MTc0NDg5NjA1Mn0.P_eAH8S250yW9myek1XEuHxLLX7cyfy5LYKtGq4XVwQ",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw console.error("male");
        }
      })
      .then((data) => {
        console.log("recenzioni", data);
        this.setState({
          reviews: data,
        });
      })
      .catch(() => {
        console.log("Errore nella ricezione dei dati");
      });
  };

  componentDidMount = () => {
    this.getReviews();
    console.log("pippo");
  };

  render() {
    return (
      <div className="my-3">
        <p>
          {this.state?.reviews?.map((book) => {
            return <div>{book.comment}</div>;
          })}
        </p>
      </div>
    );
  }
}

export default CommentArea;
