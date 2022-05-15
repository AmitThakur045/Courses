import React from "react";
import Carousel from "react-elastic-carousel";
import test from "../../assests/test.jpg";

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
  width: "100%",
  height: "530px",
  color: "#fff",
  margin: "15px 15px",
  borderRadius: "10px",
  border: "1.2px solid #BEBEBE",
  boxShadow: "6px 6px 6px 0px rgba(0, 0, 0, 0.19)",
};

const Testimonial = () => {
  const items = [
    {
      id: 1,
      title: `Thanks to the DSE program at Great Lakes, I got 2 job offers, one from DXC Technology and another
    from Razorthink. This program is an ideal mix of both theory and hands-on practice. Taking this course
    to upskill myself was one of the best decisions I’ve made.`,
      name: "Sarath Thirumal",
    },
    {
      id: 2,
      title: `Capstone projects gave a lot of insights about the real life industry problems and issues. Career
    counselling sessions helped me ace multiple interview rounds. The program is ideal for any Fresher who
    wants to learn data science and make a rewarding career out of it.`,
      name: "Vikas Kumar",
    },
    {
      id: 3,
      title: `2-Year career gap didn’t stop me from bagging a position as a consultant at Fractal Analytics. Thank
    you Great Learning.`,
      name: "Srinivasan Rathore",
    },
    {
      id: 4,
      title: `The program is very well structured and an ideal combination of theory and hands-on practice. I got 2
    job offers even before completing the course. `,
      name: "Tejaswini Rathore",
    },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 },
  ];

  return (
    <div>
      <div className="bg-slate-100 p-14 space-y-4 pl-[7.2rem]">
        <div className="font-bold text-4xl">Learner Testimonials</div>
        <div className="p-2">
          <Carousel breakPoints={breakPoints}>
            {items.map((item) => (
              <div style={styles} key={item.id}>
                <div className="flex top-0 flex-col ">
                  <img src={test} alt="images" className="rounded-md" />
                  <div className="p-3">
                    <p className="text-black text-[1.2rem]">{item.title}</p>
                  </div>
                  <div className="px-3">
                    <p className="text-slate-500 text-[1rem]">{item.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
