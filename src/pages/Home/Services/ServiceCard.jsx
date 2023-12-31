import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
  console.log(service)
  const { img, title, _id } = service;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <Link to={`/chekout/${_id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;