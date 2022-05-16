import React from "react";
import Carousel from "react-elastic-carousel";
import image1 from "../../assests/DataScience/Darshan_Ingle_DS.jfif";
import image2 from "../../assests/DataScience/Nikhil_Garg_DS.jfif";
import image3 from "../../assests/DataScience/Phani_Karnati_DS.jfif";
import image4 from "../../assests/DataScience/Sahil_Mattoo_DS.jfif";
import image5 from "../../assests/DataScience/Uohna_Thiessen_DS.jfif";
import { BsLinkedin } from "react-icons/bs";
const styles = {};

const Faculty = () => {
  const items = [
    {
      id: 1,
      title: "Darshan Ingle",
      linkedIn:
        "https://www.linkedin.com/in/dr-darshan-ingle-corporate-trainer/",
      img: image1,
    },
    {
      id: 2,
      title: "Nikhil Garg",
      linkedIn: "https://www.linkedin.com/in/nikhil1684/",
      img: image2,
    },
    {
      id: 3,
      title: "Phani Karnati",
      linkedIn: "https://www.linkedin.com/in/phani-karnati/",
      img: image3,
    },
    {
      id: 4,
      title: "Sahil Mattoo",
      linkedIn: "https://www.linkedin.com/in/sahil-mattoo-76276810/",
      img: image4,
    },
    {
      id: 5,
      title: "Uohna Thiessen",
      linkedIn: "https://www.linkedin.com/in/drt-datascientist/",
      img: image5,
    },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div>
      <div className="bg-slate-100 p-14 space-y-4 pl-[7.2rem]">
        <div className="font-bold text-4xl">Faculty and Mentors</div>
        <div className="text-slate-500 text-[1.02rem] font-normal w-[38rem]">
          Learn from leading academicians in the field of Data Science and
          Business Analytics and several experienced industry practitioners from
          top organisations.
        </div>
        <div className="p-2">
          <Carousel breakPoints={breakPoints}>
            {items.map((item) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "end",
                  width: "100%",
                  height: "320px",
                  backgroundPosition: "center",
                  backgroundsize: "cover",
                  backgroundRepeat: "no-repeat",
                  color: "#fff",
                  margin: "0 15px",
                  padding: "10px",
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${item.img})`,
                }}
                key={item.id}>
                <div className="flex  space-x-3">
                  <p className="text-[1.3rem]">{item.title}</p>

                  <a
                    className=""
                    target="_blank"
                    href={item.linkedIn}
                    rel="noreferrer">
                    <BsLinkedin style={{ fontSize: "30px" }} />
                  </a>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
