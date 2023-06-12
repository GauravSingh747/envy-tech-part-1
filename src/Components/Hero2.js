import React from "react";
import heroImg from "../assets/tech-img-3.jpg";
const Hero2 = () => {
  return (
    <div className="max-w-7xl mx-auto my-[2rem]  ">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 px-8 py-2 ">
        <div>
          <h1 className="text-3xl font-semibold">
            Crafting Seamless Digital Experiences: Web and App Development
            Services
          </h1>
          {/* <p className="my-4 text-lg">
            Offering expert website and app development services to unlock
            digital potential, transform visions into reality, and empower
            businesses with innovative solutions. Elevate your online presence,
            drive digital success, and unleash the power of technology with our
            professional services.
          </p> */}

          <div className="my-8">
            <button className="bg-gray-900 text-white px-4 py-1 rounded-md text-[1.2rem]">
              Connect With Us
            </button>
            {/* <button className="bg-gray-700 text-white mx-8 px-4 py-1 rounded-md text-[1.2rem]">
              Learn More &darr;
            </button> */}
          </div>
        </div>
        <div>
          <img src={heroImg} alt="hero-img" className="rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
