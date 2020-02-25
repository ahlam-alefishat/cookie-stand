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
shop.prototype.amountsOfCookies = function () {
    for (var i = 0; i < hours.length; i++) {
        this.cookiesPerCust.push(Math.floor(this.avgCookie * this.custPerHour[i]));

    }
}
shop.prototype.totalCookie1 = function () {
    var sum = 0;
    for (var j = 0; j < this.cookiesPerCust.length; j++) {
        sum = sum + this.cookiesPerCust[j];
    }
    this.totalCookie = sum;
}


var tableE1 = document.createElement('table');

shop.prototype.render = function () {
    var container = document.getElementById('ShopsLocation');
    container.appendChild(tableE1);
    var trE1 = document.createElement('tr');
    tableE1.appendChild(trE1);
    var thE1 = document.createElement('th');
    trE1.appendChild(thE1);
}
function data() {

    for (var i = 0; i < shops.length; i++) {
        var trE2 = document.createElement('tr');
        tableE1.appendChild(trE2);
        var tdE1 = document.createElement('td');
        tableE1.appendChild(tdE1);
        tdE1.textContent = shops[i].name;

        for (var j = 0; j < hours.length; j++) {
            var tdE3 = document.createElement('td');
            tableE1.appendChild(tdE3);
            tdE3.textContent = shops[i].cookiesPerCust[j];
        }

        var tdE4 = document.createElement('td');
        tableE1.appendChild(tdE4);
        tdE4.textContent = shops[i].totalCookie;


    }
}


function helper() {
    var trE2 = document.createElement('tr');
    tableE1.appendChild(trE2);
    var thE2 = document.createElement('th');
    trE2.appendChild(thE2);
    thE2.textContent = ``;
    for (var i = 0; i < hours.length; i++) {
        thE2 = document.createElement('th');
        thE2.textContent = hours[i];
        trE2.appendChild(thE2);
    }
    var thE3 = document.createElement('th');
    thE3.textContent = '/Daily Location Total';
    trE2.appendChild(thE3);
    tableE1.appendChild(trE2);
}



function footer() {

    var trE3 = document.createElement('tr');
    tableE1.appendChild(trE3);
    var tdE4 = document.createElement('td');
    trE3.appendChild(tdE4);
    tdE4.textContent ='Totals';
    var sum=0;
    var final=0;

    for (var i = 0; i < hours.length; i++) {

        var tdE5 = document.createElement('td');
    trE3.appendChild(tdE5);
    var count=0;
    for (var j=0; j<shops.length; j++){

        count+=shops[j].cookiesPerCust[i];
    }
    count++
    final+=count;
    tdE5.textContent=count;
    }

    var tdE3 = document.createElement('td');
    trE3.appendChild(tdE3);
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
    shops[i].amountsOfCookies();
    shops[i].totalCookie1();
    shops[i].render();


}
data();
footer();
// var shopLocation1 = {
//     name: 'Seattle',
//     minCust: 23,
//     maxCust: 65,
//     avgCookie: 6.3,
//     custPerHour: [],
//     cookiesPerCust: [],
//     totalCookie:0,
//     randomCust: function () {
//         for (var i = 0; i < hours.length; i++) {
//             this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
//         }
//     },
//     amountsOfCookies : function() {
//         for (var i = 0; i < hours.length; i++) {
//             this.cookiesPerCust.push(Math.floor(this.avgCookie*this.custPerHour[i])) ;
//            // this.totalCookie=this.custPerHour+this.co;
//         }
//     },

//     totalCookie: function() {
//         var sum = 0;
//         for (var j=0; j<this.cookiesPerCust.length; j++) {
//             sum = sum + this.cookiesPerCust[j];
//         } 
//         this.totalCookie=sum;
//     },


//     render: function(){
//          var cont=document.getElementById('ShopsLocation');
//          var article = document.createElement('article');
//           cont.appendChild(article);
//           var p = document.createElement('p');
//           p.textContent = this.name;
//          article.appendChild(p);
//          var ul = document.createElement('ul');
//          article.appendChild(ul);
//          for(var i =0; i< hours.length ; i++) {
//              var li= document.createElement('li');
//              ul.appendChild(li);
//              li.textContent = `${hours[i]} :${this.cookiesPerCust[i]} `
//          }
//         li.textContent= `Total: ${this.totalCookie} Cookies`
//          console.log(cont);

//     }

// }
// shopLocation1.randomCust();
// shopLocation1.amountsOfCookies();
// shopLocation1.totalCookie();
// shopLocation1.render();
// console.log(shopLocation1);
// ////////////////////////////////////////////////////////////////////////
// var shopLocation2 = {

//     name: 'Tokyo',
//     minCust: 3,
//     maxCust: 24,
//     avgCookie: 1.2,
//     custPerHour: [],
//     cookiesPerCust: [],
//     totalCookie:0,
//     randomCust: function () {


//         for (var i = 0; i < hours.length; i++) {
//             this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));

//         }
//     },
//     amountsOfCookies : function() {
//         for (var i = 0; i < hours.length; i++) {
//             this.cookiesPerCust.push(Math.floor(this.avgCookie*this.custPerHour[i])) ;
//            // this.totalCookie=this.custPerHour+this.co;
//         }
//     },

//     totalCookie: function() {
//         totalCookie
//     },


//     render: function(){
//          var cont=document.getElementById('ShopsLocation');
//          var article = document.createElement('article');
//           cont.appendChild(article);
//           var p = document.createElement('p');
//           p.textContent = this.name;
//          article.appendChild(p);
//          var ul = document.createElement('ul');
//          article.appendChild(ul);
//          for(var i =0; i< hours.length ; i++) {
//              var li= document.createElement('li');
//              ul.appendChild(li);
//              li.textContent = `${hours[i]} :${this.cookiesPerCust[i]} `
//          }
//         li.textContent= `Total: ${this.totalCookie} Cookies`
//          console.log(cont);

//     }

// }
// shopLocation2.randomCust();
// shopLocation2.amountsOfCookies();
// shopLocation2.totalCookie();
// shopLocation2.render();
// console.log(shopLocation2);
// ////////////////////////////////////////////////////////////////////////
// var shopLocation3 = {

//     name: 'Dubai',
//     minCust: 11,
//     maxCust: 38,
//     avgCookie: 3.7,
//     custPerHour: [],
//     cookiesPerCust: [],
//     totalCookie:0,
//     randomCust: function () {


//         for (var i = 0; i < hours.length; i++) {
//             this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));

//         }
//     },
//     amountsOfCookies : function() {
//         for (var i = 0; i < hours.length; i++) {
//             this.cookiesPerCust.push(Math.floor(this.avgCookie*this.custPerHour[i])) ;
//            // this.totalCookie=this.custPerHour+this.co;
//         }
//     },

//     totalCookie: function() {
//         var sum = 0;
//         for (var j=0; j<this.cookiesPerCust.length; j++) {
//             sum = sum + this.cookiesPerCust[j];
//         } 
//         this.totalCookie=sum;
//     },


//     render: function(){
//          var cont=document.getElementById('ShopsLocation');
//          var article = document.createElement('article');
//           cont.appendChild(article);
//           var p = document.createElement('p');
//           p.textContent = this.name;
//          article.appendChild(p);
//          var ul = document.createElement('ul');
//          article.appendChild(ul);
//          for(var i =0; i< hours.length ; i++) {
//              var li= document.createElement('li');
//              ul.appendChild(li);
//              li.textContent = `${hours[i]} :${this.cookiesPerCust[i]} `
//          }
//         li.textContent= `Total: ${this.totalCookie} Cookies`
//          console.log(cont);

//     }

// }
// shopLocation3.randomCust();
// shopLocation3.amountsOfCookies();
// shopLocation3.totalCookie();
// shopLocation3.render();
// console.log(shopLocation3);
// ////////////////////////////////////////////////////////////////////////
// var shopLocation4 = {

//     name: 'Paris',
//     minCust: 20,
//     maxCust: 38,
//     avgCookie: 2.3,
//     custPerHour: [],
//     cookiesPerCust: [],
//     totalCookie:0,
//     randomCust: function () {


//         for (var i = 0; i < hours.length; i++) {
//             this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));

//         }
//     },
//     amountsOfCookies : function() {
//         for (var i = 0; i < hours.length; i++) {
//             this.cookiesPerCust.push(Math.floor(this.avgCookie*this.custPerHour[i])) ;
//            // this.totalCookie=this.custPerHour+this.co;
//         }
//     },

//     totalCookie: function() {
//         var sum = 0;
//         for (var j=0; j<this.cookiesPerCust.length; j++) {
//             sum = sum + this.cookiesPerCust[j];
//         } 
//         this.totalCookie=sum;
//     },


//     render: function(){
//          var cont=document.getElementById('ShopsLocation');
//          var article = document.createElement('article');
//           cont.appendChild(article);
//           var p = document.createElement('p');
//           p.textContent = this.name;
//          article.appendChild(p);
//          var ul = document.createElement('ul');
//          article.appendChild(ul);
//          for(var i =0; i< hours.length ; i++) {
//              var li= document.createElement('li');
//              ul.appendChild(li);
//              li.textContent = `${hours[i]} :${this.cookiesPerCust[i]} `
//          }
//         li.textContent= `Total: ${this.totalCookie} Cookies`
//          console.log(cont);

//     }

// }
// shopLocation4.randomCust();
// shopLocation4.amountsOfCookies();
// shopLocation4.totalCookie();
// shopLocation4.render();
// console.log(shopLocationz);
// ////////////////////////////////////////////////////////////////////////

// var shopLocation5 = {

//     name: 'Lima',
//     minCust:2,
//     maxCust: 216,
//     avgCookie: 4.2,
//     custPerHour: [],
//     cookiesPerCust: [],
//     totalCookie:0,
//     randomCust: function () {


//         for (var i = 0; i < hours.length; i++) {
//             this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));

//         }
//     },
//     amountsOfCookies : function() {
//         for (var i = 0; i < hours.length; i++) {
//             this.cookiesPerCust.push(Math.floor(this.avgCookie*this.custPerHour[i])) ;
//            // this.totalCookie=this.custPerHour+this.co;
//         }
//     },

//     totalCookie: function() {
//         var sum = 0;
//         for (var j=0; j<this.cookiesPerCust.length; j++) {
//             sum = sum + this.cookiesPerCust[j];
//         } 
//         this.totalCookie=sum;
//     },


//     render: function(){
//          var cont=document.getElementById('ShopsLocation');
//          var article = document.createElement('article');
//           cont.appendChild(article);
//           var p = document.createElement('p');
//           p.textContent = this.name;
//          article.appendChild(p);
//          var ul = document.createElement('ul');
//          article.appendChild(ul);
//          for(var i =0; i< hours.length ; i++) {
//              var li= document.createElement('li');
//              ul.appendChild(li);
//              li.textContent = `${hours[i]} :${this.cookiesPerCust[i]} `
//          }
//         li.textContent= `Total: ${this.totalCookie} Cookies`
//          console.log(cont);

//     }

// }
// shopLocation5.randomCust();
// shopLocation5.amountsOfCookies();
// shopLocation5.totalCookie();
// shopLocation5.render();
// console.log(shopLocation5);