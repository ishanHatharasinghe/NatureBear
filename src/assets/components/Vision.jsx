import animal3 from "./../animals (11).jpg";
import animal4 from "./../animals (12).jpg";
import animal1 from "./../animals (5).jpg";
import animal2 from "./../animals (6).jpg";

const images = [animal1, animal2, animal3, animal4];

const Vision = () => {
  return (
    <section
      className="py-12 px-6 md:px-12 lg:px-24"
      style={{
        background: "linear-gradient(to bottom,  #090025FF, #030012FF)" // Similar background gradient as About component
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-4xl font-bold text-[#7c3aed] mb-6">
          Vision
        </h2>
        <p className="text-[#ede9fe] mb-8 leading-relaxed">
          At{" "}
          <span className="font-semibold text-[#7e22ce]">
            Wildlife Guardians
          </span>
          ,"Empowering Action, Protecting Nature: A Future Where Wildlife
          Thrives" Our vision is to create a global platform dedicated to
          wildlife conservation by uniting technology, knowledge, and community
          efforts. Through education, real-time data sharing, and actionable
          insights, we aim to inspire individuals, organizations, and
          governments to take meaningful steps towards preserving biodiversity.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg group"
          >
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`Wildlife Conservation ${index + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vision;
