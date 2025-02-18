import React from 'react'
import { MoveLeft, MoveRight } from "lucide-react";

function SwiperNavigations() {
    return (
        <>
            <div className="navigations has__flex has__gap">
                <span className="left navigation">
                    <MoveLeft />
                </span>
                <span className="right navigation">
                    <MoveRight />
                </span>
            </div>
            <div className="custom-pagination"></div>
        </>
    )
}

export default SwiperNavigations