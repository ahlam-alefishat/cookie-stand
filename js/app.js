'use strict'
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
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


shop.prototype.render = function () {
    var container=document.getElementById('ShopsLocation');
    var tableE1 = document.createElement('table');
    container.appendChild(tableE1);
    var trE1 = document.createElement('tr');
    tableE1.appendChild(trE1);
    var thE1 = document.createElement('th');
    trE1.appendChild(thE1);
    thE1.textContent = this.name;
    console.log(container);
}
shop.prototype.header = function () {

}



var seattle = new shop('Seattle', 23, 65, 6.3);
var tokyo = new shop('Tokyo', 3, 24, 1.2);
var dubai = new shop('Dubai', 11, 38, 3.7);
var paris = new shop('Paris', 20, 38, 2.3);
var lima = new shop('Lima', 2, 16, 4.6);




  for (var i = 0; i < shops.length; i++) {
    shops[i].randomCust();
    shops[i].amountsOfCookies();
    shops[i].totalCookie1();
    shops[i].render();
    shops[i].header();
    
    
}

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