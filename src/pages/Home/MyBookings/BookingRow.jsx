
const BookingRow = ({ booking, handleBookingDelete, handleBookingConfirm }) => {
    const { _id, service, price, date, img, status } = booking;


    return (

        <tr>
            <th>
                <button onClick={() => handleBookingDelete(_id)} className="btn btn-outline btn-error">Delete</button>
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-24 rounded h-12">
                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </td>
            <td>
                {service}
            </td>
            <td>{date}</td>
            <td>{price}</td>
            <th>
                {status === 'confirm' ? <span className="text-primary font-bold">Confirmed</span> :
                    <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                }
            </th>
        </tr>

    );
};

export default BookingRow;