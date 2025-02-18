"use client"
import React, { useState } from 'react';

export default function Newsletter() {
    const [formData, setFormData] = useState({
        Email: ""
    });

    const handleFieldChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({ Email: "" });
    };

    return (
        <section className="news_letter is__section">
            <div className="news_letter_wrapper has__flex flex__column items__center justify__center">
                <h2 className="is__heading has__margin">Have question? Feel Free To Ask</h2>
                <form onSubmit={handleFormSubmit} className="has__flex items__center justify__center has__gap">
                    <input
                        type="email"
                        name="Email"
                        className="feild"
                        value={formData.Email}
                        onChange={handleFieldChange}
                        placeholder="Email*"
                        required
                    />
                    <button className="button has__gap" type="submit">Subscribe</button>
                </form>
            </div>
        </section>
    );
}