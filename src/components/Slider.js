import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-elastic-carousel";
import SampleData from "./SampleData";
import photo from "../assests/sample.png";

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
  width: "100%",
  height: "auto",
  margin: "0 15px",
  borderRadius: "10px",
  border: "1.2px solid #BEBEBE",
};

const Slider = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 700, itemsToShow: 2 },
    { width: 900, itemsToShow: 2},
  ];

  const items = [
    {
      id: 1,
      title: "item #1",
      subtitle: "subtitle #1",
      photo: photo,
    },
    {
      id: 2,
      title: "item #2",
      subtitle: "subtitle #2",
      photo: photo,
    },
    {
      id: 3,
      title: "item #3",
      subtitle: "subtitle #3",
      photo: photo,
    },
    {
      id: 4,
      title: "item #4",
      subtitle: "subtitle #4",
      photo: photo,
    },
  ];

  return (
    <Carousel breakPoints={breakPoints}>
      {items.map((item) => (
        <div style={styles} className="space-x-4 w-[40rem]" key={item.id}>
          <SampleData
            photo={item.photo}
            title={item.title}
            subtitle={item.subtitle}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
