import React, { useEffect, useState } from 'react';
import { BookingCard } from '../components/GroundCard';
import axios from 'axios';
import { BASE_URL } from '../utils/helper';

const Bookings = () => {
    const [upcomingBookings, setUpcomingBookings] = useState([]);
    const [previousBookings, setPreviousBookings] = useState([]);
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    const user = localStorage.getItem('username');

    const getBookings = async () => {
        try {
            const { data } = await axios.get(`${BASE_URL}/api/v1/user/bookings`, {
                headers: {
                    'email': email,
                    'Authorization': `Bearer ${token}`,
                }
            });
            if (data.success) {
                const today = new Date().toISOString().slice(0, 10);
                const upcoming = data.bookings
                    .filter(booking => booking.date >= today)
                    .sort((a, b) => new Date(a.date) - new Date(b.date));
                const previous = data.bookings.filter(booking => booking.date < today);
                setUpcomingBookings(upcoming);
                setPreviousBookings(previous);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const deleteBooking = async (bookingId) => {
        try {
            if (!bookingId) {
                console.log("Booking ID is missing!");
                return;
            }

            console.log("Attempting to delete booking with ID:", bookingId);

            const response = await axios.delete(`${BASE_URL}/api/v1/user/bookings/${bookingId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });

            console.log("Booking deleted successfully", response);

            setUpcomingBookings(prevBookings => prevBookings.filter(booking => booking._id !== bookingId));
            setPreviousBookings(prevBookings => prevBookings.filter(booking => booking._id !== bookingId));

        } catch (error) {
            console.error("Failed to delete booking:", error.response ? error.response.data : error.message);
        }
    }

    useEffect(() => {
        getBookings();
    }, []);

    return (
        <div className='bg-gray-200 min-h-screen p-8'>
            <p className='ml-5 md:ml-10 mt-5 mb-10 font-semibold text-3xl text-center md:text-left'>
                Here are your bookings, {user}
            </p>

            <div className='mx-2 md:ml-10 mt-5 mb-3 font-bold text-xl text-center md:text-left'>
                Upcoming Bookings
            </div>
            <div className='flex flex-col md:flex-row justify-center md:justify-start gap-5'>
                {upcomingBookings?.map((booking) =>
                    <div key={booking?._id} className="ml-5 md:ml-10 mt-5 mb-16">
                        <BookingCard
                            id={booking?._id}
                            ground={booking?.ground}
                            date={booking?.date.slice(0, 10)}
                            time={booking?.timeSlot}
                        />
                        <button
                            onClick={() => deleteBooking(booking._id)} 
                            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                )}
                {upcomingBookings.length === 0 &&
                    <p className='ml-5 md:ml-10 mt-5 mb-16 font-light text-xl text-center md:text-left'>
                        You don't have any upcoming bookings.
                    </p>}
            </div>

            <div className='mx-2 md:ml-10 mt-5 mb-3 font-bold text-xl text-center md:text-left'>
                Previous Bookings
            </div>
            <div className='flex flex-col md:flex-row justify-center md:justify-start gap-5'>
                {previousBookings?.map((booking) =>
                    <div key={booking?._id} className="ml-5 md:ml-10 mt-5">
                        <BookingCard
                            id={booking?._id}
                            ground={booking?.ground}
                            date={booking?.date.slice(0, 10)}
                            time={booking?.timeSlot}
                        />
                    </div>
                )}
                {previousBookings.length === 0 &&
                    <p className='ml-5 md:ml-10 mt-5 mb-5 font-light text-xl text-center md:text-left'>
                        You don't have any previous bookings.
                    </p>}
            </div>
        </div>
    );
}

export default Bookings;
