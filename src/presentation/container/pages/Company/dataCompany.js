import imageCompany from "core/assets/images/base/company.webp";
import imageSocial from "core/assets/images/base/social.svg";
import imageSpeed from "core/assets/images/base/speed.svg";
import imageInnovation from "core/assets/images/base/innovation.svg";

const data = {
  Header: {
    title: "Been quite a ride",
    description: "Know our journey, and the people behind it.",
    image: imageCompany,
  },
  Pillars: [
    {
      title: "Innovation",
      description: "Solve problems at scale.",
      image: [imageInnovation],
    },
    {
      title: "Social Impact",
      description: "Transform lives, inspire change.",
      image: [imageSocial],
    },
    {
      title: "Speed",
      description: "Move fast, push boundaries.",
      image: [imageSpeed],
    },
  ],
};

export default data;
