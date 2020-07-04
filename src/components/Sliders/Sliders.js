import React from "react";
import {
  UncontrolledCarousel
} from "reactstrap";
const items = [
  {
    src: 'https://www.cinema5d.com/wp-content/uploads/2019/09/iphone-11-final.jpg',
    altText: 'IPHONE 11 PRO',
    caption: 'APPLE',
    header: 'IPHONE 11 PRO',
    key: '1',
    width:'100%'
  },
  {
    src: 'https://mediatrend.mediamarkt.com.tr/wp-content/uploads/2019/10/iphone-11-inceleme.jpg',
    altText: 'IPHONE 11',
    caption: 'APPLE',
    header: 'IPHONE 11',
    key: '2',
    width:'100%'
  },
  {
    src: 'https://www.lifehacker.com.au/content/uploads/sites/4/2020/04/Iphonese.jpg',
    altText: 'IPHONE SE',
    caption: 'APPLE',
    header: 'IPHONE SE',
    key: '3',
    width:'100%'
  }
];

const Sliders = () => <UncontrolledCarousel items={items} />;

export default Sliders;
