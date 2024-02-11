import React, { useState, useEffect } from 'react'
import logoImage from '../assets/appLogo_thumb (1).png';
import Typed from 'react-typed';
import { RiSendPlane2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { FaAnglesDown } from "react-icons/fa6";
export default function Home() {
    let navigate = useNavigate();

    const [searchText, setsearchText] = useState('')
    const tags = ['videos', 'audio', 'design', 'create', 'innovate', 'videos', 'audio', 'design', 'create', 'innovate'];
    const insert = val => {
        console.log(val);
        setsearchText(searchText + val)
    }
    const calculateHeight = () => {
        // You can adjust the height calculation logic as per your requirements
        const defaultHeight = 20; // Default height in pixels
        const lineHeight = 1.5; // Line height factor
        const lines = Math.ceil(searchText.length / 20); // Number of characters per line
        return `${defaultHeight + lines * lineHeight}px`;
    };
    return (
        <div style={{ backgroundColor: '#f6f6f6', paddingBottom: 30 }}>
            <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <img alt="app logo" src={logoImage} style={{ maxWidth: 400, marginBottom: 10 }} />
                    <Typed
                        strings={[
                            'App to create something new',
                            'App to design',
                            'App to innovate']}
                        typeSpeed={40}
                        backSpeed={50}
                        attr="placeholder"
                        loop >
                        <input
                            style={{ fontSize: 30, padding: '10px 20px', borderRadius: 20, borderWidth: 1, marginTop: 20, minWidth: 500, borderColor: '#0000005e', height: calculateHeight }}
                            type="text"
                            value={searchText}
                            onChange={(e) => setsearchText(e.target.value)}
                            onKeyUp={(e) => {
                                e.preventDefault();
                                if (e.key === "Enter") {
                                    navigate("/Dashboard")
                                }
                            }}
                        />

                    </Typed>
                    <div style={{ marginTop: 20 }}>The app would include:</div>
                    <div style={{ display: 'flex', gap: 10, marginTop: 20, maxWidth: 500, flexWrap: 'wrap', justifyContent: 'center' }}>

                        {
                            tags.map((val, index) => {
                                return <button onClick={() => insert(val)} style={{ color: 'black', padding: '5px 15px', borderRadius: 5, border: '1px solid black', background: 'white', cursor: 'pointer' }}>{val}</button>

                            })
                        }
                    </div>
                </div>
                <div style={{ position: 'absolute', bottom: 40, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>Scroll to take your pick<FaAnglesDown size={30} /></div>
            </div>
            <div className='gallery-container'>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1, 1].map((value, index) => {
                        return <div className='gallery-box'>

                        </div>
                    })
                }
            </div>
        </div>
    )
}
