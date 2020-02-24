'use strict'
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm']

var shopLocation1 = {
    
    name: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,
    custPerHour: [],
    cookiesPerCust: [],
    randomCust: function (min, max) {

        for (var i = 0; i < hours.length; i++) {
            this.custPerHour[i] = getRandomCust(min, max);

        }
    },
    amountsOfCookies : function() {
        for (var i = 0; i < hours.length; i++) {
         var co= this.cookiesPerCust.push(co);
        }
    },
    result:[],
    render: function(){
         var cont=document.getElementById('ShopsLocation');
         var article = document.createElement('article');
          cont.appendChild(article);
          var p = document.createElement('p');
          p.textContent = 'Seattle';
         article.appendChild(p);
         var ul = document.createElement('ul');
         article.appendChild(ul);
         for(var i =0; i< hours.length ; i++) {
             var li= document.createElement('li');
             ul.appendChild(li);
             li.textContent = hours[i]+ this.result;
         }
         console.log(cont);
 
     },
     result:[],
}
shopLocation1.randomCust(23, 65);
shopLocation1.render();
console.log(shopLocation1);


function getRandomCust(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    var custNum = Math.floor(Math.random() * (max - min + 1) + min);
    return custNum;
}
function amountsOfCookies(){
    this.getRandomCust();
    var cookies = Math.ceil(this.custPerHour[i] * this.avgCookie);
    return cookies;

}
shopLocation1.amountsOfCookies();


var shopLocation1 = {
    
    name: 'Tokyo',
    minCust: 3,
    maxCust: 25,
    avgCookie: 1.2,
    custPerHour: [],
    cookiesPerCust: [],
    randomCust: function (min, max) {

        for (var i = 0; i < hours.length; i++) {
            this.custPerHour[i] = getRandomCust(min, max);

        }
    },
    amountsOfCookies : function() {
        for (var i = 0; i < hours.length; i++) {
         var co= this.cookiesPerCust.push(co);
        }
    },
    result:[],
    render: function(){
         var cont=document.getElementById('ShopsLocation');
         var article = document.createElement('article');
          cont.appendChild(article);
          var p = document.createElement('p');
          p.textContent = 'Tokyo';
         article.appendChild(p);
         var ul = document.createElement('ul');
         article.appendChild(ul);
         for(var i =0; i< hours.length ; i++) {
             var li= document.createElement('li');
             ul.appendChild(li);
             li.textContent = hours[i]+ this.result;
         }
         console.log(cont);
 
     },
     result:[],
}
shopLocation1.randomCust(3, 24);
shopLocation1.render();
console.log(shopLocation1);


function getRandomCust(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    var custNum = Math.floor(Math.random() * (max - min + 1) + min);
    return custNum;
}
function amountsOfCookies(){
    this.getRandomCust();
    var cookies = Math.ceil(this.custPerHour[i] * this.avgCookie);
    return cookies;

}
shopLocation1.amountsOfCookies();



var shopLocation1 = {
    
    name: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookie: 3.7,
    custPerHour: [],
    cookiesPerCust: [],
    randomCust: function (min, max) {

        for (var i = 0; i < hours.length; i++) {
            this.custPerHour[i] = getRandomCust(min, max);

        }
    },
    amountsOfCookies : function() {
        for (var i = 0; i < hours.length; i++) {
         var co= this.cookiesPerCust.push(co);
        }
    },
    result:[],
    render: function(){
         var cont=document.getElementById('ShopsLocation');
         var article = document.createElement('article');
          cont.appendChild(article);
          var p = document.createElement('p');
          p.textContent = 'Dubai';
         article.appendChild(p);
         var ul = document.createElement('ul');
         article.appendChild(ul);
         for(var i =0; i< hours.length ; i++) {
             var li= document.createElement('li');
             ul.appendChild(li);
             li.textContent = hours[i]+ this.result;
         }
         console.log(cont);
 
     },
     result:[],
}
shopLocation1.randomCust(11, 38);
shopLocation1.render();
console.log(shopLocation1);


function getRandomCust(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    var custNum = Math.floor(Math.random() * (max - min + 1) + min);
    return custNum;
}
function amountsOfCookies(){
    this.getRandomCust();
    var cookies = Math.ceil(this.custPerHour[i] * this.avgCookie);
    return cookies;

}
shopLocation1.amountsOfCookies();


var shopLocation1 = {
    
    name: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookie: 2.3,
    custPerHour: [],
    cookiesPerCust: [],
    randomCust: function (min, max) {

        for (var i = 0; i < hours.length; i++) {
            this.custPerHour[i] = getRandomCust(min, max);

        }
    },
    amountsOfCookies : function() {
        for (var i = 0; i < hours.length; i++) {
         var co= this.cookiesPerCust.push(co);
        }
    },
    result:[],
    render: function(){
         var cont=document.getElementById('ShopsLocation');
         var article = document.createElement('article');
          cont.appendChild(article);
          var p = document.createElement('p');
          p.textContent = 'Paris';
         article.appendChild(p);
         var ul = document.createElement('ul');
         article.appendChild(ul);
         for(var i =0; i< hours.length ; i++) {
             var li= document.createElement('li');
             ul.appendChild(li);
             li.textContent = hours[i]+ this.result;
         }
         console.log(cont);
 
     },
     result:[],
}
shopLocation1.randomCust(20,38);
shopLocation1.render();
console.log(shopLocation1);


function getRandomCust(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    var custNum = Math.floor(Math.random() * (max - min + 1) + min);
    return custNum;
}
function amountsOfCookies(){
    this.getRandomCust();
    var cookies = Math.ceil(this.custPerHour[i] * this.avgCookie);
    return cookies;

}
shopLocation1.amountsOfCookies();


var shopLocation1 = {
    
    name: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookie: 4.6,
    custPerHour: [],
    cookiesPerCust: [],
    randomCust: function (min, max) {

        for (var i = 0; i < hours.length; i++) {
            this.custPerHour[i] = getRandomCust(min, max);

        }
    },
    amountsOfCookies : function() {
        for (var i = 0; i < hours.length; i++) {
         var co= this.cookiesPerCust.push(co);
        }
    },
    result:[],
    render: function(){
         var cont=document.getElementById('ShopsLocation');
         var article = document.createElement('article');
          cont.appendChild(article);
          var p = document.createElement('p');
          p.textContent = 'Lima';
         article.appendChild(p);
         var ul = document.createElement('ul');
         article.appendChild(ul);
         for(var i =0; i< hours.length ; i++) {
             var li= document.createElement('li');
             ul.appendChild(li);
             li.textContent = hours[i]+ this.result;
         }
         console.log(cont);
 
     },
     result:[],
}
shopLocation1.randomCust(2,16);
shopLocation1.render();
console.log(shopLocation1);


function getRandomCust(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    var custNum = Math.floor(Math.random() * (max - min + 1) + min);
    return custNum;
}
function amountsOfCookies(){
    this.getRandomCust();
    var cookies = Math.ceil(this.custPerHour[i] * this.avgCookie);
    return cookies;

}
shopLocation1.amountsOfCookies();