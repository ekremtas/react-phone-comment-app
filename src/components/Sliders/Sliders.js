import React from "react";
import {
  UncontrolledCarousel
} from "reactstrap";
const items = [
  {
    src: 'https://images.unsplash.com/photo-1570976278927-39de20093775?ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&h=720&q=80',
    altText: 'IPHONE 11 PRO',
    caption: 'APPLE',
    header: 'IPHONE 11 PRO',
    key: '1',
    width:'100%'
  },
  {
    src: 'https://images.unsplash.com/photo-1574675904801-eb2cca16af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&h=720&q=80',
    altText: 'IPHONE 11 SERIES',
    caption: 'APPLE',
    header: 'IPHONE 11 SERIES',
    key: '2',
    width:'100%'
  },
  {
    src: 'https://images.unsplash.com/photo-1588295207965-dded25c206c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&h=720&q=80',
    altText: 'IPHONE SE',
    caption: 'APPLE',
    header: 'IPHONE SE',
    key: '3',
    width:'100%'
  }
];

const Sliders = () => <UncontrolledCarousel items={items} />;

export default Sliders;
