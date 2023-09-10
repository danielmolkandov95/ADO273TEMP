export class Calendar {
    daysTraded;
    newCalendarTableRow;
    calendarTableIconDiv;
    calendarTableIcon;
    calendarTableDayNumber;
    calendarTableDayPl;
    dayPlProfitOrLoss;
    dayPlAmountOfTrades;
    dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    monthNames = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    monthName;
    calendarMonth;
    calendarTable;
    currentDate;
    currentYear;
    currentMonth;
    currentDay;
    amountOfDaysInMonth;
    firstDayInMonth;

    constructor(data) {
        this.daysTraded = data;
        this.calendarMonth = document.getElementsByClassName("calendar-month")[0];
        this.calendarTable = document.getElementById("calendar-table-tbody");
        this.currentDate = new Date();
        this.currentMonth = this.currentDate.getMonth() + 1;
        this.monthName = this.monthNames[this.currentMonth];
        this.currentYear = this.currentDate.getFullYear();
        this.amountOfDaysInMonth = this.daysInMonth(this.currentDate.getFullYear(), this.currentDate.getMonth()+1);
        this.firstDayInMonth = this.dayNames[this.getFirstDayOfMonth(this.currentDate.getFullYear(), this.currentDate.getMonth())];
        this.calendarMonth.textContent = `${this.monthName} ${this.currentYear}`;
        this.createDays();
    }

    daysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }

    getFirstDayOfMonth(year, month) {
        return new Date(year, month, 1).getDay();
    }

    setTradingDay(dayClass, pl, amountOfTrades) {
        this.calendarTableIconDiv = document.createElement("div");
        this.calendarTableIconDiv.classList.add("day-traded");
        this.calendarTableIcon = document.createElement("span");
        this.calendarTableIcon.classList.add("material-symbols-rounded");
        this.calendarTableIcon.textContent = "description";
        this.calendarTableIconDiv.appendChild(this.calendarTableIcon);
        this.calendarTableDayPl = document.createElement("div");
        this.calendarTableDayPl.classList.add("day-pl");
        this.dayPlProfitOrLoss = document.createElement("span");
        if(dayClass == 'profit')
            this.dayPlProfitOrLoss.textContent = `$${pl}`;
        else
            this.dayPlProfitOrLoss.textContent = `-$${pl.substring(1)}`;
        this.dayPlAmountOfTrades = document.createElement("span");
        this.dayPlAmountOfTrades.textContent = `${amountOfTrades}`;
        this.calendarTableDayPl.appendChild(this.dayPlProfitOrLoss);
        this.calendarTableDayPl.appendChild(this.dayPlAmountOfTrades);
        this.newCalendarTableRow.appendChild(this.calendarTableIconDiv);
        this.newCalendarTableRow.appendChild(this.calendarTableDayPl);
        this.newCalendarTableRow.classList.add(dayClass);
    }

    kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : (Math.sign(num)*Math.abs(num)).toFixed(2);
    }

    createDays() {
        this.calendarTable.textContent = "";
        let lastCalendarTableRow = document.createElement("tr");
        this.dayNames.forEach(function(e, i){
            if(e != this.firstDayInMonth) {
                lastCalendarTableRow.appendChild(document.createElement("td"));
            } else {
                for(let j = 0; j < this.amountOfDaysInMonth + 7; j++) {
                    if((j + i) % 7 == 0) {
                        this.calendarTable.appendChild(lastCalendarTableRow);
                        lastCalendarTableRow = document.createElement("tr");
                    }
                    this.newCalendarTableRow = document.createElement("td");
                    if(j < this.amountOfDaysInMonth) {
                        this.calendarTableDayNumber = document.createElement("span");
                        this.calendarTableDayNumber.classList.add("day-num");
                        this.calendarTableDayNumber.textContent = (j+1) < 10 ? `0${j+1}` : (j+1);
                        this.newCalendarTableRow.appendChild(this.calendarTableDayNumber);
                        this.newCalendarTableRow.classList.add("day");
                        this.currentDay = j + 1;
                        if(this.daysTraded[this.currentYear] && this.daysTraded[this.currentYear][this.currentMonth] && this.daysTraded[this.currentYear][this.currentMonth][this.currentDay]) {
                            const dayTraded = this.daysTraded[this.currentYear][this.currentMonth][this.currentDay];
                            const dayNetPnL = dayTraded['totalProfits'] - Math.abs(dayTraded['totalLoses']);
                            const dayAmountOfTrades = dayTraded['winCount'] + dayTraded['lossCount'];
                            if(dayNetPnL > 0)
                                this.setTradingDay('profit', this.kFormatter(dayNetPnL), dayAmountOfTrades);
                            else
                                this.setTradingDay('loss', this.kFormatter(dayNetPnL), dayAmountOfTrades);
                        }
                    }
                    lastCalendarTableRow.appendChild(this.newCalendarTableRow);
                }
            }
        }.bind(this));
    }

    action(e) {
        const newDate = e.dataset.action == "previous" ? new Date(this.currentDate.setMonth(this.currentDate.getMonth()-1)) : new Date(this.currentDate.setMonth(this.currentDate.getMonth()+1));
        this.calendarMonth.textContent = `${this.monthNames[newDate.getMonth()]} ${newDate.getFullYear()}`;
        this.amountOfDaysInMonth = this.daysInMonth(newDate.getFullYear(), newDate.getMonth()+1);
        this.firstDayInMonth = this.dayNames[this.getFirstDayOfMonth(newDate.getFullYear(), newDate.getMonth())];
        this.currentDate = newDate;
        this.currentMonth = this.currentDate.getMonth() + 1;
        this.createDays();
    }
}