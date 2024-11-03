import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [ books, setBooks]=useState([])
    useEffect(()=>{
         fetch('./booksData.json')
         .then(res =>res.json())
          .then(data=>setBooks(data))
    },[])
    return (
        <div>
            <h2 className="text-4xl  text-center mb-6 font-bold">Books</h2>
              <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {
                     books.map(book =><Book book={book } key={book.bookId}></Book>)
                }
              </div>
        </div>
    );
};

export default Books;