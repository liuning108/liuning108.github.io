import Canva02 from "@/app/canvas_js/02/page";
import Canva01 from "@/app/canvas_js/01/page";
import Canva04 from "@/app/canvas_js/04/page";
import Canva05 from "@/app/canvas_js/05/page";
import Canva06 from "@/app/canvas_js/06/page";
import Canva08 from "@/app/canvas_js/08/page";
import Canva09 from "@/app/canvas_js/09/page";
import Canva10 from "@/app/canvas_js/10/page";
import Canva11 from "@/app/canvas_js/11/page";
import Canva13 from "@/app/canvas_js/13/page";
import Canva14 from "@/app/canvas_js/14/page";
import Canva15 from "@/app/canvas_js/15/page";
import P10 from "@/app/p5/10/page";

type CardItemProps = {
  children: JSX.Element;
  className: string;
  url: string;
  name: string;
};
export const cardList: CardItemProps[] = [
  {
    children: <P10 w={400} h={400} />,
    className: "bg-black",
    url: "/p5/10",
    name: "Time Clock",
  },
  {
    children: <Canva15 hide={true} />,
    className: "bg-black",
    url: "/canvas_js/15",
    name: "Gifts",
  },
  {
    children: <Canva14 hide={true} />,
    className: "bg-black",
    url: "/canvas_js/14",
    name: "Trees",
  },
  {
    children: <Canva13 hide={true} />,
    className: "bg-black",
    url: "/canvas_js/13",
    name: "DNA",
  },
  {
    children: <Canva11 hide={true} />,
    className: "bg-black",
    url: "/canvas_js/11",
    name: "Polar",
  },
  {
    children: <Canva10 hide={true} />,
    className: "bg-black",
    url: "/canvas_js/10",
    name: "雷达",
  },

  {
    children: <Canva09 hide={true} />,
    className: "bg-black",
    url: "/canvas_js/09",
    name: "Particle",
  },
  {
    children: <Canva08 hide={true} />,
    className: "bg-[#eee]",
    url: "/canvas_js/08",
    name: "Snake",
  },
  {
    children: <Canva06 hide={true} />,
    className: "bg-[#eee]",
    url: "/canvas_js/06",
    name: "Ball",
  },
  {
    children: <Canva05 />,
    className: "bg-[#eee]",
    url: "/canvas_js/05",
    name: "九宫图",
  },
  {
    children: <Canva04 />,
    className: "",
    url: "/canvas_js/04",
    name: "童年",
  },
  {
    children: <Canva02 />,
    className: "bg-blue-500",
    url: "/canvas_js/02",
    name: "My Cake",
  },
  {
    children: <Canva01 />,
    className: "",
    url: "/canvas_js/01",
    name: "Flex排版",
  },
];
