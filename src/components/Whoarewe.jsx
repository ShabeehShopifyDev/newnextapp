import React from 'react';
import Image from 'next/image';

export default function Whoarewe() {
    return (
        <section className='about_section-main is__section'>
            <div className="about_section container has__flex has__gap">
                <div className="content has__flex flex__column justify__center">
                    <div className="title">
                        <h4 className="subheading has__margin">WHO ARE WE</h4>
                        <h2 className="has__margin text__thin is__heading">
                            We Specialize in Delivering Tailored <strong className="highlight">Software</strong> Solutions to <strong className="highlight">Meet Your Needs</strong>.
                        </h2>
                    </div>
                    <div className="has__flex has__gap">
                        <div className="overview_box hover__border-green">
                            <h2 className="title has__margin has__flex items__center has__gap">
                                <span className='border-accent'></span> Overview
                            </h2>
                            <p className='overview_data'>
                                With over 15 years of experience, we excel in crafting innovative and efficient software solutions. Our expertise spans various industries, ensuring seamless integration and optimal performance for every client.
                            </p>
                        </div>
                        <div className="details has__flex flex__column has__gap justify__between">
                            <div className="border-left hover__border-green">
                                <h3>15+ Years Experience</h3>
                                <div className="content">Trusted expertise in software development.</div>
                            </div>
                            <div className="border-left border-green">
                                <h3>Custom Solutions</h3>
                                <div className="content">Tailored to address your specific business challenges.</div>
                            </div>
                            <div className="border-left hover__border-green">
                                <h3>Proven Results</h3>
                                <div className="content">Delivering impactful and scalable software innovations.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image-wrapper">
                    <Image src="/office.jpg" alt='office image' width={1000} height={1000}/>
                </div>
            </div>
        </section>
    );
}
