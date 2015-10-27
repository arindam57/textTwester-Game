var wordLib = ['laptop','serial','action','window','assert','finder',
						'object','father','mother','jockey','jackle','hijack',
						'jumble','dazzle','zigzag','puzzle','frizzy','buzzer',
						'jizail','rozzer','jugful','pajama','convex','boxful',
						'jingly','junker','zipper','quaver','climax','benjol',
						'benjin','pickup','fields','jubile','inkjet','jarful',
						'backup','jetway','suffix','cervix','prefix','japans',
						'injury','inject','bipack','maxima','expect','chunky',
						'mosque','waxing','mixing','jingle','fixing','icebox',
						'upsize','fluxed','bonzer','frozen','duplex','jokers',
						'champy','amazon','jerker','jewels','zodiac','judges',
						'phenix','juicer','foxily','premix','prizes','hazard',
						'zenith','kicked','lookup','flippy','except','boxing',
						'buckle','freeze','floopy','unique','projet','swaraj',
						'jaguar','donzel','reject','ejects','reflux','luxury',
						'oxygen','bywork','breeze','hatbox','expend','jasper',
						'expiry','boozer','vacuum','unpack','majors','humbly',
						'pickle','flocks','pixels','junior','jordan','journy',
						'blocks','blowup','skyway','bubble','bluffs','bucket',
						'flyboy','flyway','galaxy','skycap','snoozy','unlock',
						'plunky','hockey','krampy','myopic','pumped','oxford',
						'clicks','cowboy','wicked','lizard','flaxes','gruffy',
						'dozens','piumbs','phobic','biaxel','grazes','liquor',
						'flicks','hazerd','flexor','hawkey','coaxel','outfox',
						'clocks','markup','makeup','workup','injure','vertex',
						'quanta','taxman','womans','public','happen','excide',
						'church','excuse','chunks','crimpy','gloppy','adjust',
						'adjoin','cummin','mugful','mumble','excels','equals',
						'equids','picnic','cyborg','fixers','fixate','crunch',
						'cutoff','brocks','sneeze','teabox','vamper','buffet',
						'bricks','buffer','mixers','packet','convey','reflex',
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
}