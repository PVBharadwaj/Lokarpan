import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import SecondaryNav from "../../Navbar/SecondaryNav/SecondaryNav";
import "./Leadership.css";

const Leadership = () => {
  const Desp = [
    {
      id: 1,
      head: "Board",
      des: "Lokarpan's esteemed Board members are visionary leaders, driving our mission of sustainable development in rural India with strategic guidance and expertise.",
    },
    {
      id: 2,
      head: "Staff",
      des: "Our dedicated Lokarpan team members are the backbone of our organisation, working tirelessly to implement projects, engage with communities, and ensure the success of our initiatives.",
    },
    {
      id: 3,
      head: "Educators",
      des: "Lokarpan's educators are passionate professionals, committed to transforming the educational landscape in rural India by providing innovative and engaging learning experiences.",
    },
    {
      id: 4,
      head: "Fellows",
      des: "As part of Lokarpan's Fellowship program, our Fellows are valued contributors who directly impact rural education, bringing fresh perspectives and dedication to our mission.",
    },
  ];

  return (
    <>
      <Navbar />
      <SecondaryNav />
      <div className="lead-page-main">
        <div className="lead-page background-grad">
          <h2 className="title1 lead-main-title">Our Leadership</h2>
          <div className="img-contain">
            {" "}
            <img
              className="lead-img"
              src="https://res.cloudinary.com/dtfzxqpoy/image/upload/v1708890771/Frame_48097347_c30iq9.png"
              alt=""
            />
          </div>
          <div className="lead-rest">
            <div className="desp lead-desp-head">
              {/* Lokarpan is led globally by our managing partner; our elected board of directors, known as the Shareholders Council; a global leadership team known as the Acceleration Team; and the leaders of our offices and practices. */}
              Board. Staff. Educators. Fellows. These are Lokarpan's leaders: visionaries dedicated to improving the lives of those we serve. Here are some of the pillars of Lokarpan.
            </div>
            <div className="desp-cards">
              {Desp.map((item, index) => (
                <DespCard key={index} item={item} index={index} />
              ))}
            </div>
          <div className="dummy"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const DespCard = ({ item }) => {
  return (
    <div className="desp-card-list">
      <h4>{item.head}</h4>
      <p>{item.des}</p>
    </div>
  );
};

export default Leadership;
