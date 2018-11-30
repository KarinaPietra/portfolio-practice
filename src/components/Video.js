import React from 'react';
import { Player } from 'video-react';


export default (props) => {
  return (
    <Player>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/NhqruSXhyuw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Player>
  );
};
