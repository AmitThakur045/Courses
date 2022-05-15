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
      title: `My learning experience with simplilearn in the Java Full Stack Developer Program was great. I am thankful to Simplilearn for providing job opportunity because of which I got placed in a very good organisation.`,
      name: "Vidya S",
    },
    {
      id: 2,
      title: `I think the course was good overall and it definitely helped me upskill. Since I am a fresher, I am glad that I was also to get my first job after completing the course.`,
      name: "Pooja Choudhary",
    },
    {
      id: 3,
      title: `This course has a comprehensive curriculum which helped me gain a deeper understanding of the domain. The blended learning model delivered by industry experts along with 24 x 7 Learning support, practice labs, and flexible schedules made it very effective.`,
      name: "Andrea Mydosh",
    },
    {
      id: 4,
      title: `Simplilearn team is the best. I love the format and logistics of Simplilearn so much that I would chose them for future courses at any cost rather than take anything else. Awesome guys. `,
      name: "Raj Kurup",
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
