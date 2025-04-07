import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./assets/MyNav";
import MyFooter from "./assets/MyFooter";
import Welcome from "./assets/Welcome ";
import BookList from "./assets/BookList ";
import booksData from "./assets/books/fantasy.json";
import { Component } from "react";
import CommentArea from "./assets/CommentArea";
// import SingleBook from "./assets/SingleBook"

class App extends Component {
  state = {
    reviews: [],
  };

  changeState = (newReviews) => {
    this.setState({
      reviews: newReviews,
    });
  };
  render() {
    return (
      <>
        <MyNav />
        <Welcome />
        {/* <SingleBook book = {bookElement}/> */}
        <div className="d-flex">
          <BookList books={booksData} />
          <div>
            <h1>Comment area</h1>
            <CommentArea
              changeState={this.changeState}
              readComments={this.state}
            />
          </div>
        </div>
        {/* <AllTheBooks/> */}
        <MyFooter />
      </>
    );
  }
  // const bookElement ={
  //   title: "The Last Wish: Introducing the Witcher",
  //   category:"fantasy",
  //   price:9.59,
  //   img:"https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg"
  // }
}

export default App;
