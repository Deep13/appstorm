import React, { useState } from 'react'
import Explore from './comps/Explore'
import MiniSidebar from './MiniSidebar'

export default function ExploreScreen() {

    return (
        <div style={{ display: 'flex', height: '100%', background: '#ff' }}>
            {/* <Sidebar onSelect={triggerSelect} /> */}
            <MiniSidebar selected='explore' />
            <div style={{ flex: 1, overflowY: 'auto' }}>
                <Explore />

            </div>
        </div>
    )
}
