import React from 'react'
import './index.less'

import top from '@/assets/top.png'
import tip from '@/assets/tip.png'
import title from '@/assets/title.png'
import note from '@/assets/note.png'
import footLeft from '@/assets/foot-left.png'
import footRight from '@/assets/foot-right.png'
import footCenter from '@/assets/foot-center.png'


export default function One(props) {
    const index = 1
    const current = props.currentIndex
    const show = (current == index)
    return (
        <div className={`${show ? "page-box__one" : 'show'}`}>
            <div className={`header animated ${show ? "slideInLeft slow" : ''}`}>
                <img src={top} alt="" />
            </div>
            <div className="main">
                {/* <img className="tip" src={tip} alt="" /> */}
                <img  className={`${show ? "title" : ''}`} src={title} alt="" />
            </div>
            <div className="hot">
                <img className={`animated  ${show ? "bounceIn slow" : ''}`} src={note} alt="" />
            </div>
            <div className="footer">
                <img className={`animated ${show ? "slideInLeft slow" : ''}`} src={footLeft} alt="" />
                <img className={`animated ${show ? "bounceIn slower" : ''}}`} src={footCenter} alt="" />
                <img className={`animated ${show ? "slideInRight slow" : ''}`} src={footRight} alt="" />
            </div>
        </div>
    )
}
