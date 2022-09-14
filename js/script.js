function myScope() {
    createWeekDays();
    let date = new Date();
    createCalendar(date);
    
    next.onclick = () => {
        let month = date.getMonth();
        month += 1;
        date.setMonth(month);
        createCalendar(date);
        eventDays(date);
    };

    previous.onclick = () => {
        let month = date.getMonth();
        month -= 1;
        date.setMonth(month);
        createCalendar(date);
        eventDays(date);
    };

    eventDays(date);
}

function eventDays(date) {
    for (let i=0; i <= dayDivList.length; i++) {
        dayDivList[i].addEventListener("click", function () {
            date.setDate(i);
            console.log(date);
        });
    }
}

function createCalendar(date) {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let monthString = date.toLocaleString('pt-br', {month:'long'});
    monthAndYear.innerHTML = (`${monthString.toUpperCase()} ${year}`);
    firstDay = getFirstDay(month, year);
    lastDay = getLastDay(month, year);
    createDayDivs(firstDay, lastDay, day, month, year);
    colorChange(month);
}

function colorChange(month) {
    colors = ['#c6d8f0', '#b2e2f2', '#b0f2c2', '#d8bfd8', '#add5fa', '#f4d5c0',
    '#ffb394', '#ffc2bb', '#fadc9b', '#ff8ad2', '#b0e0e6', '#ff9999'];
    document.body.style.setProperty('--defaultColors', colors[month]);
}

function createDayDivs(firstDay, lastDay, day, month, year) {
    days.innerHTML = '';
    currentDate = new Date();
    currentMonth = currentDate.getMonth();
    currentYear = currentDate.getFullYear();
    dayDivList = [];
    for (let i = 0; i < firstDay; i++) {
        let div = document.createElement("div");
        div.innerHTML = 'X';
        div.classList.add('noneDay');
        days.appendChild(div);
    }
    for (let i = 1; i <= (lastDay); i++) {
        let div = document.createElement("div");
        idName = 'day' + i;
        div.id = idName;
        div.innerHTML = i;
        if (i === day && currentMonth === month && currentYear === year) {
            div.classList.add('todayDay');
        } else {
            div.classList.add('day');
        }
        dayDivList.push(div);
        days.appendChild(div);
    }
}

function getLastDay(month, year) {
    const date = new Date(year, month + 1, 0);
    lastDay = date.getDate();
    return lastDay;
}

function getFirstDay(month, year) {
    let firstDay = new Date(year, month, 1);
    firstDay = firstDay.getDay();
    return firstDay;
}

function createWeekDays() {
    weekList = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

    for (let i = 0; i < weekList.length; i++) {
        div = document.createElement("div");
        div.classList.add('weekDay');
        div.innerHTML = weekList[i];
        weekDays.appendChild(div);
    }
}
myScope();