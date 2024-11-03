import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishlist } from "../Utility/addToDb";


const BookDetail = () => {
    const {bookId}= useParams();
  const id = parseInt(bookId)

    const data =useLoaderData();
    const book= data.find(book=> book.bookId=== id)
    console.log( book)
    const { image, bookId:currentBookId, author, bookName, review, totalPages, rating, category, tags, publisher, yearOfPublishin } = book
      
    const handleRead=(id)=>{
        addToStoredReadList(id)

    }
    const handleWishlist=(id)=>{
        addToStoredWishlist(id)
    }


    return (
        <div className="my-12">
            <h2> Book detalis: {bookId}</h2>
            <img className="w-52" src= {image} alt="" />
            <br />
            <button onClick={()=>handleRead(bookId)} className="btn btn-outline mr-4 btn-accent">Read</button>
            <button onClick={()=>handleWishlist(bookId)} className="btn btn-accent">Wishlist</button>

        </div>
    );
};

export default BookDetail;