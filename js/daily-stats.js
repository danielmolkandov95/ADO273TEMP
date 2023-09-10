import { User } from '/js/user.js';
import { dollarSign } from '/js/base.js';

const user = new User();
const mainContainer = document.querySelector('main .container');

const style = getComputedStyle(document.body);
const greenColorCss = style.getPropertyValue("--color-green");
const redColorCss = style.getPropertyValue("--color-red");
const grayColorCss = style.getPropertyValue("--color-secondary-light");

let userData, chartStorage = [];

const createDailyChart = async(data, dayDate, addon) => {
    const ctx = document.getElementById(addon);
    const trades = data.trades.map((trade) => trade.netpnl || 0);
    const backgroundColors = trades.map((trade) => trade < 0 ? redColorCss : greenColorCss);
    new Chart(ctx, {
        type: "line",
        data: {
            labels: trades.map((_, index) => `Trade ${index + 1}`),
            datasets: [
                {
                    label: `Net P&L for ${dayDate}`,
                    data: trades,
                    borderColor: backgroundColors,
                    borderWidth: 3,
                    fill: false,
                    tension: 0.25
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
                        drawBorder: false
                    }
                },
                y: { 
                    grid: {
                        drawBorder: false,
                        borderWidth: 4,
                        color: (context) => {
                            if(context.tick.value === 0)
                                return grayColorCss;
                            else
                                return 'transparent';
                        } ,
                    }
                },
            },
        }
    });
}

const createDayStats = async() => {
    const dayStats = document.createElement('div');
    dayStats.classList.add('day-stats');
    return dayStats;
}

const createInnerBox = async(date, addon) => {
    const innerBox = document.createElement('div');
    innerBox.classList.add('box');
    const innerBoxTitle = document.createElement('h3');
    innerBoxTitle.textContent = date;
    const innerBoxCanvasWrapper = document.createElement('div');
    innerBoxCanvasWrapper.classList.add('inner-box-wrapper');
    const innerBoxCanvas = document.createElement('canvas');
    innerBoxCanvas.setAttribute('id', addon);
    innerBoxCanvasWrapper.appendChild(innerBoxCanvas);
    innerBox.appendChild(innerBoxTitle);
    innerBox.appendChild(innerBoxCanvasWrapper);
    return innerBox;
}

const createBox = async(title, value, dayStats) => {
    const box = document.createElement('div');
    box.classList.add('box');
    const valueElement = document.createElement('div');
    valueElement.classList.add('day-stats-value');
    valueElement.textContent = value;
    const titleElement = document.createElement('h5');
    titleElement.textContent = title;
    box.appendChild(valueElement);
    box.appendChild(titleElement);
    dayStats.appendChild(box);
    return dayStats;
}

const createRow = async(total) => {
    const row = document.createElement('div');
    row.classList.add('row');
    if(total > 0)
        row.classList.add('profit');
    else
        row.classList.add('loss');
    return row;
}

const setChartStorageItem = async(data) => {
    chartStorage.push(data);
}

const generateDay = async(day) => {
    const dayDate = new Date(`${day.year}-${day.month}-${day.day}`).toLocaleDateString("en-us", { weekday: "long", year: "numeric", month: "short", day: "numeric" });
    const dayData = day.data;
    const totalLoses = dayData.totalLoses || 0;
    const totalProfits = dayData.totalProfits || 0;
    const netPNL = totalProfits + totalLoses || 0;
    const addon = `dailyChart_${dayDate.replace(/ /g,"_").replace(/,/g,"")}`;

    const row = await createRow(netPNL);
    const innerBox = await createInnerBox(dayDate, addon);
    await setChartStorageItem({dayData, dayDate, addon});
    let dayStats = await createDayStats();

    const totalTrade = dayData.winCount + dayData.lossCount;
    dayStats = await createBox('Total Trades', totalTrade, dayStats);

    const winPercentage = totalTrade === 0 ? 0 : (dayData.winCount / totalTrade) * 100;
    dayStats = await createBox('Win %', `${winPercentage.toFixed(2)}%`, dayStats);

    const commission = dayData.commission || 0;
    dayStats = await createBox('Commission', await dollarSign(commission.toFixed(2)), dayStats);

    const winners = dayData.winCount;
    dayStats = await createBox('Winners', winners, dayStats);

    const losers = dayData.lossCount;
    dayStats = await createBox('Losers', losers, dayStats);

    dayStats = await createBox('Net P&L', await dollarSign(netPNL.toFixed(2)), dayStats);

    row.appendChild(innerBox);
    row.appendChild(dayStats);
    mainContainer.appendChild(row);
}

const reverseData = async() => {
    return Object.entries(userData)
        .flatMap(([year, yearMonths]) =>
            Object.entries(yearMonths).flatMap(([month, monthDays]) =>
            Object.entries(monthDays).map(([day, dayData]) => {
                return { year, month, day, data: dayData };
                })
            )
        )
        .reverse();
}

const setCharts = async() => {
    chartStorage.forEach((e) => 
        createDailyChart(e.dayData, e.dayDate, e.addon)
    );
}

const setData = async() => {
    const data = await user.getData();
    userData = await data.Summary.tradingDays;
    const reversedData = await reverseData();
    for (const day of reversedData) {
        await generateDay(day);
    }
    await setCharts();
    document.querySelector('#overlay').classList.remove('load-data');
}

await setData();