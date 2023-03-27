import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className=".container header_container">
                <h5>Hello I'm</h5>
                <h1>Purushottam Kumar</h1>
                <h5>Full Stack Developer</h5>
                <CTA />
                <HeaderSocial />
                <div className = "me">
                    <img src={ME} alt= "me" className="img_grad" />
                </div>
                <a href="#contact" className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header
