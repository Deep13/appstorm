import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { FaRegHeart, FaWpexplorer } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
export default function Gallery() {
    const data = [{ "cat": 0, "title": "IvorianDish", "thumbnail": "https://d3o23lul7dx07b.cloudfront.net/app_e7cd9dd284ff2179.png" }, { "cat": 0, "title": "FoodGen", "thumbnail": "https://d3o23lul7dx07b.cloudfront.net/foodgen_c3561694.png" }, { "cat": 2, "title": "IndFoodGen", "thumbnail": "https://d3o23lul7dx07b.cloudfront.net/indfoodgen_24a227e6.png" }, { "cat": 1, "title": "FoodDesc", "thumbnail": "https://d3o23lul7dx07b.cloudfront.net/fooddesc_2282a007.png" }, { "cat": 2, "title": "LogoGen", "thumbnail": "https://d3o23lul7dx07b.cloudfront.net/logogen_9d404a8a.png" }, { "cat": 0, "title": "LogoGen", "thumbnail": "https://d3o23lul7dx07b.cloudfront.net/logogen_98dac520.png" }, { "cat": 1, "title": "WebImgGen", "thumbnail": "https://d3o23lul7dx07b.cloudfront.net/imggen_3c84d755.png" }, { "cat": 1, "title": "MythoPunkAI", "thumbnail": "https://d3o23lul7dx07b.cloudfront.net/mythopunkai_d88104a2.png" }, { "cat": 0, "title": "FixItBot", "thumbnail": "https://d3o23lul7dx07b.cloudfront.net/fixitbot_add8fe2e.png" }];

    const [filteredData, setfilteredData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();
    const menuItems = [{
        title: 'All',
        cat: 0
    }, {
        title: "Favourites",
        cat: 1
    }, {
        title: 'Shared',
        cat: 2
    }];
    const handleMenuItemClick = (index, item) => {
        setActiveIndex(index);
        var fData = data.filter(val => val.cat === item.cat);
        setfilteredData([...fData])
    };
    useEffect(() => {
        var fData = data.filter(val => val.cat === 0);
        setfilteredData([...fData]);
    }, [])
    return (
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', overflowY: 'auto', marginBottom: 40 }}>
            <div style={{ marginTop: 80, maxWidth: 1100, width: '100%', flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                <span style={{
                    color: 'white',
                    backgroundColor: '#0068ff',
                    padding: 10,
                    borderRadius: '50%',
                    marginRight: 10,
                }}>DK</span>
                <h1 style={{ flex: 1, color: 'black', textAlign: 'left', width: '100%' }}>Deepak Kumar Ram</h1>
            </div>
            <ul className="menu">
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        style={{ color: 'black', fontSize: 25, fontWeight: 600 }}
                        className={activeIndex === index ? 'active' : ''}
                        onClick={() => handleMenuItemClick(index, item)}
                    >
                        <div>
                            <span>{item.title}</span>
                            <div className='border-underline'></div>
                        </div>
                    </li>
                ))}
                <div className={`underline ${activeIndex !== null ? 'active' : ''}`} />
            </ul>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', maxWidth: 1100, flexWrap: 'wrap', gap: '1.9rem', width: '100%' }}>

                {
                    filteredData.map((val, index) => {
                        return <div >
                            <div className='zoom-container'>
                                <div className='image' onClick={() => {
                                    navigate("/gpt/" + val.title);
                                }} style={{ boxShadow: '0px -20px 20px 5px inset', backgroundImage: `url(${val.thumbnail})`, borderRadius: 20, cursor: 'pointer', display: 'flex' }}>
                                    {/* <div className="overlay">
                                        <div className="description" >
                                            <div>
                                                <div style={{ paddingBottom: 10 }}>hi df df d fd fd f dfd</div>
                                                <div style={{ display: "flex", justifyContent: 'space-between' }}>
                                                    <div style={{ color: 'white', display: 'flex', alignItems: 'center' }}><FaRegHeart color='white' /><span style={{ marginLeft: 10 }}>5</span></div>
                                                    <div style={{ color: 'white', display: 'flex', alignItems: 'center' }}><IoIosShareAlt color='white' /><span style={{ marginLeft: 10 }}>5</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                </div>
                            </div>
                            <div style={{ fontWeight: 600, marginLeft: 20, marginTop: 10 }}>{val.title}</div>
                        </div>
                    })
                }
            </div>

        </div>
    )
}
