import React, { useState, useEffect } from 'react'
import dayjs from "dayjs";
import { getMonth } from "../data/calendarUtils";

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export default function SmallCalendar() {

    const [currentMonthIdx, setCurrentMonthIdx] = useState(
        dayjs().month()
    );
    const [currentMonth, setCurrentMonth] = useState(getMonth());

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIdx));
    }, [currentMonthIdx]);

    function handlePrevMonth() {
        setCurrentMonthIdx(currentMonthIdx - 1);
    }

    function handleNextMonth() {
        setCurrentMonthIdx(currentMonthIdx + 1);
    }

    return (
        <div className="mt-9">
            <header className="flex justify-between px-3">
                <p className="text-gray-500 font-bold">
                    {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
                </p>
                <div>
                    <button className='mr-2' onClick={handlePrevMonth}>
                        <FaArrowLeft />
                    </button>
                    <button onClick={handleNextMonth}>
                        <FaArrowRight />
                    </button>
                </div>
            </header>
            <div className="grid grid-cols-7 grid-rows-6">
                {currentMonth[0].map((day, i) => (
                    <span key={i} className="text-sm py-1 text-center">
                        {day.format("dd").charAt(0)}
                    </span>
                ))}
                {currentMonth.map((row, i) => (
                    <React.Fragment key={i}>
                        {row.map((day, idx) => (
                            <button
                                key={idx}
                                onClick={() => {}}
                                className={`py-1 w-full`}
                            >
                                <span className="text-sm">{day.format("D")}</span>
                            </button>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}