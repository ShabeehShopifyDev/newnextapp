import React from 'react'

function Richtext({ heading = "I am rech text section", text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea beatae nemo distin", buttonone = "Click me", buttontwo="Click me" }) {
    return (
        <section className="rich_text is__section">
            <div className="section_wrapper container has__flex flex__column text__center has__gap">
                <h2 className="heading has__margin ">
                    {heading}
                </h2>
                <p className="text">{text}</p>
                <div className="btn__wrapper has__flex justify__center has__gap">
                    <button className="button">
                        {buttonone}
                    </button>
                    {buttontwo != "" && <button className="button_sec">
                        {buttontwo}
                    </button>}
                </div>
            </div>
        </section>
    )
}
export default Richtext