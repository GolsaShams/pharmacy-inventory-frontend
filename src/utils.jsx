export function formatDateWithTimezone(date, timeZone) {
    const options = {
        weekday: 'long', // Full name of the day (e.g., Monday)
        day: 'numeric',  // Day of the month (e.g., 2)
        month: 'short',  // Abbreviated month name (e.g., Mar)
        year: 'numeric', // Full year (e.g., 2025)
        timeZone: timeZone, // Specify the timezone
    };

    // Use Intl.DateTimeFormat to format the date
    const formatter = new Intl.DateTimeFormat('en-US', options);
    return formatter.format(date);
}

