import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { image, bookId, author, bookName, review, totalPages, rating, category, tags, publisher, yearOfPublishin } = book
    return (
       <Link to={`/books/${bookId}`}>
        <div className="card h-[500px] w-96 shadow-xl p-6 border rounded-2xl">
            <figure className='bg-gray-300 h-52 py-8 rounded-2xl'>
                <img className='h-[166px]'
                    src={image}
                    alt={bookName} />
            </figure>
            <div className="card-body">
                <div className='flex justify-center gap-3 '>
                    {
                        tags.map((tag, index) => <button key={index} className="btn btn-xs bg-green-100 text-green-500">{tag}</button>)
                    }

                </div>
                <h2 className="card-title font-bold text-2xl">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='font-medium '>By: {author}</p>
                <div className='border-t-4 border-dashed'></div>
                <div className="card-actions justify-between items-center">
                    <div className="badge badge-outline">{category}</div>
                    <div>{rating}</div>
                    <div>{totalPages}</div>
                    <div className="">
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-200" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-200" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </Link>
    );
};

export default Book;