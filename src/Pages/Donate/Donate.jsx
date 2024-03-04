import React, { useEffect } from "react";
import "./Donate.css";
import { Link } from "react-router-dom";
import TextCard from '../../Components/HeaderCard/HCard'
const DonateLinks = [
  {
    name: "Each ( Educate a Child )",
    imgPath: "./images/each1.jpg",
    discr:
      "Each ( Educate a Child ) Invite donors to Donate 6000/- per year for a child's education.",
    eventlink: "/donate/each",
  },
  {
    name: "Hostel Construction",
    imgPath: "./images/hostel_c.jpg",
    discr:
      "JVM School has hostel facility for students who come from remote areas. Hostel has 100 students capacity.",
    eventlink: "/donate/hostel_construction",
  },
  {
    name: "Hostel Sustainability",
    imgPath: "./images/hostel_s.jpg",
    discr:
      "JVM School has hostel facility for students who come from remote areas. Hostel has 100 students capacity.",
    eventlink: "/donate/hostel_sustainability",
  },
  {
    name: "LiGHT",
    imgPath: " ./images/light.jpg",
    discr:
      "LiGHT is Expantion Intiative of GWYS to reach to PAN INDIA",
    eventlink: "/donate/LiGHT",
  },
];

const DonateCard = ({ name, imgPath, discr, eventlink }) => {


  return (
    <>
      <div className="blog-item">
        <Link to={eventlink}>
          <div className="icon">
            <img src={imgPath} alt="" />
          </div>
          <div className="content">
            <div className="title">{name}</div>
            <div className="rounded"></div>

            <p>{discr}</p>
          </div>

          <div className="item-arrow">

            <i className="fa fa-long-arrow-right" aria-hidden="true" ></i>
          </div>
        </Link>
      </div>
    </>
  );
};

function Donate() {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Donate | GYWS"

  }, [])
  return (
    <>
      <div>
        <br />
        <TextCard head="Donate Now"></TextCard>
        <br />
        {DonateLinks.map((data, index) => (
          <DonateCard
            key={index}
            name={data.name}
            imgPath={data.imgPath}
            discr={data.discr}
            eventlink={data.eventlink}
          />
        ))}
      </div>
    </>
  );
}

export default Donate;
