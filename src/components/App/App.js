import React, { Component } from "react";
import Banner from "../Banner/Banner";
import Layer from "../Layer/Layer";
import Ten from "../Ten/Ten";
import Testimonial from "../Testimonial/Testimonial";
import Clients from "../Clients/Clients";
import Team from "../Team/Team";
import WorkWIthUs from "../WorkWithUs/WorkWithUs";
import Footer from "../Footer/Footer";
import AsSeenOn from "../AsSeenOn/AsSeenOn";
import DevelopedBy from "../DevelopedBy/DevelopedBy";
class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Layer />
        <Ten />
        <Testimonial />
        <Clients />
        <Team />
        <WorkWIthUs />
        <Footer />
        <AsSeenOn />
        <DevelopedBy />
      </div>
    );
  }
}
export default App;
