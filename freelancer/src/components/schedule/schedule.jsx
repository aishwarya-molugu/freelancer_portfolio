import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './schedule.css';

const Schedule = () => {
    const [date, setDate] = useState(new Date());
    const [slots, setSlots] = useState([
        { time: '09:00 AM', available: true },
        { time: '10:00 AM', available: false },
        { time: '11:00 AM', available: true },
        // Add more slots as needed
    ]);

    const handleDateChange = (newDate) => {
        setDate(newDate);
        // Update slots based on selected date
    };

    const bookSlot = (slotTime) => {
        setSlots(slots.map(slot => 
            slot.time === slotTime ? { ...slot, available: false } : slot
        ));
        // Implement booking logic
    };

    return (
        <div className="schedule">
            <h1 className="section__title">Book a Session</h1>
            <Calendar 
                onChange={handleDateChange} 
                value={date} 
                className="calendar"
            />
            <div className="slots">
                {slots.map(slot => (
                    <button 
                        key={slot.time} 
                        className={`slot ${slot.available ? 'available' : 'unavailable'}`}
                        onClick={() => slot.available && bookSlot(slot.time)}
                        disabled={!slot.available}
                    >
                        {slot.time}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Schedule;
