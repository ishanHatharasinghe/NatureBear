import animal13 from "./../animals (11).jpg";

const About = () => {
  return (
    <section
      className=" py-12 px-6 md:px-12 lg:px-24"
      style={{
        background: "linear-gradient(to bottom,  #090025FF, #030012FF)" // Linear gradient from left to right
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-4xl font-bold text-[#7c3aed] mb-6">
          About Us
        </h2>
        <p className="text-[#ede9fe] mb-8 leading-relaxed">
          At{" "}
          <span className="font-semibold text-[#7e22ce]">
            Wildlife Guardians
          </span>
          , our mission is to protect, conserve, and restore endangered species
          and their habitats. Through education, community engagement, and
          sustainable practices, we aim to build a future where humans and
          wildlife thrive together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="bg-[#000000FF] rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-[#ede9fe] text-xl font-semibold mb-4">
            Our Commitment
          </h3>
          <p className="text-[#ede9fe] text-lg">
            We are dedicated to the protection of wildlife, ensuring that future
            generations can enjoy the beauty and wonder of the natural world.
          </p>
        </div>

        <div className="bg-[#000000FF] rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-[#ede9fe] text-xl font-semibold mb-4">
            Join Us Today
          </h3>
          <p className="text-[#ede9fe] text-lg mb-6">
            Become part of our mission to protect endangered species by
            supporting conservation efforts and educating the public on
            environmental issues.
          </p>
          <button className="bg-[#190044FF] text-[#ede9fe] py-2 px-6 rounded-full hover:bg-[#000DFFFF]">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
