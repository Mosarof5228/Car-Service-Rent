import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";




const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services)
  useEffect(() => {
    fetch('/public//Services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div className="mb-4">
      <div className="space-y-2 text-center py-5">
        <p className="text-red-500">Services</p>
        <h3 className="font-bold text-4xl">Our Services Area</h3>
        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {
          services.map(service => <ServiceCard
            key={service._id}
            service={service}
          ></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;