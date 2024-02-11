import React from 'react'
import logoImage from '../assets/favicon-appstorm.png';
import { FaPlusCircle, FaWpexplorer } from "react-icons/fa";
import { BiSolidCollection } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";

export default function MiniSidebar({ selected }) {
    const navigate = useNavigate();

    const onselect = (event, selection) => {
        // selected(selection);
        // if (document.getElementsByClassName('higlight-selection').length > 0) {
        //     document.getElementsByClassName('higlight-selection')[0].classList.remove('higlight-selection')
        // }

        // event.target.parentElement.classList.add('higlight-selection')

    }
    return (
        <div style={{ padding: '20px 10px', backgroundColor: '#202123', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 80 }} >
            <img alt="app logo" src={logoImage} style={{ maxWidth: 35, padding: '0px 20px', marginBottom: 20 }} />
            <hr style={{ border: '1px solid #4d4d4f9e', marginBottom: 30, width: '100%' }} />
            <div onClick={() => navigate('/')} className={selected == 'create' ? 'higlight-selection' : ''} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', height: 50,
                width: 90, padding: 10
            }} >
                <FaPlusCircle color='#a3a3a8' size={20} style={{ marginBottom: 5 }} />
                <span style={{ color: '#fff', fontSize: 15 }}>Create</span>
            </div>
            <div onClick={() => navigate('/Explore')} className={selected == 'explore' ? 'higlight-selection' : ''} style={{
                marginTop: 30, display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', height: 50,
                width: 90, padding: 10
            }} >
                <FaWpexplorer color='#a3a3a8' size={20} style={{ marginBottom: 5, }} />
                <span style={{ color: '#fff', fontSize: 15 }} >Explore</span>
            </div>
            <div onClick={() => navigate('/MyApps')} className={selected == 'myapps' ? 'higlight-selection' : ''} style={{
                marginTop: 30, display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', height: 50,
                width: 90, padding: 10
            }} >
                <BiSolidCollection color='#a3a3a8' size={20} style={{ marginBottom: 5 }} />
                <span style={{ color: '#fff', fontSize: 15 }} >My Apps</span>
            </div>
        </ div >
    )
}
