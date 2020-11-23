//Movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//Items
const title = document.querySelector('.title');
const ps4 = document.querySelector('.ps4 img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const colours = document.querySelector('.colours');

//Moving animation event
container.addEventListener('mousemove', (e) => {
     let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
	 let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
	 card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener('mouseenter', e => {
	 card.style.transition = 'none';
	 //Popout
	 title.style.transform = 'translateZ(150px)';
	 ps4.style.transform = 'translateZ(200px) rotateZ(-25deg)';
	 //description.style.transform = 'translateZ(rotateX(-10deg) rotateY(-10deg)';
	 //colours.style.transform = 'translateZ(100px)';
	 //purchase.style.transform = 'translateZ(75px)';
	 
});


//Animate Out
container.addEventListener('mouseleave', e => {
	 card.style.transition = 'all 0.5s ease';
	 card.style.transform = `rotateY(0deg) rotateX(0deg)`;
	 //Popback
	 title.style.transform = 'translateZ(0px)';
	 ps4.style.transform = 'translateZ(0px) rotateZ(0deg)';
	 //description.style.transform = 'translateZ(0px)';
	 //colours.style.transform = 'translateZ(0px)';
	 //purchase.style.transform = 'translateZ(0px)';
});
