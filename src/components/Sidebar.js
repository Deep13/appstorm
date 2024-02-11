import React, { useEffect, useState, memo, useRef } from "react";
// import { Switch } from "@headlessui/react";

const Sidebar = ({ onSelect }) => {
    const apps = ["FixItBot",

        "MythoCyberSketch",

        "DataSummaBot",

        "MythoPunkAI",

        "UI Gen",

        "WebImgGen",

        "LogoGen",

        "LogoGen",

        "Maggi Ad",

        "FoodDesc",

        "IndFoodGen",

        "FoodGen",
        "WebImgGen",

        "LogoGen",

        "LogoGen",

        "Maggi Ad",

        "FoodDesc",

        "IndFoodGen",

        "FoodGen",
        "WebImgGen",

        "LogoGen",

        "LogoGen",

        "Maggi Ad",

        "FoodDesc",

        "IndFoodGen",

        "FoodGen",

        "IvorianDish"];


    return (
        <div style={{ maxWidth: 350, flex: 1, background: '#202123', display: 'flex', flexDirection: 'column', padding: 20, margin: 20, borderRadius: 25, boxShadow: '8px 7px 20px 0px #000000c2' }}>
            <div>
                <div style={{
                    border: '1px solid #4d4d4f',
                    padding: 5,
                    borderRadius: 5,
                    display: 'flex'
                }}>
                    <input
                        className="outline-none"
                        type="text"
                        placeholder="search"
                        style={{
                            background: 'transparent',
                            border: 0,
                            fontSize: 15,
                            color: 'white',
                            width: '100%'
                        }}
                    />
                </div>
            </div>
            <div style={{ flex: 1, overflowY: 'auto', marginTop: 10 }}>
                {
                    apps.map((val, index) => {
                        return <div key={index} onClick={() => onSelect(val)} className="appList">
                            {val}
                        </div>
                    })
                }
            </div>
            <hr style={{ border: '1px solid #4D4D4F', marginBottom: 10, width: '100%' }} />
            <div>
                <div className="appList">
                    Deepak Ram
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
