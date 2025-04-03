import { Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ books }) => {
  return (
    <Row xs={12} md={8} lg={4} className="d-flex g-3 mx-3">
      {books.map((book) => {
        return <SingleBook book={book} key={book.asin} />;
      })}
    </Row>
  );
};

export default BookList;
