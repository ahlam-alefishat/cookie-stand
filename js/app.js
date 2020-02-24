'use strict'
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

var shopLocation1 = {
    
    name: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,
    custPerHour: [],
    cookiesPerCust: [],
    totalCookie:0,
    randomCust: function () {


        for (var i = 0; i < hours.length; i++) {
            this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));

        }
    },
    amountsOfCookies : function() {
        for (var i = 0; i < hours.length; i++) {
            this.cookiesPerCust.push(Math.floor(this.avgCookie*this.custPerHour[i])) ;
           // this.totalCookie=this.custPerHour+this.co;
        }
    },
    
    totalCookie: function() {
        var sum = 0;
        for (var j=0; j<this.cookiesPerCust.length; j++) {
            sum = sum + this.cookiesPerCust[j];
        } 
        this.totalCookie=sum;
    },


    render: function(){
         var cont=document.getElementById('ShopsLocation');
         var article = document.createElement('article');
          cont.appendChild(article);
          var p = document.createElement('p');
          p.textContent = this.name;
         article.appendChild(p);
         var ul = document.createElement('ul');
         article.appendChild(ul);
         for(var i =0; i< hours.length ; i++) {
             var li= document.createElement('li');
             ul.appendChild(li);
             li.textContent = `${hours[i]} :${this.cookiesPerCust[i]} `
         }
        li.textContent= `Total: ${this.totalCookie} Cookies`
         console.log(cont);
 
    }
    
}
shopLocation1.randomCust();
shopLocation1.amountsOfCookies();
shopLocation1.totalCookie();
shopLocation1.render();
console.log(shopLocation1);
////////////////////////////////////////////////////////////////////////
var shopLocation2 = {
    
    name: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,
    custPerHour: [],
    cookiesPerCust: [],
    totalCookie:0,
    randomCust: function () {


        for (var i = 0; i < hours.length; i++) {
            this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));

        }
    },
    amountsOfCookies : function() {
        for (var i = 0; i < hours.length; i++) {
            this.cookiesPerCust.push(Math.floor(this.avgCookie*this.custPerHour[i])) ;
           // this.totalCookie=this.custPerHour+this.co;
        }
    },
    
    totalCookie: function() {
        var sum = 0;
        for (var j=0; j<this.cookiesPerCust.length; j++) {
            sum = sum + this.cookiesPerCust[j];
        } 
        this.totalCookie=sum;
    },


    render: function(){
         var cont=document.getElementById('ShopsLocation');
         var article = document.createElement('article');
          cont.appendChild(article);
          var p = document.createElement('p');
          p.textContent = this.name;
         article.appendChild(p);
         var ul = document.createElement('ul');
         article.appendChild(ul);
         for(var i =0; i< hours.length ; i++) {
             var li= document.createElement('li');
             ul.appendChild(li);
             li.textContent = `${hours[i]} :${this.cookiesPerCust[i]} `
         }
        li.textContent= `Total: ${this.totalCookie} Cookies`
         console.log(cont);
 
    }
    
}
shopLocation2.randomCust();
shopLocation2.amountsOfCookies();
shopLocation2.totalCookie();
shopLocation2.render();
console.log(shopLocation2);
////////////////////////////////////////////////////////////////////////
var shopLocation3 = {
    
    name: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookie: 3.7,
    custPerHour: [],
    cookiesPerCust: [],
    totalCookie:0,
    randomCust: function () {


        for (var i = 0; i < hours.length; i++) {
            this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));

        }
    },
    amountsOfCookies : function() {
        for (var i = 0; i < hours.length; i++) {
            this.cookiesPerCust.push(Math.floor(this.avgCookie*this.custPerHour[i])) ;
           // this.totalCookie=this.custPerHour+this.co;
        }
    },
    
    totalCookie: function() {
        var sum = 0;
        for (var j=0; j<this.cookiesPerCust.length; j++) {
            sum = sum + this.cookiesPerCust[j];
        } 
        this.totalCookie=sum;
    },


    render: function(){
         var cont=document.getElementById('ShopsLocation');
         var article = document.createElement('article');
          cont.appendChild(article);
          var p = document.createElement('p');
          p.textContent = this.name;
         article.appendChild(p);
         var ul = document.createElement('ul');
         article.appendChild(ul);
         for(var i =0; i< hours.length ; i++) {
             var li= document.createElement('li');
             ul.appendChild(li);
             li.textContent = `${hours[i]} :${this.cookiesPerCust[i]} `
         }
        li.textContent= `Total: ${this.totalCookie} Cookies`
         console.log(cont);
 
    }
    
}
shopLocation3.randomCust();
shopLocation3.amountsOfCookies();
shopLocation3.totalCookie();
shopLocation3.render();
console.log(shopLocation3);
////////////////////////////////////////////////////////////////////////
var shopLocation4 = {
    
    name: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookie: 2.3,
    custPerHour: [],
    cookiesPerCust: [],
    totalCookie:0,
    randomCust: function () {


        for (var i = 0; i < hours.length; i++) {
            this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));

        }
    },
    amountsOfCookies : function() {
        for (var i = 0; i < hours.length; i++) {
            this.cookiesPerCust.push(Math.floor(this.avgCookie*this.custPerHour[i])) ;
           // this.totalCookie=this.custPerHour+this.co;
        }
    },
    
    totalCookie: function() {
        var sum = 0;
        for (var j=0; j<this.cookiesPerCust.length; j++) {
            sum = sum + this.cookiesPerCust[j];
        } 
        this.totalCookie=sum;
    },


    render: function(){
         var cont=document.getElementById('ShopsLocation');
         var article = document.createElement('article');
          cont.appendChild(article);
          var p = document.createElement('p');
          p.textContent = this.name;
         article.appendChild(p);
         var ul = document.createElement('ul');
         article.appendChild(ul);
         for(var i =0; i< hours.length ; i++) {
             var li= document.createElement('li');
             ul.appendChild(li);
             li.textContent = `${hours[i]} :${this.cookiesPerCust[i]} `
         }
        li.textContent= `Total: ${this.totalCookie} Cookies`
         console.log(cont);
 
    }
    
}
shopLocation4.randomCust();
shopLocation4.amountsOfCookies();
shopLocation4.totalCookie();
shopLocation4.render();
console.log(shopLocationz);
////////////////////////////////////////////////////////////////////////

var shopLocation5 = {
    
    name: 'Lima',
    minCust:2,
    maxCust: 216,
    avgCookie: 4.2,
    custPerHour: [],
    cookiesPerCust: [],
    totalCookie:0,
    randomCust: function () {


        for (var i = 0; i < hours.length; i++) {
            this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));

        }
    },
    amountsOfCookies : function() {
        for (var i = 0; i < hours.length; i++) {
            this.cookiesPerCust.push(Math.floor(this.avgCookie*this.custPerHour[i])) ;
           // this.totalCookie=this.custPerHour+this.co;
        }
    },
    
    totalCookie: function() {
        var sum = 0;
        for (var j=0; j<this.cookiesPerCust.length; j++) {
            sum = sum + this.cookiesPerCust[j];
        } 
        this.totalCookie=sum;
    },


    render: function(){
         var cont=document.getElementById('ShopsLocation');
         var article = document.createElement('article');
          cont.appendChild(article);
          var p = document.createElement('p');
          p.textContent = this.name;
         article.appendChild(p);
         var ul = document.createElement('ul');
         article.appendChild(ul);
         for(var i =0; i< hours.length ; i++) {
             var li= document.createElement('li');
             ul.appendChild(li);
             li.textContent = `${hours[i]} :${this.cookiesPerCust[i]} `
         }
        li.textContent= `Total: ${this.totalCookie} Cookies`
         console.log(cont);
 
    }
    
}
shopLocation5.randomCust();
shopLocation5.amountsOfCookies();
shopLocation5.totalCookie();
shopLocation5.render();
console.log(shopLocation5);