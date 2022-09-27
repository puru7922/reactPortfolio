import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {
    return (
        <Header>
            <div className=".container header_container">
                <h5>Hello I'm</h5>
                <h1>Purushotam Kumar</h1>
                <h5>Full Stack Developer</h5>
                <CTA /> 
            </div>
        </Header>
    )
}

export default Header
