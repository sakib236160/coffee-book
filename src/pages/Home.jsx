import Banner from "../components/Banner";
import Heading from "../components/Heading";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <Banner></Banner>
      {/* Hadding */}
      <Heading
        title={"Browse Coffees By Category"}
        subtitle={"This is a SubTitle"}
      ></Heading>
      {/* Catagories tab Section */}
      <div role="tablist" className="tabs tabs-lifted">
        <a role="tab" className="tab">
          Tab 1
        </a>
        <a role="tab" className="tab tab-active">
          Tab 2
        </a>
        <a role="tab" className="tab">
          Tab 3
        </a>
      </div>
      {/* Dinamic Nexted Component */}
    </div>
  );
};

export default Home;
