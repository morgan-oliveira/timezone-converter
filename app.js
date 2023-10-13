// using TimezoneDB API to fetch timezone data
const apiKey = 'XECF3GQGEOZA';
const apiUrl = `http://api.timezonedb.com/v2.1/list-time-zones?key=${apiKey}`

const dropdownMenu = document.getElementById('timezone-dropdown');

// fetching API to request json timezone data
fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        data.zones.forEach((zone) => {
            const option = document.createElement('option');
            option.value = zone.zoneName;
            dropdownMenu.appendChild(option);
        })
    })
    // catch error if request doesnt return 200
    .catch((error) => {
        console.error('Error fetching API data', error);
    }) 


dropdownMenu.addEventListener('change', () => {
    const selectedTimeZone = dropdownMenu.value;
    const currentTimeInTZ = moment.tz(selectedTimeZone).format('HH:mm:ss');
    document.getElementById('clock').innerText = currentTimeInTZ;
})

// ensuring js loads AFTER html    
document.addEventListener("DOMContentLoaded", function() {
// creating clock data

    const clockelement = document.getElementById("clock");

    // clock function that gets time values and updates web element with setInterval()
    function time() {
        const webclock = new Date();
        const hr = webclock.getHours();
        const min = webclock.getMinutes();
        const sec = webclock.getSeconds();

        // string manipulation to fit the clock theme

        const clockString = `${hr.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;

        // setting text to clock element
        clockelement.innerText = clockString;


    
}
    time();
    //update every second
    setInterval(time, 1000);

});


