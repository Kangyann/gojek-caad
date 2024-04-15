import imageProducts from "core/assets/images/base/products.webp";
import imageIcon from "core/assets/images/products/index.js";
import imageBg1 from "core/assets/images/base/food_bg.svg";
import imageBg2 from "core/assets/images/base/business_bg.svg";

const data = {
  Header: {
    title: "We build products that nations run on",
    image: imageProducts,
    bg_1: imageBg1,
    bg_2: imageBg2,
  },
  More: [
    {
      food: [
        {
          title: "Food & Shopping",
          className:"food",
          description:
            "Fill your cart with food, groceries, medicines, electronics and more. Without stepping out.",
          content: [
            {
              image: imageIcon.gofood_solid,
              description: "Hungry? Order in.",
            },
            {
              image: imageIcon.gomart_solid,
              description: "Groceries delivered from stores nearby.",
            },
            {
              image: imageIcon.gomed_solid,
              description: "Chat with doctors, order in medicines.",
            },
            {
              image: imageIcon.goshop_solid,
              description: "Buy anything from anywhere",
            },
          ],
        },
      ],
      business: [
        {
          title: "Business",
          className:"business",
          description:
            "Fill your cart with business, groceries, medicines, electronics and more. Without stepping out.",
          content: [
            {
              image: imageIcon.gobiz_solid,
              description: "A Gojek app to run and grow your business.",
            },
            {
              image: imageIcon.midtrans_solid,
              description: "Accept payments and make payouts easily",
            },
            {
              image: imageIcon.moka_solid,
              description: "Cloud based POS that made selling easy",
            },
            {
              image: imageIcon.selly_solid,
              description: "Keyboard for online sellers",
            },
          ],
        },
      ],
    },
  ],
  Card: [
    {
      image: [
        imageIcon.goride,
        imageIcon.gocar,
        imageIcon.gobluebird,
        imageIcon.gosend,
        imageIcon.gobox,
      ],
      title: "Transport & Logistics",
      description:
        "We’ve kinda done 13,000 trips between the earth and the moon.",
      className: "transport",
    },
    {
      image: [
        imageIcon.gopay,
        imageIcon.gotagihan,
        imageIcon.gopaylater,
        imageIcon.gosure,
      ],
      title: "Payments",
      description:
        "From deals to donations, we make transactions easy, reliable, and cashless.",
      className: "payment",
    },
    {
      image: [
        imageIcon.gofood,
        imageIcon.gomed,
        imageIcon.gomart,
        imageIcon.goshop,
      ],
      title: "Food & Shooping",
      description:
        "Fill your cart with food, electronics, medicines, and more. Without stepping out!",
      className: "food",
    },
    {
      image: [
        imageIcon.gobiz,
        imageIcon.midtrans,
        imageIcon.moka,
        imageIcon.gostore,
        imageIcon.selly,
      ],
      title: "Business",
      description:
        "Manage your restaurants, run ads, create promos, and do more.",
      className: "bussiness",
    },
  ],
};

export default data;
