import { CircleCheck } from 'lucide-react';
import React from 'react';

function PricingTable({tables,heading}) {

    return (
        <section className="pricing-table is__section">
            <h2 className="section_heading text__center has__margin">{ heading }</h2>
            <div className="tables_wrapper has__flex has__gap container">
                {tables.map((table) => (
                    <div className="table" key={table.name}>
                        <div className="header text__center" style={{ backgroundColor: table.color }}>
                            <h3 className="is__heading">{table.name}</h3>
                            <p className="subheading">{table.subheading}</p>
                        </div>
                        <div className="main">
                            <div className="price_service has__flex flex__column items__center">
                                <h2 className="price"> <span>$</span> {table.price}</h2>
                                <p className="service_overview">
                                    {table.serviceOverview}
                                </p>
                            </div>
                            <div className="list">
                                <ul>
                                    {table.serviceDetails.map((detail, i) => (
                                        <div className="item_wrapper has__flex items__center has__gap">
                                            <CircleCheck />
                                            <div className="item">
                                                <li key={i}>{detail}</li>
                                                <hr />
                                            </div>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                            <div className="btn_wrapper has__flex justify__center">
                                <a className="button" href="https://wa.link/morbt7">Contact us on WhatsApp</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PricingTable;