import SingleBook from "./SingleBook"


const BookList = ({books})=>{
    return (
        <div>
            {books.map((book) =>{
                return <SingleBook book={book} key={book.asin}/>
            })}
        </div>
    )
}

export default BookList