import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faPlus, faUserPlus, faTasks } from '@fortawesome/free-solid-svg-icons'
import Book from './Book/Book';
const User = () => {
    const [booking, setBooking] = useState(true);
    const [bookList, setBookList] = useState(false);
    const [review, setReview] = useState(false);
  

    const handleBooking = () => {
        setBooking(true);
        setBookList(false);
        setReview(false);
       
    }
    const handleBookingList = () => {
        setBooking(false);
        setBookList(true);
        setReview(false);

    }
    const handleReview = () => {
        setBooking(false);
        setBookList(false);
        setReview(true);

    }
   
    
    return (
        <div className="row admin-page">
        <div className="col-md-3">
            <div style={{ height: '100vh' }} className="brand-background-secondary p-5">
                <h3 className="mb-5 text-white">PIPE<span className="brand-text-primary">STARs</span> User</h3>
                <div>
                    <button onClick={handleBooking} className="allBtn mb-3"> <FontAwesomeIcon icon={faList} /> Book</button>
                    <button onClick={handleBookingList} className="allBtn mb-3"> <FontAwesomeIcon icon={faPlus} /> Booking List</button>
                    <button onClick={handleReview} className="allBtn mb-3"> <FontAwesomeIcon icon={faUserPlus} /> Review</button>
                    
                </div>

            </div>

        </div>
        <div className="col-md-9">
           <div className="pt-5">
           <Book></Book>
           </div>
        </div>

    </div>
    );
};

export default User;