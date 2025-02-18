"use client";
import { Rocket, Code, ShieldCheck, Search, Check, Lock } from "lucide-react";

const approachData = [
    {
        icon: <Rocket size={24} />,
        title: "UX Driven Engineering",
        description:
            "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
        icon: <Code size={24} />,
        title: "Developing Shared Understanding",
        description:
            "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
        icon: <Search size={24} />,
        title: "Proven Experience and Expertise",
        description:
            "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
        icon: <ShieldCheck size={24} />,
        title: "Security & Intellectual Property (IP)",
        description:
            "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
        icon: <Check size={24} />,
        title: "Code Reviews",
        description:
            "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
        icon: <Lock size={24} />,
        title: "Quality Assurance & Testing",
        description:
            "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
];

export default function DevelopmentApproach() {
    return (
        <section className="approach-section is__section">
            <div className="container">
                <div className="text__center has__margin">
                    <span className="border-accent"></span>
                </div>
                <h2 className="is__heading text__center">
                    Our design and Development <strong className="highlight">Approach</strong>
                </h2>
                <div className="approach-grid has__flex justify__center align__center has__gap">
                    {approachData.map((item, index) => (
                        <div key={index} className="approach-card has__flex flex__column items__center has__gap">
                            <div className="icon-box has__flex justify__center items__center">{item.icon}</div>
                            <div className="info">
                                <h3 className="has__margin">{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
