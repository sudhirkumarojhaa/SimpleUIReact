import React, { Component } from 'react';
import './App.css';

const red = [
{
  url:"http://wisebread.killeracesmedia.netdna-cdn.com/files/fruganomics/imagecache/605x340/blog-images/iStock_000070546755_Small_0.jpg"
},
{
  url: "http://www.searchingurgaon.com/uploads/news-pictures/749-noida-blog-post-image-20150910223834.jpg"
},
{
  url: "https://2.bp.blogspot.com/-J9b5D49vBdw/UqFfLgbUQII/AAAAAAAAFso/fCfThAuRlHU/s1600/Chang+La,+Ladakh.jpg"
  },
{
  url: "https://www.nativeplanet.com/img/2016/04/28-1461844690-alleppey.jpg"
}, {
  url: "https://image3.mouthshut.com/images/imagesp/925003680s.jpg"
}, {
  url: "http://www.indianjourney.com/northindia-destination/gifs/North-India.jpg"
},
];

export default class Gallery extends Component {

  render() {
   const p = red.map(renderImg=>
    <div className="thumbnail">
      <img src={renderImg.url} className="img" alt="red"/>
    </div>
   )
         return (
           <div className="gallery inline">
            {p}
           </div>
        );
    }
}


