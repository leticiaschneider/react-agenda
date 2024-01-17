import React, { useState, useEffect } from 'react'
import dayjs from "dayjs";
import { getMonth } from "../data/calendarUtils";

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import ButtonGroup from './ButtonGroup';

export default function Agenda() {
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
        <div>
            <header className="flex justify-between px-3">
                <div className='flex justify-between px-3'>
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
                </div>

                <div>
<ButtonGroup />
                </div>
            </header>

        </div>
    )
}