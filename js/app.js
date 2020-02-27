'use strict'
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var shops = [];
function shop(name, minCust, maxCust, avgCookie) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookie = avgCookie;
    this.custPerHour = [];
    this.cookiesPerCust = [];
    this.totalCookie = 0;
    shops.push(this);
    console.log('Shops array :', shops);
}


shop.prototype.randomCust = function () {
    for (var i = 0; i < hours.length; i++) {
        this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
    }


}
shop.prototype.cookiesPerHour = function () {
    for (var i = 0; i < hours.length; i++) {
        this.cookiesPerCust.push(Math.floor(this.avgCookie * this.custPerHour[i]));

    }
}
shop.prototype.totalCookies = function () {
    var sum = 0;
    for (var j = 0; j < this.cookiesPerCust.length; j++) {
        sum = sum + this.cookiesPerCust[j];
    }
    this.totalCookie = sum;
}


 var container = document.getElementById('ShopsLocation');
    
var tableE1 = document.createElement('table');
container.appendChild(tableE1);

shop.prototype.render = function () {
    var tr = document.createElement('tr');
    tableE1.appendChild(tr);

    var td = document.createElement('td');
    td.textContent = this.name;
    tr.appendChild(td);

    for (var i = 0; i < this.cookiesPerCust.length; i++) {
        var td = document.createElement('td');
        td.textContent = this.cookiesPerCust[i];
        tr.appendChild(td);
    }
    var td = document.createElement('td');
    td.textContent = this.totalCookie;
    tr.appendChild(td);
}

function helper() {
    var tr = document.createElement('tr');
    tableE1.appendChild(tr);
    var th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = `Location :`;
    for (var i = 0; i < hours.length; i++) {
        th = document.createElement('th');
        th.textContent = hours[i];
        tr.appendChild(th);
    }
    var th = document.createElement('th');
    th.textContent = '/Daily Location Total';
    tr.appendChild(th);
    tableE1.appendChild(tr);
}


function footer() {
    var tr = document.createElement('tr');
    tableE1.appendChild(tr);
    var td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = 'Totals';

    var final = 0;
    for (var i = 0; i < hours.length; i++) {
        var tdE5 = document.createElement('td');
        tr.appendChild(tdE5);
        var count = 0;

        for (var j = 0; j < shops.length; j++) {
            count += shops[j].cookiesPerCust[i];
        }
        final += count;
        tdE5.textContent = count;
    }
    var tdE3 = document.createElement('td');
    tr.appendChild(tdE3);
    tdE3.textContent = final;
}


var seattle = new shop('Seattle', 23, 65, 6.3);
var tokyo = new shop('Tokyo', 3, 24, 1.2);
var dubai = new shop('Dubai', 11, 38, 3.7);
var paris = new shop('Paris', 20, 38, 2.3);
var lima = new shop('Lima', 2, 16, 4.6);

helper();


for (var i = 0; i < shops.length; i++) {
    shops[i].randomCust();
    shops[i].cookiesPerHour();
    shops[i].totalCookies();
    shops[i].render();
}


var myForm = document.getElementById('salesForm');
myForm.addEventListener('submit', function (event) {
    event.preventDefault();

    var name = event.target.name.value;
    console.log(name);
    var minCust = parseInt(event.target.minCust.value);
    console.log(minCust);
    var maxCust = parseInt(event.target.maxCust.value);
    console.log(maxCust);
    var avg = parseFloat(event.target.avg.value);

    console.log(avg);
    if (event.target.maxCust.value <= event.target.minCust.value) {
        alert('The maximum number of customer should be bigger ');
    }
    else {

        tableE1.removeChild(tableE1.lastChild);
        var shopobj = new shop(name, minCust, maxCust, avg);
        shopobj.randomCust();
        shopobj.cookiesPerHour();
        shopobj.totalCookies();
        shopobj.render();

    }
    footer();

    myForm.reset();
})





