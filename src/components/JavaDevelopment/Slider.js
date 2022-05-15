import React from "react";
import Carousel from "react-elastic-carousel";
import SampleData from "./SampleData";
import photo from "../../assests/sample.png";

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
    { width: 900, itemsToShow: 2 },
  ];

  const items = [
    {
      id: 1,
      title: "Project 1",
      subtitle: "E-commerce",
      description:
        "Create a dynamic and responsive Java e-commerce web application using technologies such as Angular, Hibernate, MYSQL, Docker.",
      photo: photo,
    },
    {
      id: 2,
      title: "Project 2",
      subtitle: "Food Delivery",
      description:
        "Build a food-delivery app from scratch using your knowledge of the Spring framework, web services, and MySQL with a strong back end to support operations.",
      photo: photo,
    },
    {
      id: 3,
      title: "Project 3",
      subtitle: "Entertainment",
      description:
        "Create an entertainment application like BookMyShow using your back-end knowledge, API development, and HTML and CSS skills.",
      photo: photo,
    },
    {
      id: 4,
      title: "Project 4",
      subtitle: "Healthcare",
      description:
        "Build a dynamic and effective healthcare app. Create rich UI for effective diagnosis and health advice with Angular, Javascript ES6, and many more.",
      photo: photo,
    },
  ];

  return (
    <Carousel breakPoints={breakPoints}>
      {items.map((item) => (
        <div style={styles} className="space-x-4 w-[40rem]" key={item.id}>
          <SampleData
            id={item.id}
            photo={item.photo}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
