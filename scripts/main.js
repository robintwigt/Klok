
setInterval(updateTijd, 500);

function updateTijd(){
	var today = new Date();

	var maanden = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
	var formatDate = today.getDate() + ' ' + maanden[today.getMonth()] + ' ' + today.getFullYear();
	document.getElementById('datum').innerHTML = formatDate;

	function leadingZero(number) {
	    if(number < 10) {
	      return '0'+number;
	    }
	    else {
	      return number;
	    }
	}

	var uren = leadingZero(today.getHours());
	var minuten = leadingZero(today.getMinutes());
	var seconden = leadingZero(today.getSeconds());

	var formatTime = uren + ':' + minuten + ':' + seconden;
	document.getElementById('tijd').innerHTML = formatTime;
}




// set timeline
var timeline = new TimelineMax({ repeat: -1, ease: Power0.easeNone });

// amimate timeline
timeline.to('.overdag', 1, { opacity: 1})
    .from('.zon', 800, { backgroundPositionX: -2000}, 'overdag')
    .from('.wolken1', 1000, { backgroundPositionX: 2400}, 'overdag')
    .from('.wolken2', 1500, { backgroundPositionX: 1200}, 'overdag');

/*
// set timeline
var timeline2 = new TimelineMax({ repeat: -1, ease: Power0.easeNone });

// amimate timeline
timeline2.to('.nacht', 1, { opacity: 1})
    .from('.maan', 800, { backgroundPositionX: -2000}, 'nacht')
    .from('.sterren1', 1000, { backgroundPositionX: 2400}, 'nacht')
    .from('.sterren2', 1500, { backgroundPositionX: 1200}, 'nacht');
*/


/*
TweenMax.from(".data", 0.5, {opacity:0, scale:0, ease:Bounce.easeOut});
*/
TweenMax.from(".data", 2, {left:-500, rotation:-20});

TweenMax.from(".wolken1", 5, {rotation:360, opacity:1, scale:25, ease:Sine.easeOut});
TweenMax.from(".wolken2", 5, {rotation:360, opacity:1, scale:75, ease:Sine.easeOut});

TweenMax.from(".zon", 3, {top:1000, ease:Power4.easeOut, delay:5});











/*------------------------------------------------------------------------------*/




//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


function uurVerandering() {
    var today = new Date();
    var uur = today.getHours();

}



//Achtergrond kleur

function veranderingAchtergrond() {
    var today = new Date();
    var uur = today.getHours();
    var achtergrondKleur = document.getElementById('body');
    
    if (uur >= 6 && uur <= 17) {
      achtergrondKleur.style.backgroundColor = "#3653c4";
    }
    else {
      achtergrondKleur.style.backgroundColor = "#000000";
    }
}



//Maan of zon

function veranderingZonMaan() { 
    var today = new Date();
    var uur = today.getHours();

    if (uur >= 6 && uur <= 17) {
      document.getElementById('maanZon').style.background = 'url(img/zon.png) repeat';
    }
    else {
      document.getElementById('maanZon').style.background = 'url(img/maan.png) repeat';
    }
}


//Wolken of sterren

function veranderingWolkenSterren1() { 
    var today = new Date();
    var uur = today.getHours();

    if (uur >= 6 && uur <= 17) {
      document.getElementById('sterrenWolken1').style.background = 'url(img/wolken.png) repeat'; //url(img/zon.png) repeat
    }
    else {
      document.getElementById('sterrenWolken1').style.background = 'url(img/sterren.png) repeat';
    }
}

function veranderingWolkenSterren2() { 
    var today = new Date();
    var uur = today.getHours();

    if (uur >= 6 && uur <= 17) {
      document.getElementById('sterrenWolken2').style.background = 'url(img/wolken.png) repeat'; //url(img/zon.png) repeat
    }
    else {
      document.getElementById('sterrenWolken2').style.background = 'url(img/sterren.png) repeat';
    }
}




window.onload = function() {
    uurVerandering();
    veranderingAchtergrond();
    veranderingZonMaan();
    veranderingWolkenSterren1();
    veranderingWolkenSterren2();
};







//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!






/*document.write(Date());*/

/*var secondHand = document.getElementByClass('second-hand');

var tl1 = new TimelineMax();
tl1.to(secondHand, 4, {
    rotation: 180
});

*/




/*

class State {
    constructor(seconds, minutes, hours) {
        this.seconds = seconds;
        this.minutes = minutes;
        this.hours = hours;
    }

    static now() {
        const now = new Date();
        const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
        const minutes = now.getMinutes() + seconds / 60;
        const hours = now.getHours() + minutes / 60;
        return new State(seconds, minutes, hours);
    }
}

class Clock {
    constructor(state) {
        this.state = state;
        this.tick = this.tick.bind(this);
        requestAnimationFrame(this.tick);
    }

    tick() {
        this.setState(State.now());
        requestAnimationFrame(this.tick);
    }

    setState(newState) {
        this.state = { ...this.state, ...newState};
        this.render();
    }

    render() {
        const { seconds, minutes, hours } = this.state;

        //voor second hand
        document.querySelector(".second-hand").style.transform
        = rotate(${Math.floor(seconds) / 60 * 360}deg) ;

        //voor minute hand
        document.querySelector(".minute-hand").style.transform
        = rotate(${minutes / 60 * 360}deg) ;

        //voor hour hand
        document.querySelector(".hour-hand").style.transform
        = rotate(${hours / 12 * 360}deg) ;
    }
}

const CLOCK = new Clock();

*/