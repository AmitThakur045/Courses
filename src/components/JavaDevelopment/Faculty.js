import React from "react";
import Carousel from "react-elastic-carousel";
import { BsLinkedin } from "react-icons/bs";
import dheeraj from "../../assests/JAVA/Dheeraj_Kumar_JAVA.jfif";
import james from "../../assests/JAVA/James_JAVA.jfif";
import nikunj from "../../assests/JAVA/Nikunj_Soni_JAVA.jfif";
import raghavendra from "../../assests/JAVA/Raghavendra_M_J_Java.jfif";
import sonam from "../../assests/JAVA/Sonam_Soni_JAVA.jfif";

const Faculty = () => {
  const items = [
    { id: 1, title: "Dheeraj Kumar", photo: dheeraj, linkdin: "https://www.linkedin.com/in/dheerajskumar/"  },
    { id: 2, title: "James", photo: james, linkdin: "https://www.linkedin.com/in/james-ring-howell-31a0521/" },
    { id: 3, title: "Nikunj Soni", photo: nikunj, linkdin: "https://www.linkedin.com/in/nikunj-soni-22162a20b/" },
    { id: 4, title: "Raghavendra MJ", photo: raghavendra, linkdin: "https://www.linkedin.com/in/raghavendramj/" },
    { id: 5, title: "Sonam Soni", photo: sonam, linkdin: "https://www.linkedin.com/in/sonam-soni/" },
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
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${item.photo})`,
                  backgroundsize: "cover",
                  backgroundRepeat: "no-repeat",
                  color: "#fff",
                  margin: "0 15px",
                  padding: "10px"
                }}
                key={item.id}
              >
                <div className="flex space-x-3">
                  <p className="text-[1.3rem]">{item.title}</p>
                  <a href={item.linkdin}><BsLinkedin style={{ fontSize: "30px"}}/></a>
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
