import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";


const Checkout = () => {
    const ServiceData = useLoaderData();
    const { title, price, _id, img } = ServiceData;

    const { user } = useContext(AuthContext)

    const handleOrderConfirm = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const email = user?.email;
        const date = form.date.value;
        const name = form.name.value;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price

        }
        console.log(booking)
        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Your Booking is Successfull',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <div>
            <h2 className="text-3xl font-bold">Booked Service:Autometic Service</h2>
            <h2>{title}</h2>
            {/* form */}

            <form onSubmit={handleOrderConfirm} className="mx-2 md:mx-3 lg:mx-4">
                <div className="grid md:grid-cols-2 gap-4 ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} name="email" placeholder="Email" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" placeholder="Date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" name="price" defaultValue={'$' + price} placeholder="Due Amount" className="input input-bordered" required />

                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Order Confirm" />
                </div>
            </form>

        </div>






    );
};

export default Checkout;