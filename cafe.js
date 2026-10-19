const leftArrow = document.querySelector('#left');
const rightArrow = document.querySelector('#right');
const quotes = document.querySelectorAll('.quote');

rightArrow.addEventListener('click', nextQuote);
leftArrow.addEventListener('click', prevQuote);


function nextQuote(){
    const activeQuote = document.querySelector('.active');
    activeQuote.classList.remove('active');
    if(activeQuote.nextElementSibling){
        activeQuote.nextElementSibling.classList.add('active');
    } else {
        quotes[0].classList.add('active')
    }
}

function prevQuote(){
    const activeQuote = document.querySelector('.active');
    activeQuote.classList.remove('active');
    if(activeQuote.previousElementSibling){
        activeQuote.previousElementSibling.classList.add('active');
    } else {
        quotes[quotes.length -1].classList.add('active')
    }
}

function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
getYear();



function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }

