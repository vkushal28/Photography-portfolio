import React, { Component } from "react";
import streetB64 from "./categoriesImages/street";
import portraitB64 from "./categoriesImages/portrait";
import travelB64 from "./categoriesImages/travel";
import moonB64 from "./categoriesImages/moon";
import compositionB64 from "./categoriesImages/composition";
import birdsB64 from "./categoriesImages/birds";
import geometryB64 from "./categoriesImages/geometry";
import manipulationB64 from "./categoriesImages/manipulation";
import landscapeB64 from "./categoriesImages/landscape";
import architectureB64 from "./categoriesImages/architecture";

export const allCategories = [
  {
    type: "STREET",
    thumbSrc: "",
    qty: "",
    photos: [
      {
        src: "/images/streets/1.jpg",
        thumbnail: "/images/streets/1.jpg",
        caption: "STREET1",
      },
      {
        src: "/images/streets/2.jpg",
        thumbnail: "/images/streets/2.jpg",
        caption: "STREET2",
      },
      {
        src: "/images/streets/3.jpg",
        thumbnail: "/images/streets/3.jpg",
        caption: "STREET3",
      },
      {
        src: "/images/streets/4.jpg",
        thumbnail: "/images/streets/4.jpg",
        caption: "STREET4",
      },
      {
        src: "/images/streets/5.jpg",
        thumbnail: "/images/streets/5.jpg",
        caption: "STREET5",
      },
      {
        src: "/images/streets/6.jpg",
        thumbnail: "/images/streets/6.jpg",
        caption: "STREET6",
      },
      {
        src: "/images/streets/7.jpg",
        thumbnail: "/images/streets/7.jpg",
        caption: "STREET7",
      },
      {
        src: "/images/streets/8.jpg",
        thumbnail: "/images/streets/8.jpg",
        caption: "STREET8",
      },
      {
        src: "/images/streets/9.jpg",
        thumbnail: "/images/streets/9.jpg",
        caption: "STREET9",
      },
      {
        src: "/images/streets/10.jpg",
        thumbnail: "/images/streets/10.jpg",
        caption: "STREET10",
      },
    ],
  },
  {
    type: "PORTRAIT",
    thumbSrc: "",
    qty: "",
    photos: [
      { src: "/images/<folder_name>/<file1>", description: "PORTRAIT1" },
      { src: "/images/<folder_name>/<file2>", description: "PORTRAIT2" },
      { src: "/images/<folder_name>/<file3>", description: "PORTRAIT3" },
    ],
  },
  {
    type: "TRAVEL",
    thumbSrc: "",
    qty: "",
    photos: [
      { src: "/images/<folder_name>/<file1>", description: "TRAVEL1" },
      { src: "/images/<folder_name>/<file2>", description: "TRAVEL2" },
      { src: "/images/<folder_name>/<file3>", description: "TRAVEL3" },
    ],
  },
  {
    type: "MOON",
    thumbSrc: "",
    qty: "",
    photos: [
      { src: "/images/<folder_name>/<file1>", description: "MOON1" },
      { src: "/images/<folder_name>/<file2>", description: "MOON2" },
      { src: "/images/<folder_name>/<file3>", description: "MOON3" },
    ],
  },
  {
    type: "COMPOSITION",
    thumbSrc: "",
    qty: "",
    photos: [
      { src: "/images/<folder_name>/<file1>", description: "COMPOSITION1" },
      { src: "/images/<folder_name>/<file2>", description: "COMPOSITION2" },
      { src: "/images/<folder_name>/<file3>", description: "COMPOSITION3" },
    ],
  },
  {
    type: "BIRDS",
    thumbSrc: "",
    qty: "",
    photos: [
      { src: "/images/<folder_name>/<file1>", description: "BIRDS1" },
      { src: "/images/<folder_name>/<file2>", description: "BIRDS2" },
      { src: "/images/<folder_name>/<file3>", description: "BIRDS3" },
      { src: "/images/<folder_name>/<file4>", description: "BIRDS4" },
    ],
  },
  {
    type: "GEOMETRY",
    thumbSrc: "",
    qty: "",
    photos: [
      { src: "/images/<folder_name>/<file1>", description: "GEOMETRY1" },
      { src: "/images/<folder_name>/<file2>", description: "GEOMETRY2" },
      { src: "/images/<folder_name>/<file3>", description: "GEOMETRY3" },
      { src: "/images/<folder_name>/<file4>", description: "GEOMETRY4" },
    ],
  },
  {
    type: "MANIPULATION",
    thumbSrc: "",
    qty: "",
    photos: [
      { src: "/images/<folder_name>/<file1>", description: "MANIPULATION1" },
      { src: "/images/<folder_name>/<file2>", description: "MANIPULATION2" },
      { src: "/images/<folder_name>/<file3>", description: "MANIPULATION3" },
      { src: "/images/<folder_name>/<file4>", description: "MANIPULATION4" },
    ],
  },
  {
    type: "LANDSCAPE",
    thumbSrc: "",
    qty: "",
    photos: [
      { src: "/images/<folder_name>/<file1>", description: "LANDSCAPE1" },
      { src: "/images/<folder_name>/<file2>", description: "LANDSCAPE2" },
      { src: "/images/<folder_name>/<file3>", description: "LANDSCAPE3" },
      { src: "/images/<folder_name>/<file4>", description: "LANDSCAPE4" },
    ],
  },
  {
    type: "ARCHITECTURE",
    thumbSrc: "",
    qty: "",
    photos: [
      { src: "/images/<folder_name>/<file1>", description: "ARCHITECTURE1" },
      { src: "/images/<folder_name>/<file2>", description: "ARCHITECTURE2" },
      { src: "/images/<folder_name>/<file3>", description: "ARCHITECTURE3" },
      { src: "/images/<folder_name>/<file4>", description: "ARCHITECTURE4" },
    ],
  },
];

class allCategoriesControl extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div></div>;
  }
}

export default allCategoriesControl;
