var wordLib = ['laptop','serial','action','window','assert','finder',
						'object','father','mother','jockey','jackle','hijack',
						'jumble','dazzle','zigzag','puzzle','frizzy','buzzer',
						'jizail','rozzer','jugful','pajama','convex','boxful',
						'jingly','junker','zipper','quaver','climax','benjol',
						'benjin','pickup','jubile','inkjet','jarful','peachy',
						'backup','jetway','suffix','cervix','prefix','wicker',
						'injury','inject','bipack','maxima','expect','chunky',
						'mosque','waxing','mixing','jingle','fixing','icebox',
						'upsize','fluxed','bonzer','frozen','duplex','pocket',
						'champy','amazon','jerker','zodiac','hyphen','wicket',
						'phenix','juicer','foxily','premix','hazard','wigwag',
						'zenith','kicked','lookup','flippy','except','boxing',
						'buckle','freeze','unique','projet','swaraj','square',
						'jaguar','donzel','reject','reflux','luxury','maglev',
						'oxygen','bywork','breeze','hatbox','expend','jasper',
						'expiry','boozer','vacuum','unpack','humbly','torque',
						'pickle','junior','jordan','journy','humble','iodize',
						'blowup','skyway','bubble','bucket','ionize','heckle',
						'flyboy','flyway','galaxy','skycap','snoozy','unlock',
						'plunky','hockey','krampy','myopic','pumped','oxford',
						'cowboy','wicked','lizard','gruffy','impart','blench',
						'phobic','biaxel','liquor','blanch','whimsy','exotic',
						'hazerd','flexor','hawkey','coaxel','outfox','boffin',
						'markup','makeup','workup','injure','vertex','jailer',
						'quanta','taxman','public','happen','excide','expert',
						'church','excuse','crimpy','gloppy','adjust','supply',
						'adjoin','cummin','mugful','mumble','hexone','pippin',
						'picnic','cyborg','fixate','crunch','baffle','bounce',
						'cutoff','sneeze','teabox','vamper','buffet','bouncy',
						'buffer','packet','convey','reflex','pimple','wobble',
						'chemic','murphy','moving','paving','paunch','kelvin',
						'grabby','keypad','caving','kipper','chough','doozer',
						'monkey','campus','brunch','offcut','snooze','bypath',
						'undock','bytalk','bummer','bumper','physic','common'];

var generateRandomNumber = function (highestNumber) {
	var number = Math.random() * (highestNumber - 0) + 0;
	if (number<1) 
		return Math.floor(number);
	else
		return Math.round(number);
};

var generateWordSequence = function (givenWord) {
	var splitWord = givenWord.split('')
	var irregularSequenceWord = [],count=0;

	while(count != splitWord.length) {
		irregularSequenceWord.push(splitWord[count]);
		count++;
		irregularSequenceWord.unshift(splitWord[count])
		count++;
	};
	return irregularSequenceWord.sort().join('');
};

var countScore = 0;

var generateRandomWord = function () {
	var randomNumber = generateRandomNumber(wordLib.length);
	var getWord = wordLib[randomNumber];
	currentWord=wordLib[randomNumber];
	document.getElementById('printWord').innerHTML = generateWordSequence(getWord);
	document.getElementById('text').value = '';
};

function doOperationOnCheck (obtainedText) {
	if (obtainedText==currentWord) {
		countScore+=10;
		document.getElementById('printScore').innerHTML = countScore;
		generateRandomWord();
	}
	else{
		alert("The Word was "+currentWord+".\nyour score is "+countScore);
		window.location = "start.html";
	}
}

function checkOutput () {
	var obtainedText = document.getElementById('text').value;
	doOperationOnCheck(obtainedText); 
};
