import { Component } from "react";
const URL = `https://striveschool-api.herokuapp.com/api/comments/`;
class CommentArea extends Component {
  getReviews = () => {
    fetch(URL + this.props.asin, {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2YzY2Q2NjVjZmRmODAwMTUwY2U1MzkiLCJpYXQiOjE3NDQwMzEwNzgsImV4cCI6MTc0NTI0MDY3OH0.idZ-RlCs9oDx-mZMSJaD2WfZ2-1OoVrrhWsTl3BMRR8",
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
        this.props.changeState({ data });
      })
      .catch(() => {
        console.log("Errore nella ricezione dei dati");
      });
  };

  componentDidMount = () => {
    this.getReviews();
  };

  render() {
    return (
      <div className="my-3">
        <div>{JSON.stringify(this.props.readComments)}</div>
      </div>
    );
  }
}

export default CommentArea;
