import "../../App.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { myevents, myresources } from "./Event";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { useState, useEffect } from "react";

const locales = {
  "en-US": require("date-fns"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const EventCalendar = () => {
  const [onSelect, setOnSelect] = useState();
  const handleSelectedEvent = (event) => {
    setOnSelect(event)
  };

  return (
    <div>
      <Calendar
        className="calendars"
        onSelectEvent={(event) => handleSelectedEvent(event.title)}
        events={myevents}
        resources={myresources}
        localizer={localizer}
        defaultDate={new Date(2023, 1, 8)}
        style={{ height: 700 }}
      />
      {onSelect}
    </div>
  );
};

export default EventCalendar;
