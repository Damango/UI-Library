import React, { useState, useRef } from "react";
import "./DateSelector.css";
const DateSelector = (props) => {
	let dateData = [
		{
			monthName: "January",
			monthNumber: 1,
			year: 2022,
			days: Array.from({ length: 31 }, (_, index) => index + 1),
		},
	];

	const [selectedDate, setSelectedDate] = useState({
		monthName: "January",
		monthNumber: 1,
		year: 2022,
		day: 21,
	});

	const datePickerRef = useRef(null);
	const inputRef = useRef(null);

	const [datePicker, setDatePicker] = useState();

	function handleDateInput(event) {
		let inputElement = inputRef.current;
		let correctedInput = " ";
		let currentInput = event.target.value;
		console.log(inputElement);
		let currentChar = currentInput.charAt(currentInput.length - 1);
		if (!isNaN(currentChar) || currentChar === "/") {
			inputElement.value = currentInput;

			// Checks if the length of the current is 3 so that a slash "/" can be put in order
			// to have the correct date format.
			if (currentInput.length === 3 && currentInput[2] !== "/") {
				let numberShift = currentInput[2];
				correctedInput = currentInput.slice(0, -1);
				correctedInput += "/" + numberShift;
				inputElement.value = correctedInput;
			}

			if (currentInput.length === 6 && currentInput[5] !== "/") {
				let numberShift = currentInput[5];
				correctedInput = currentInput.slice(0, -1);
				correctedInput += "/" + numberShift;
				inputElement.value = correctedInput;
			}

			if (currentInput.length === 11) {
				inputElement.value = currentInput.slice(0, -1);
			}
		} else {
			correctedInput = currentInput.slice(0, -1);
			inputElement.value = correctedInput;
		}

		console.log(currentInput.length);
	}

	function handleDatePickerAnimations() {
		if (datePicker) {
			datePickerRef.current.style.opacity = 0;
			datePickerRef.current.style.top = "225%";

			setTimeout(() => {
				datePickerRef.current.style.display = "none";
				setDatePicker(false);
			}, 300);
		} else {
			setDatePicker(true);
			datePickerRef.current.style.display = "inline-block";
			setTimeout(() => {
				datePickerRef.current.style.opacity = 1;
				datePickerRef.current.style.top = "115%";
			}, 0);
		}
	}

	function handleDateSelection(dateData, day) {
		let inputElement = inputRef.current;
		let newDate = {
			monthName: dateData.monthName,
			year: dateData.year,
			day: day,
		};

		let correctedMonth = dateData.monthNumber;
		let correctedDay = day;

		if (dateData.monthNumber < 10) {
			correctedMonth = dateData.monthNumber.toString();
			correctedMonth = correctedMonth.replace(
				correctedMonth,
				"0" + correctedMonth
			);
			console.log(correctedMonth);
		}

		if (day < 10) {
			correctedDay = day.toString();
			correctedDay = correctedDay.replace(correctedDay, "0" + correctedDay);
			console.log(correctedDay);
		}

		let dateString = correctedMonth + "/" + correctedDay + "/" + dateData.year;

		setSelectedDate(newDate);

		inputElement.value = dateString;

		console.log(dateString);
	}

	function renderDateCircleStyle(day, month, year) {
		if (
			selectedDate.monthName === month &&
			selectedDate.year === year &&
			selectedDate.day === day
		) {
			return { backgroundColor: "#4834d4", color: "white" };
		}
	}

	return (
		<div className="date-selector-container">
			<div className="date-selector-wrapper">
				<input
					className="date-selector-input"
					onChange={handleDateInput}
					ref={inputRef}
					placeholder="MM/DD/YYYY"
				/>
				<i class="fas fa-calendar-alt" onClick={handleDatePickerAnimations}></i>
			</div>
			<div className="date-picker-container" ref={datePickerRef}>
				<div className="month-year-selector-container">
					<span className="month-wrapper">
						{dateData[0].monthName} {dateData[0].year}
					</span>
					<span className="arrow-buttons-container">
						<i
							class="fas fa-chevron-circle-right"
							style={{ transform: "rotate(180deg)" }}
						></i>
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
						{dateData[0].days.map((date) => (
							<span
								className="date-number"
								style={renderDateCircleStyle(date, "January", dateData[0].year)}
								onClick={() => {
									handleDateSelection(dateData[0], date);
								}}
							>
								{date}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DateSelector;
