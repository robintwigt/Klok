
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

TweenMax.from(".body", 1, {backgroundColor:"white"})
/*
TweenMax.from(".data", 0.5, {opacity:0, scale:0, ease:Bounce.easeOut});
*/
TweenMax.from(".data", 2, {left:-500, rotation:-20});









/*------------------------------------------------------------------------------*/




//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function uurVerandering() {
    var today = new Date();
    var uur = today.getHours();
}

function verandering() {    
    if (uur >= 6 && uur <= 17) {
      document.getElementById('maanZon').style.background = 'url(img/zon.png) repeat';
    }
    else {
      document.getElementById('maanZon').style.background = 'url(img/maan.png) repeat';
    }
}

window.onload = function() {
    uurVerandering();
    verandering();
};





/*
function uurVerandering() {
    var today = new Date();
    var uur = today.getHours();
}

function verandering() {
    var bodyColor = document.getElementsByClass('data');
    
    if (uur < 8) {
      bodyColor.style.backgroundColor = "#000000";
    }
    else {
      bodyColor.style.backgroundColor = "#3653c4";
    }
}

window.onload = function() {
    uurVerandering();
    verandering();
};
*/

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