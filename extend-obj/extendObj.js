// define loop here
var loop = function(collection, callback){
	if (Array.isArray(collection) || typeof collection ==='string'){
		for (var i=0; i<collection.length; i++){
		callback(collection[i], i)
	}
	}
	else if (typeof collection === 'object'){
		for (var key in collection){
			callback([key], key);
		}
	}
};

// define extendObj here
var extendObj = function(anObject, additions){
	loop(additions, function(newValue, newKey){
		console.log(newValue);
		anObject[newKey]=newValue;
			console.log('adding', newKey);
		})
	};

// test data we're giving you:
var Jon = {name: "Jon", fear: "koala bears"};
var moreCharacteristics = {favoriteFruit: "avocados", funFact: "I once played basketball with Prince in the summer of 1984."};

// test extendObj here using the two sample data objects given above

console.log('Jon before:', Jon);
extendObj(Jon, moreCharacteristics);
console.log('Jon after:', Jon);

console.log(Jon["name"]);