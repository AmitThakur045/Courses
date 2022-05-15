import React from "react";
import Carousel from "react-elastic-carousel";
import image from "../assests/image.jpg";

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
  width: "100%",
  height: "320px",
  backgroundposition: "top",
  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${image})`,
  backgroundsize: "cover",
  color: "#fff",
  margin: "0 15px",
};

const Faculty = () => {
  const items = [
    { id: 1, title: "item #1" },
    { id: 2, title: "item #2" },
    { id: 3, title: "item #3" },
    { id: 4, title: "item #4" },
    { id: 5, title: "item #5" },
    { id: 7, title: "item #7" },
    { id: 8, title: "item #8" },
    { id: 9, title: "item #9" },
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
        <div className="text-slate-500 text-[1.02rem] font-normal lg:w-[38rem] md:w-[38rem] sm:w-auto">
          Learn from leading academicians in the field of Data Science and
          Business Analytics and several experienced industry practitioners from
          top organisations.
        </div>
        <div className="p-2">
          <Carousel breakPoints={breakPoints}>
            {items.map((item) => (
              <div style={styles} key={item.id}>
                <div className="flex flex-col">
                  <p className="text-xl">{item.title}</p>
                  <p className="text-sm from-stone-300">Description</p>
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
