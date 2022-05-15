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
      title: "Healthcare",
      subtitle: "Predictive model for Diabetes Treatments",
      description:
        "A hospital is evaluating the efficiency of Insulin based treatment for diabetes patients. The Objective is to recommend whether solo insulin or conjunction of other drugs/ treatment is more effective at treating diabetes based on analyzing the patient's medical history.",
      photo: photo,
    },
    {
      id: 2,
      title: "Retail",
      subtitle: "Retail Sales prediction",
      description:
        "A store has a loyalty program and wants to provide offers on products during the non-sale period on certain categories of interest. Based on the Black day sales data, recommend the top 100 products it must prioritize for loyalty rewards to customers.",
      photo: photo,
    },
    {
      id: 3,
      title: "Realty",
      subtitle: "Realty Predictive modeling on House Value",
      description:
        "A house value is simply more than location and square footage. Like the features that make up a person, an educated party would want to know all aspects that give a house its value. For example, you want to sell a house and you don’t know the price which you can take — it can’t be too low or too high. To find the house price you usually try to find similar properties in your neighbourhood and based on gathered data you will try to assess your house price.",
      photo: photo,
    },
    {
      id: 4,
      title: "BFSI",
      subtitle: "Prediction of Loan interest rates",
      description:
        "To develop the credit scorecard using a regression model, where the past data of the existing loans & default cases can be used to enable the investor to predict the probability of default for a potential loan to be given to the new loan applications from the borrowers and based on the risk categorization / risk bucketing suggest suitable interest rates to be charged to hedge the risk involved.",
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
