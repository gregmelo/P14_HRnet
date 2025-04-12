// src/components/DatePicker.jsx
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Style par défaut
import './CustomDatePicker.scss'; // Style personnalisé
import { FaCalendarAlt } from 'react-icons/fa';

/**
 * Custom DatePicker component
 * @param {Object} props
 * @param {string} props.id - ID of the input
 * @param {string} props.label - Label for the date picker
 * @param {Date|string} props.value - Selected date value
 * @param {Function} props.onChange - Function to handle date change
 * @param {string} props.type - Type of date picker ('birth' or 'start')
 * @returns {JSX.Element}
 */
const DatePicker = ({ id, label, value, onChange, type }) => {
  const today = new Date();
  const currentYear = today.getFullYear();

  // Limites pour Date of Birth : 70 ans à 16 ans avant aujourd'hui
  const minBirthDate = new Date(currentYear - 70, 0, 1); // 1er janv 1955
  const maxBirthDate = new Date(currentYear - 16, 11, 31); // 31 déc 2009

  // Limites pour Start Date : 1971 (16 ans après 1955) à aujourd'hui
  const minStartDate = new Date(currentYear - 70 + 16, 0, 1); // 1er janv 1971
  const maxStartDate = today;

  return (
<div className="datepicker-group">
      <label htmlFor={id}>{label}</label>
      <div className="datepicker-wrapper">
        <ReactDatePicker
          id={id}
          selected={value ? new Date(value) : null}
          onChange={(date) => onChange({ target: { id, value: date ? date.toISOString().split('T')[0] : '' } })}
          dateFormat="yyyy-MM-dd"
          minDate={type === 'birth' ? minBirthDate : minStartDate}
          maxDate={type === 'birth' ? maxBirthDate : maxStartDate}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          placeholderText="Select a date"
          className="custom-datepicker"
          popperClassName="custom-datepicker-popper"
          calendarIcon={<FaCalendarAlt />} // Icône personnalisée (optionnel, ici pour référence)
        />
        <FaCalendarAlt className="calendar-icon" />
      </div>
    </div>
  );
};

export default DatePicker;