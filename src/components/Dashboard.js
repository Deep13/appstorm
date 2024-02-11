import React, { useState, useRef, useEffect } from 'react'
import MiniSidebar from './MiniSidebar'
import Create from './comps/Create'
import Gallery from './comps/Gallery'
import GPTS from './comps/GPTS'
import Explore from './comps/Explore'



export default function Dashboard() {


    const [currentSelection, setcurrentSelection] = useState('create');
    const [data, setdata] = useState([{ "title": "IvorianDish", "thumbnail": "https://d3o23lul7dx07b.cloudfront.net/app_e7cd9dd284ff2179.png" }, { "title": "FoodGen", "thumbnail": "https://d3o23lul7dx07b.cloudfront.net/foodgen_c3561694.png" }, { "title": "IndFoodGen", "thumbnail": "https://d3o23lul7dx07b.cloudfront.net/indfoodgen_24a227e6.png" }, { "title": "FoodDesc", "thumbnail": "https://d3o23lul7dx07b.cloudfront.net/fooddesc_2282a007.png" }, { "title": "LogoGen", "thumbnail": "https://d3o23lul7dx07b.cloudfront.net/logogen_9d404a8a.png" }, { "title": "LogoGen", "thumbnail": "https://d3o23lul7dx07b.cloudfront.net/logogen_98dac520.png" }, { "title": "WebImgGen", "thumbnail": "https://d3o23lul7dx07b.cloudfront.net/imggen_3c84d755.png" }, { "title": "MythoPunkAI", "thumbnail": "https://d3o23lul7dx07b.cloudfront.net/mythopunkai_d88104a2.png" }, { "title": "FixItBot", "thumbnail": "https://d3o23lul7dx07b.cloudfront.net/fixitbot_add8fe2e.png" }]);




    return (
        <div style={{ display: 'flex', height: '100%', background: '#ff' }}>
            {/* <Sidebar onSelect={triggerSelect} /> */}
            <MiniSidebar selected='create' />
            <div style={{ flex: 1, overflowY: 'auto' }}>
                <div style={{ display: 'flex', flex: 1, height: '100%' }}><Create /></div>
                {/* {currentSelection == 'create' ? <div style={{ display: 'flex', flex: 1, height: '100%' }}><Create /></div> : currentSelection == 'explore' ?
                    <Explore data={data} /> : <Gallery data={data} />} */}

            </div>
        </div>
    )
}
