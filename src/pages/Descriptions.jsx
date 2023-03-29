import Header from "../components/Header";
import DisplayDescription from "../components/DisplayDescription";

const Descriptions = () => {
  return (
    <div>
      <Header />
      <div className="desciption-content">
        <div className="description">
          <DisplayDescription />
        </div>
      </div>
    </div>
  );
};

export default Descriptions;
