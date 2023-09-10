import { User } from '/js/user.js';
import { dollarSign } from '/js/base.js';

const user = new User();
const graphsArray = [
    '<svg width="125" height="60" viewBox="0 0 125 60" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.5 46.5L1.5 50.5V60H124V1.5L114 3.5L100 12.5H86L70 6.5L60.5 26L48 29L38 26L32 36L24.5 34.5L18.5 44.5L8.5 46.5Z" fill="url(#paint0_linear_57_732)"></path> <path d="M1.5 50.5L8.5 46.5L18.5 44.5L24.5 34.5L32 36L38 26L48 29L60.5 26L70 6.5L86 12.5H100L114 3.5L124 1.5" stroke="#379f9a" stroke-width="3"></path> <defs> <linearGradient id="paint0_linear_57_732" x1="62.75" y1="1.5" x2="62.75" y2="60" gradientUnits="userSpaceOnUse"> <stop stop-color="#379f9a"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> </defs> </svg>',
    '<svg width="126" height="62" viewBox="0 0 126 62" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8 44L2 50.5V62H124.5V1.5L108 16L100 6.5L86.5 12.5L70.5 6.5L67 16L51.5 24.5L38.5 26L32.5 34.5L23 32L18 38L8 44Z" fill="url(#paint0_linear_57_733)"></path> <path d="M2 50.5L8 44L18 38L23 32L32.5 34.5L38.5 26L51.5 24.5L67 16L70.5 6.5L86.5 12.5L100 6.5L108 16L124.5 1.5" stroke="#379f9a" stroke-width="3"></path> <defs> <linearGradient id="paint0_linear_57_733" x1="63.25" y1="1.5" x2="63.25" y2="62" gradientUnits="userSpaceOnUse"> <stop stop-color="#379f9a"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> </defs> </svg>',
];
let allTrades = [];

const setFourBoxes = async(data) => {
    const fourBoxes = document.querySelectorAll('.four-boxes .box');
    if(fourBoxes) {
        [].forEach.call(fourBoxes, async function(box) {
            const boxType = box.getAttribute('data-box');
            let boxAmount = Number(data[boxType]).toFixed(2),
                boxGraph;
            if(boxType == 'winlossratio') {
                box.querySelector('.box-price').textContent = `${boxAmount}%`;
                return;
            }
            const numberToShow = dollarSign(boxAmount);
            if(boxAmount < 0)
                boxGraph = '<svg width="112" height="56" viewBox="0 0 112 56" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.33878 16.0661L2 10.2645V0H111V54L96.3184 41.0579L89.2 49.5372L77.1878 44.1818L62.951 49.5372L59.8367 41.0579L46.0449 33.4711L34.4776 32.1322L29.1388 24.5455L20.6857 26.7769L16.2367 21.4215L7.33878 16.0661Z" fill="url(#paint0_linear_57_735)"></path> <path d="M2 10L7.33878 15.8367L16.2367 21.2245L20.6857 26.6122L29.1388 24.3673L34.4776 32L46.0449 33.3469L59.8367 40.9796L62.951 49.5102L77.1878 44.1224L89.2 49.5102L96.3184 40.9796L111 54" stroke="#d25c5a" stroke-width="3"></path> <defs> <linearGradient id="paint0_linear_57_735" x1="56.5" y1="54" x2="56.5" y2="0" gradientUnits="userSpaceOnUse"> <stop stop-color="#d25c5a"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> </defs> </svg>';
            else
                boxGraph = graphsArray[Math.floor(Math.random()*graphsArray.length)];
            box.querySelector('.box-price').textContent = numberToShow;
            box.querySelector('.box-graph').innerHTML = boxGraph;
        }); 
    }
}

const appendTrades = async(tr, text, table) => {
    let td = document.createElement('td'),
        span = document.createElement('span');
    span.textContent = text;
    td.appendChild(span);
    tr.appendChild(td);
    table.appendChild(tr);
}

const setRecentTrades = async(data) => {
    if(data.length == 0) return;
    const recentTradesTable = document.querySelector('.table-default tbody');
    Object.keys(data).forEach(key => {
        let tr = document.createElement('tr');
        tr.classList.add(data[key]['closingPNL'] > 0 ? "profit" : "loss");
        appendTrades(tr, data[key]['buy']['symbol'], recentTradesTable);
        appendTrades(tr, new Date(data[key]['opened']).toLocaleString(), recentTradesTable);
        appendTrades(tr, new Date(data[key]['closed']).toLocaleString(), recentTradesTable);
        appendTrades(tr, data[key]['type'], recentTradesTable);
        appendTrades(tr, `$${data[key]['avgEntryPrice'].toFixed(2)}`, recentTradesTable);
        appendTrades(tr, `$${data[key]['avgClosePrice'].toFixed(2)}`, recentTradesTable);
        appendTrades(tr, `$${data[key]['commission'].toFixed(2)}`, recentTradesTable);
        appendTrades(tr, dollarSign(data[key]['closingPNL'].toFixed(2)), recentTradesTable);
    });
}

const setUserData = async() => {
    const data = await user.getData();
    await setFourBoxes(await data.Summary.winLossSummary);
    const trades = await user.getPositionHistory();
    Object.values(await trades.closedTrades).forEach(coin =>
        coin.forEach((trade) => {
            allTrades.push(trade);
        })
    );
    allTrades.sort((a, b) => {
        return new Date(b.closed) - new Date(a.closed);
    });
    await setRecentTrades(allTrades);
    document.querySelector('#overlay').classList.remove('load-data');
}

setUserData();