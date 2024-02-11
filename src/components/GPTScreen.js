import React, { useState, useRef, useEffect } from 'react'
import GPTS from './comps/GPTS'
import MiniSidebar from './MiniSidebar'
import { useNavigate, useParams } from "react-router-dom";

export default function GPTScreen() {
    const [currentSelection, setcurrentSelection] = useState('create');
    const { id } = useParams();
    const scrollableDivRef = useRef(null);

    useEffect(() => {
        console.log(id)
    }, [])

    return (
        <div style={{ display: 'flex', height: '100%', background: '#ff' }}>
            <MiniSidebar selected={(selection) => setcurrentSelection(selection)} />
            <div style={{ flex: 1, display: 'flex' }}>
                <GPTS />
            </div>
            {/* <div style={{ flex: 1, overflowY: 'auto' }} ref={scrollableDivRef}>
                <div style={{ display: 'flex', flex: 1, height: '100%', justifyContent: 'center' }}>
                    <GPTS onScroll={scrollToBottom} />
                </div>
            </div> */}
        </div>
    )
}
