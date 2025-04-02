import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from './assets/MyNav'
import MyFooter from "./assets/MyFooter"
import Welcome from "./assets/Welcome "
import BookList from "./assets/BookList "
import booksData from "./assets/books/fantasy.json"
// import SingleBook from "./assets/SingleBook"

function App() {
  // const bookElement ={
  //   title: "The Last Wish: Introducing the Witcher",
  //   category:"fantasy",
  //   price:9.59,
  //   img:"https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg"
  // }
  return (
    <>
      <MyNav/>
      <Welcome/>
      {/* <SingleBook book = {bookElement}/> */}
      <BookList books={booksData}/>
      {/* <AllTheBooks/> */}
      <MyFooter/>
    </>
  )
}

export default App
