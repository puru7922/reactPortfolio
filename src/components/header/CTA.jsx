import React from 'react'
import Resume from '../../assets/Purushottam_Kumar_Resume.pdf'

const CTA = () => {
    return (
        <div className="cta">
            <a href={Resume} download>Resume</a>
            <a href="#contact">Let's Talk</a>
        </div>
    )
}

export default CTA
