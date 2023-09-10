import { User } from '/js/user.js';
import { Calendar } from '/js/calendar.js';

const user = new User();
let calendar;
const graphsArray = [
    '<svg width="125" height="60" viewBox="0 0 125 60" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.5 46.5L1.5 50.5V60H124V1.5L114 3.5L100 12.5H86L70 6.5L60.5 26L48 29L38 26L32 36L24.5 34.5L18.5 44.5L8.5 46.5Z" fill="url(#paint0_linear_57_732)"></path> <path d="M1.5 50.5L8.5 46.5L18.5 44.5L24.5 34.5L32 36L38 26L48 29L60.5 26L70 6.5L86 12.5H100L114 3.5L124 1.5" stroke="#379f9a" stroke-width="3"></path> <defs> <linearGradient id="paint0_linear_57_732" x1="62.75" y1="1.5" x2="62.75" y2="60" gradientUnits="userSpaceOnUse"> <stop stop-color="#379f9a"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> </defs> </svg>',
    '<svg width="126" height="62" viewBox="0 0 126 62" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8 44L2 50.5V62H124.5V1.5L108 16L100 6.5L86.5 12.5L70.5 6.5L67 16L51.5 24.5L38.5 26L32.5 34.5L23 32L18 38L8 44Z" fill="url(#paint0_linear_57_733)"></path> <path d="M2 50.5L8 44L18 38L23 32L32.5 34.5L38.5 26L51.5 24.5L67 16L70.5 6.5L86.5 12.5L100 6.5L108 16L124.5 1.5" stroke="#379f9a" stroke-width="3"></path> <defs> <linearGradient id="paint0_linear_57_733" x1="63.25" y1="1.5" x2="63.25" y2="62" gradientUnits="userSpaceOnUse"> <stop stop-color="#379f9a"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> </defs> </svg>',
];

const setFourBoxes = async(data) => {
    const fourBoxes = document.querySelectorAll('.four-boxes .box');
    if(fourBoxes) {
        [].forEach.call(fourBoxes, function(box) {
            const boxType = box.getAttribute('data-box');
            let boxAmount = Number(data[boxType]).toFixed(2),
                boxGraph;
            if(boxType == 'winlossratio') {
                box.querySelector('.box-price').textContent = `${boxAmount}%`;
                return;
            }
            let numberToShow;
            if(boxAmount < 0) {
                boxAmount = Math.abs(boxAmount);
                numberToShow = `-$${boxAmount}`;
                boxGraph = '<svg width="112" height="56" viewBox="0 0 112 56" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.33878 16.0661L2 10.2645V0H111V54L96.3184 41.0579L89.2 49.5372L77.1878 44.1818L62.951 49.5372L59.8367 41.0579L46.0449 33.4711L34.4776 32.1322L29.1388 24.5455L20.6857 26.7769L16.2367 21.4215L7.33878 16.0661Z" fill="url(#paint0_linear_57_735)"></path> <path d="M2 10L7.33878 15.8367L16.2367 21.2245L20.6857 26.6122L29.1388 24.3673L34.4776 32L46.0449 33.3469L59.8367 40.9796L62.951 49.5102L77.1878 44.1224L89.2 49.5102L96.3184 40.9796L111 54" stroke="#d25c5a" stroke-width="3"></path> <defs> <linearGradient id="paint0_linear_57_735" x1="56.5" y1="54" x2="56.5" y2="0" gradientUnits="userSpaceOnUse"> <stop stop-color="#d25c5a"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> </defs> </svg>';
            } else {
                numberToShow = `$${boxAmount}`;
                boxGraph = graphsArray[Math.floor(Math.random()*graphsArray.length)];
            }
            box.querySelector('.box-price').textContent = numberToShow;
            box.querySelector('.box-graph').innerHTML = boxGraph;
        }); 
    }
}

const setDailyTip = async(message) => {
    const dailyTip = document.querySelector('.daily-tip .italic');
    if(message)
        dailyTip.textContent = `"${message}"`;
    else
        dailyTip.textContent = "Master your risk management and stay informed to thrive in crypto trading";
}

const avgWinLossByDay = async (data) => {
    const ctx = document.getElementById("avgWinLossByDayCanvas");

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const totalProfit = daysOfWeek.map((day) => data[day]?.totalProfits.toFixed(2) || 0);
    const totalLoses = daysOfWeek.map((day) => data[day]?.totalLoses.toFixed(2) || 0);

    const style = getComputedStyle(document.body);
    const greenColorCss = style.getPropertyValue("--color-green");
    const redColorCss = style.getPropertyValue("--color-red");
    const borderRadius = parseInt(style.getPropertyValue("--border-radius"), 10);
    const hoverColorCss = style.getPropertyValue("--color-primary");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: daysOfWeek,
            datasets: [
                {
                    label: "Total Profits",
                    data: totalProfit,
                    borderColor: greenColorCss,
                    borderRadius: borderRadius,
                    backgroundColor: greenColorCss,
                    hoverBackgroundColor: greenColorCss,
                    hoverBorderWidth: 3,
                    hoverBorderColor: hoverColorCss,
                },
                {
                    label: "Total Losses",
                    data: totalLoses,
                    borderColor: redColorCss,
                    borderRadius: borderRadius,
                    backgroundColor: redColorCss,
                    hoverBackgroundColor: redColorCss,
                    hoverBorderWidth: 3,
                    hoverBorderColor: hoverColorCss,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                },
                y: {
                    grid: {
                        display: true,
                    },
                },
            },
        },
    });
}

const setCalendar = async(data) => {
    calendar = new Calendar(data);
}

const calendarAction = async(e) => {
    calendar.action(e);
}

const calendarBtn = document.querySelectorAll('.calendar-btn');
if(calendarBtn) {
    [].forEach.call(calendarBtn, function(btn) {
        btn.addEventListener('click', function() {
            calendarAction(this);
        });
    }); 
}

const appendTrades = async(tr, text, table) => {
    let td = document.createElement('td'),
        span = document.createElement('span');
    span.textContent = text;
    td.appendChild(span);
    tr.appendChild(td);
    table.appendChild(tr);
}

const setOpenTrades = async(data) => {
    const openTradesTab = document.querySelector('.box-tabs .tab.open-trades');
    if(data.length == 0) {
        const noOpenTradesDiv = document.createElement('div');
        noOpenTradesDiv.classList.add('no-trades');
        noOpenTradesDiv.textContent = 'There are currently no open trades';
        openTradesTab.textContent = '';
        openTradesTab.appendChild(noOpenTradesDiv);
        return;
    }
    const openTradesButton = document.querySelector('button.open-trades');
    openTradesButton.classList.add('selected');
    openTradesTab.classList.add('selected');
    const openTradesTable = document.querySelector('.tab.open-trades tbody');
    Object.keys(data).forEach(key => {
        let tr = document.createElement('tr');
        appendTrades(tr, data[key]['buy']['symbol'], openTradesTable);
        appendTrades(tr, new Date(data[key]['opened']).toLocaleString(), openTradesTable);
        appendTrades(tr, data[key]['type'], openTradesTable);
        appendTrades(tr, data[key]['sell']['price'].toFixed(2), openTradesTable);
        appendTrades(tr, data[key]['buy']['commission'].toFixed(2), openTradesTable);
        appendTrades(tr, data[key]['buy']['realizedPnl'].toFixed(2), openTradesTable);
    });
}

const setRecentTrades = async(data, openTrades) => {
    if(data.length == 0) return;
    if(openTrades == 0) {
        const recentTradesButton = document.querySelector('button.recent-trades');
        recentTradesButton.classList.add('selected');
        const recentTradesTab = document.querySelector('.box-tabs .tab.recent-trades');
        recentTradesTab.classList.add('selected');
    }
    const recentTradesTable = document.querySelector('.tab.recent-trades tbody');
    Object.keys(data).forEach(key => {
        let tr = document.createElement('tr');
        tr.classList.add(data[key]['closingPNL'] > 0 ? "profit" : "loss");
        appendTrades(tr, data[key]['buy']['symbol'], recentTradesTable);
        appendTrades(tr, new Date(data[key]['opened']).toLocaleString(), recentTradesTable);
        appendTrades(tr, new Date(data[key]['closed']).toLocaleString(), recentTradesTable);
        appendTrades(tr, data[key]['type'], recentTradesTable);
        appendTrades(tr, data[key]['avgEntryPrice'].toFixed(2), recentTradesTable);
        appendTrades(tr, data[key]['avgClosePrice'].toFixed(2), recentTradesTable);
        appendTrades(tr, data[key]['commission'].toFixed(2), recentTradesTable);
        appendTrades(tr, data[key]['closingPNL'].toFixed(2), recentTradesTable);
    });
}

const tradesTabHandler = async(btnClicked, classClicked, classSecondary) => {
    if(btnClicked.classList.contains('selected')) return;
    document.querySelector(`.btn.${classClicked}`).classList.add('selected');
    document.querySelector(`.btn.${classSecondary}`).classList.remove('selected');
    document.querySelector(`.tab.${classClicked}`).classList.add('selected');
    document.querySelector(`.tab.${classSecondary}`).classList.remove('selected');
}

const openTradesButton = document.querySelector('.row.trades .buttons-container .btn.open-trades');
if(openTradesButton) {
    openTradesButton.addEventListener('click', function(){
        tradesTabHandler(openTradesButton, 'open-trades', 'recent-trades');
    });
}

const recentTradesButton = document.querySelector('.row.trades .buttons-container .btn.recent-trades');
if(recentTradesButton) {
    recentTradesButton.addEventListener('click', function(){
        tradesTabHandler(recentTradesButton, 'recent-trades', 'open-trades');
    });
}


const setUserData = async() => {
    const data = await user.getData();
    const dailyTip = await user.dailyTip();
    await setDailyTip(dailyTip.message);
    await setFourBoxes(await data.Summary.winLossSummary);
    await avgWinLossByDay(await data.Summary.avgWinLossByDay);
    await setCalendar(await data.Summary.tradingDays);
    await setOpenTrades(await data.Summary.openTrades);
    await setRecentTrades(await data.Summary.recentClosedTrades, (await data.Summary.openTrades).length);
    document.querySelector('#overlay').classList.remove('load-data');
}

setUserData();