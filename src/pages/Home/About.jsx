import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero  bg-base-200 my-4 ">
        <div className="hero-content flex-col lg:flex-row ">
          <div className='md:w-1/2 relative w-full'>
          <img src={person} className="max-w-sm rounded-lg shadow-2xl w-3/4 " />
          <img src={parts} className="max-w-sm rounded-lg shadow-2xl w-2/4 absolute right-5 top-1/2  " />
          </div>
          <div className='md:w-1/2 space-y-7 w-full mt-8 md:mt-4'>
            <h3 className='text-[#FF3811] font-semibold'>About Us</h3>
            <h1 className="text-3xl font-bold">We are qualified & of experience in this field</h1>
            <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <button className="btn bg-[#FF3811]">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;