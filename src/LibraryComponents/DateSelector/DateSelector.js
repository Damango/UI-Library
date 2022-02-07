import React, { useState, useRef } from 'react';
import "./DateSelector.css"
const DateSelector = (props) => {


    let dateData = [{
        monthName: "January",
        year: 2022,
        days: Array.from({ length: 31 }, (_, index) => index + 1),
    }]

    const datePickerRef = useRef(null)

    const [datePicker, setDatePicker] = useState(false)



    function handleDatePickerAnimations() {
        if (datePicker) {
            datePickerRef.current.style.opacity = 0;
            datePickerRef.current.style.top = '225%'


            setTimeout(() => {
                datePickerRef.current.style.display = 'none'
                setDatePicker(false)
            }, 300)
        }
        else {
            setDatePicker(true)
            datePickerRef.current.style.display = 'inline-block';
            setTimeout(() => {
                datePickerRef.current.style.opacity = 1
                datePickerRef.current.style.top = '115%'
            }, 0)
        }
    }




    return (<div className='date-selector-container'>
        <div className='date-selector-wrapper'>
            <input placeholder='mm/dd/yyyy' />
            <i class="fas fa-calendar-alt" onClick={handleDatePickerAnimations}></i>
        </div>
        <div className="date-picker-container" ref={datePickerRef}>
            <div className="month-year-selector-container">
                <span className="month-wrapper">
                    {dateData[0].monthName} {dateData[0].year}
                </span>
                <span className="arrow-buttons-container">
                    <i class="fas fa-chevron-circle-right" style={{ transform: 'rotate(180deg)' }}></i>
                    <i class="fas fa-chevron-circle-right"></i>

                </span>

            </div>
            <div className="calendar-container">

                <div className="date-numbers-container">
                    <span className="day-of-week">S</span>
                    <span className="day-of-week">M</span>
                    <span className="day-of-week">T</span>
                    <span className="day-of-week">W</span>
                    <span className="day-of-week">T</span>
                    <span className="day-of-week">F</span>
                    <span className="day-of-week">S</span>
                    {dateData[0].days.map((date) => <span className="date-number">{date}</span>)}
                </div>
            </div>
        </div>
    </div >);
}

export default DateSelector;