import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"; // Importing some example icons for contact details

const Contact = () => {
  return (
    <section
      className="py-12 px-6 md:px-12 lg:px-24"
      style={{
        background: "linear-gradient(to bottom,  #090025FF, #030012FF)" // Matching the background gradient as the Vision component
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-4xl font-bold text-[#7c3aed] mb-6">
          Contact Us
        </h2>
        <p className="text-[#ede9fe] mb-8 leading-relaxed">
          Get in touch with us to learn more about our mission and how you can
          contribute to wildlife conservation. We are always here to help!
        </p>
      </div>

      {/* Contact Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col items-center text-[#ede9fe] relative group">
          <FaPhoneAlt
            className="text-4xl mb-4 text-[#7c3aed] transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            title="Call Us"
          />
          <h3 className="text-lg font-semibold">Phone</h3>
          <p className="text-center">+123 456 7890</p>
          {/* Popup on hover */}
          <div className="absolute hidden group-hover:block bg-[#7c3aed] text-white text-sm rounded-md py-2 px-4 mt-2">
            Click to call
          </div>
        </div>

        <div className="flex flex-col items-center text-[#ede9fe] relative group">
          <FaEnvelope
            className="text-4xl mb-4 text-[#7c3aed] transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            title="Send an Email"
          />
          <h3 className="text-lg font-semibold">Email</h3>
          <p className="text-center">contact@wildlifeguardians.org</p>
          {/* Popup on hover */}
          <div className="absolute hidden group-hover:block bg-[#7c3aed] text-white text-sm rounded-md py-2 px-4 mt-2">
            Send us an email
          </div>
        </div>

        <div className="flex flex-col items-center text-[#ede9fe] relative group">
          <FaMapMarkerAlt
            className="text-4xl mb-4 text-[#7c3aed] transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            title="Find Us"
          />
          <h3 className="text-lg font-semibold">Address</h3>
          <p className="text-center">123 Conservation St, City, Country</p>
          {/* Popup on hover */}
          <div className="absolute hidden group-hover:block bg-[#7c3aed] text-white text-sm rounded-md py-2 px-4 mt-2">
            Visit our location
          </div>
        </div>
      </div>

      {/* Social Media Links (Example) */}
      <div className="mt-8 flex justify-center space-x-6">
        <a
          href="#"
          className="text-[#7c3aed] text-3xl hover:text-[#ede9fe] relative group"
          title="Facebook"
        >
          <i className="fab fa-facebook-f"></i>{" "}
          {/* Replace with your logo/icon */}
          <div className="absolute hidden group-hover:block bg-[#7c3aed] text-white text-sm rounded-md py-2 px-4 mt-2">
            Facebook
          </div>
        </a>
        <a
          href="#"
          className="text-[#7c3aed] text-3xl hover:text-[#ede9fe] relative group"
          title="Twitter"
        >
          <i className="fab fa-twitter"></i> {/* Replace with your logo/icon */}
          <div className="absolute hidden group-hover:block bg-[#7c3aed] text-white text-sm rounded-md py-2 px-4 mt-2">
            Twitter
          </div>
        </a>
        <a
          href="#"
          className="text-[#7c3aed] text-3xl hover:text-[#ede9fe] relative group"
          title="Instagram"
        >
          <i className="fab fa-instagram"></i>{" "}
          {/* Replace with your logo/icon */}
          <div className="absolute hidden group-hover:block bg-[#7c3aed] text-white text-sm rounded-md py-2 px-4 mt-2">
            Instagram
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
