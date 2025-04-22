const month = document.querySelector('.month');
const year = document.querySelector('.calendar-year');
const days = document.querySelector('.calendar-days');
const date = document.querySelector('.calendar-date');

function getCurrentDate() {
    const today = new Date();
    
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    month.innerHTML = monthNames[today.getMonth()];
    year.innerHTML = today.getFullYear();
    days.innerHTML = dayNames[today.getDay()];
    date.innerHTML = today.getDate();
}

getCurrentDate();
