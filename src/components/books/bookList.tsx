import type { IBook } from "../../types/book.types"
import BookItem from "./bookItem"

interface BookListProps {
    books: IBook[];
}
const BookList = ({books}: BookListProps) => {
    return(
        <div className="card-grid">
            {books.map((book)=>{
                return(

                    <BookItem book={book} key={book.id}/>
                )

            })}

        </div>
    )
}

export default BookList