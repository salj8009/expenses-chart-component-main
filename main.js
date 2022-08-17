const contentAmount = document.querySelector('.content-amount');

const amountMon = document.querySelector('.amount-mon');
const amountTue = document.querySelector('.amount-tue');
const amountWed = document.querySelector('.amount-wed'); 
const amountThu = document.querySelector('.amount-thu'); 
const amountFri = document.querySelector('.amount-fri'); 
const amountSat = document.querySelector('.amount-sat'); 
const amountSun = document.querySelector('.amount-sun');  
 
const mon = document.querySelector('.week-span__mon');
const tue = document.querySelector('.week-span__tue');
const wed = document.querySelector('.week-span__wed');
const thu = document.querySelector('.week-span__thu');
const fri = document.querySelector('.week-span__fri');
const sat = document.querySelector('.week-span__sat');
const sun = document.querySelector('.week-span__sun');

fetch("./data.json")
.then(response => {
    return response.json();
 })
 .then(dataWeek => {
   const nuevo =dataWeek.map(day =>{
          return `${day.amount}`
        });
        amountMon.textContent = nuevo[0];
        amountTue.textContent = nuevo[1];
        amountWed.textContent = nuevo[2];
        amountThu.textContent = nuevo[3];
        amountFri.textContent = nuevo[4];
        amountSat.textContent = nuevo[5];
        amountSun.textContent = nuevo[6];
    });

    mon.addEventListener('mouseover' , () =>{
      amountMon.classList.toggle('show');
    });
    tue.addEventListener('mouseover' , () =>{
      amountTue.classList.toggle('show');
    });
    wed.addEventListener('mouseover' , () =>{
      amountWed.classList.toggle('show');
    });
    thu.addEventListener('mouseover' , () =>{
      amountThu.classList.toggle('show');
    });
    fri.addEventListener('mouseover' , () =>{
      amountFri.classList.toggle('show');
    });
    sat.addEventListener('mouseover' , () =>{
      amountSat.classList.toggle('show');
    });
    sun.addEventListener('mouseover' , () =>{
      amountSun.classList.toggle('show');
    });