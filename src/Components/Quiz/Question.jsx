import React, { useState } from 'react'
import { VscAdd } from "react-icons/vsc";
import { VscChromeMinimize } from "react-icons/vsc";

function Question({ title, info }) {
    const [showInfo, setShowInfo] = useState(false)
    return (
        <article className='question'>
            <header>
                <h4>{title}</h4>
                <button className='btn' onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <VscChromeMinimize /> : <VscAdd />}
                </button>
            </header>
            {showInfo && <p>{info}</p>}
        </article>
    )
}

export default Question