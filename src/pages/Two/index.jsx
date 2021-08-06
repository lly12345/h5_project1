import React from 'react'
import './index.less'

import top from '@/assets/top.png'
import fontTitle from '@/assets/two/font-title.png'
import title from '@/assets/title.png'
import center1 from '@/assets/two/1.png'
import center2 from '@/assets/two/2.png'
import center3 from '@/assets/two/3.png'


import note from '@/assets/two/note.png'
import footLeft from '@/assets/foot-left.png'
import footRight from '@/assets/foot-right.png'
import footCenter from '@/assets/foot-center.png'


export default function Two(props) {
    const index = 2
    const current = props.currentIndex
    const show = (current == index)
    return (
        <div className={`${show ? "page-box__two" : 'show'}`}>
            <div className={`header animated ${show ? "slideInLeft slow" : ''}`}>
                <img src={top} alt="" />
            </div>
            <div className="title-box">
                <img className="title" src={title} alt="" />
            </div>
            <div className="topnav">
                <img className={`header animated ${show ? "slideInLeft" : ''}`} src={fontTitle} alt="" />
                
            </div>
            <div className="center">
                <img  className={`center1 animated ${show ? "flipInX slow" : ''}`} src={center1} alt="" />
                <img  className={`center2 animated ${show ? "flipInX slow" : ''}`} src={center2} alt="" />
                <img  className={`center3 animated ${show ? "flipInX slow" : ''}`} src={center3} alt="" />
                <img className={`note animated ${show ? "slideInRight" : ''}`} src={note} alt="" />
            </div>
            <div className="footer">
                <img className={`animated ${show ? "slideInLeft slow" :''}`} src={footLeft} alt="" />
                <img  src="" alt="" />
                <img className={`animated ${show ? "slideInRight slow" : ''}`} src={footRight} alt="" />
            </div>
        </div>
    )
}
