'use strict';

const trafficTabs = document.querySelector('.trafficJams');
trafficTabs.addEventListener('click', function(e){
    console.log(e.target)
    if(e.target.closest('.aside__navigation-item')){
        const itemTabs = document.querySelectorAll('.aside__navigation-item');
        [...itemTabs].forEach((element)=>{
            element.classList.remove('active');
        });
        const contentTabs = document.querySelectorAll('.aside__content-item');
        [...contentTabs].forEach((element)=>{
            element.classList.remove('active');
        })
        e.target.classList.add('active');
        document.getElementById(e.target.dataset.name).classList.add('active');
    }
});

const searchAccord = document.querySelector('button#accord-btn');
searchAccord.addEventListener('click', function(){
    searchAccord.classList.toggle('open');
    document.querySelector('.accordionContent').classList.toggle('active');
});

