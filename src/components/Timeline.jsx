'use client';
import Image from 'next/image';

const TimelineSection = () => {
    return (
        <section className="timeline__section is__section text__center">
            <div className="text__center has__margin">
                <span className="border-accent"></span>
            </div>
            <h2 className="is__heading">How development go through <strong className='highlight'>Tech Integrations</strong></h2>

            <div className="timeline__wrapper container">
                <div className="timeline__row row__1 has__flex justify__center">
                    <div className="timeline__card">
                        <h3><span className="highlight">#1 </span> Assemble the right team</h3>
                        <p>We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.</p>
                    </div>
                    <div className="timeline__card">
                        <h3><span className="highlight">#3 </span> Tech architecture</h3>
                        <p>We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.</p>
                    </div>
                    <div className="timeline__card">
                        <h3><span className="highlight">#5 </span> Code reviews</h3>
                        <p>Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.</p>
                    </div>
                </div>

                <div className="timeline__line has__flex">
                    <div className="image_wrapper">
                        <Image src="/aproachline.png" alt="graph line" width={1200} height={100} /> 
                    </div>
                </div>
                <div className="timeline__row row__2 has__flex justify__center">
                    <div className="timeline__card">
                        <h3><span className="highlight">#2 </span> Sprint planning</h3>
                        <p>Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.</p>
                    </div>
                    <div className="timeline__card">
                        <h3><span className="highlight">#4 </span> Standups & weekly demos</h3>
                        <p>Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.</p>
                    </div>
                    <div className="timeline__card">
                        <h3><span className="highlight">#6 </span> Iterative delivery</h3>
                        <p>We divide the implementation process into several checkpoints rather than a single deadline.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;