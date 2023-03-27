import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>My Skillset</h5>
            <h2>Experience</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Software Engineer</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                            <h4>Woovly India Private Limited</h4>
                            <small className='text-light'>Created React JS reusable and responsive components for Social E-Commerce Website. </small>
                            <small className='text-light'>Designed custom UI Elements such as button, container, layout for great UX. </small>
                            <small className='text-light'>Made Play Store crawler to fetch all the reviews and display on the CMS Dashboard. </small>
                            <small className='text-light'>Integrated Backend APIs to React JS or any 3rd party React JS Module. </small>
                            <small className='text-light'>Generated different Robot.tsx at run-time for production and alpha build for SEO. </small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience_frontend">
                    <h3>Frontend Developer Intern</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                            <h4>Toothsi</h4>
                            <small className='text-light'>Learned programming languages like HTML, CSS, JavaScript and designed interactive and user friendly web pages. </small>
                            <small className='text-light'>Made the Home Page according to the design with pixel to pixel accuracy. </small>
                            <small className='text-light'>Made forms for users in websites for booking scans. </small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
