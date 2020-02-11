import "aframe";
import "aframe-extras";
//import "super-hands";
import React from 'react';

class ControlPannel extends React.Component
{


    render()
    {   return(
           <a-scene>
           
           <a-plane position="3 1 -1" rotation="0 -45 0" width="4" height="4" color="yellow"></a-plane>
           <a-box></a-box>
           <a-plane position="0 0 -0.5" rotation="0 0 0" width="4" height="4" color="red"></a-plane>
           <a-plane position="-6 2 -1" rotation="0 45 0" width="4" height="4" color="blue"></a-plane>
           </a-scene>
    )


    }

}

export default ControlPannel;