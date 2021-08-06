import React from 'react'
import './index.less'

import top from '@/assets/top.png'
 
import title from '@/assets/three/title.png'
import center1 from '@/assets/three/1.png'
import center2 from '@/assets/three/2.png'
 


import note from '@/assets/three/note.png'
import footLeft from '@/assets/foot-left.png'
import footRight from '@/assets/foot-right.png'
 


export default function Three(props) {
    const index = 3
    const current = props.currentIndex
    const show = (current == index)
    return (
        <div  className={`${show ? "page-box__three" : 'show'}`}>
            <div className={`header animated ${show ? "slideInLeft slow" : ''}`}>
                <img src={top} alt="" />
            </div>
            <div className={`${show ? "title-box" : ''}`}>
                <img className={`title  animated ${show ? "rubberBand delay-2s" : ''}`} src={title} alt="" />
            </div>
          
            <div className="center">
                <img className={`${show ? "center1" : ''}`} src={center1} alt="" />
                <img className={`${show ? "center2" : ''}`} src={center2} alt="" />
                
                <img className={`note animated ${show ? "slideInRight" : ''}`} src={note} alt="" />
            </div>
            <div className="footer">
                <img className={`animated ${show ? "slideInLeft slow" : ''}`} src={footLeft} alt="" />
                <img  src="" alt="" />
                <img className={`animated ${show ? "slideInRight slow" : ''}`} src={footRight} alt="" />
            </div>
        </div>
    )
}
