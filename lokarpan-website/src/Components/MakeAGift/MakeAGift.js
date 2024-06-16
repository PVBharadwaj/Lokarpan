import Footer from "../Footer/Footer";
import GiftSubNav from "../Navbar/GiftSubNav/GiftSubNav";
import Navbar from "../Navbar/Navbar";
import "./MakeAGift.css";
const MakeAGift = () => {
  return (
    <>
    <Navbar />
      <GiftSubNav />
      <div className="ways-img">
        <img src="https://www.colorhexa.com/ebebeb.png" alt="" />
      </div>
      <div className="make-a-gift-div">
        <p className="give-para1">
          A gift to the Harvard Art Museums' Annual Appeal provides crucial
          support for daily operations while also ensuring that the museums will
          thrive for future generations. Annual support from donors helps the
          museums lead the field in advancing museum practice and the study and
          appreciation of the visual arts.
        </p>
        <p className="give-para2">
          Every gift counts. You can make your gift online, or for more
          information about the Harvard Art Museums' Annual Appeal, contact Liz
          Cartland, Director of Major Gifts and Strategic
          Initiatives, at 617-495-9980
        </p>
      </div>
      <Footer />
    </>
  );
};

export default MakeAGift;
