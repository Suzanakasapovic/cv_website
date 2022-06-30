console.log("Zeno")
function nameTransform(name) {
	var lowerName = name.toLowerCase();
	var firstLetter = lowerName[0];
	var firstCapitalLetter = firstLetter.toUpperCase();
	var nameWithoutFirstLetter = lowerName.substring(1, lowerName.length);
	var correctName = firstCapitalLetter + nameWithoutFirstLetter;
	return correctName;
}
function checkAge(age) {
    if(age < 0) { 
            return false;
        } else { 
            return true;
        }
    }
    function repeatSentence(sentence, times) {
        for(var i = 0; i < times; i = i + 1) { 
                console.log(i + " " + sentence);
            } 
        }

        function listTransform(listOfNames) {
            var transformedNames = [];
            for(var i = 0; i < listOfNames.lenght; i = i + 1) {
                transformedNames.push (nameTransform(listOfNames[i])); 
                } 
                return transformedNames;
            }

            
            function upperName(name) {
                return name.toUpperCase();
            }
            
function applyTransform(listOfNames, transformFunction) {
	var transformedNames = [];
for(var i = 0; i < listOfNames.length; i = i + 1) { 
	var transformedNameI = transformFunction(listOfNames[i]);
		transformedNames.push(transformedNameI);
	} 
	return transformedNames;
}

function createListItem(ingredient, id) {
    var htmlString = '<li id="ingredient-' + id + '" class="li-ingredient">'
        + ingredient + '</li>';
        return htmlString;
    }
    
    function createList(listOfIngredients) {
        var htmlString = '';
        for(var i = 0; i < listOfIngredients.length; i = i + 1) {
            htmlString = htmlString + createListItem(listOfIngredients[i], i);
        }
        return htmlString;
    }
    
    var listOfIngredients = ["apple", "orange", "pear", "nutella"];
    
    function populateList() {
        var ulElement = document.getElementById('ingredients');
        ulElement.innerHTML = createList(listOfIngredients);
    }
    
  function fiftyCut(word) {
    var fiftyCut = word.substring(4, word.length);
    return fiftyCut
  }               

  function squareRoot(number) {
    var squareRoot = Math.sqrt(number);
    return squareRoot
  }


function sqareNumber(number, esponent) {
    var squareNumber = Math.pow(number, esponent)
    return squareNumber
}




function squareNumber(number, esponent) {
    var esponent = 2;
    var numbersSquared = Math.pow(number, esponent);
    return numbersSquared
}

function listTransform(listOfNumbers) {
    var numbersSquared = [];
    for (var i = 0; i < listOfNumbers.length; i = i + 1) {
        var numberSquaredI = squareNumber(listOfNumbers[i]); numbersSquared.push(numberSquaredI);
    }
    return numbersSquared;
}

var number = ["1", "2", "3", "4", "5"]



function isPrime(num) {
    if (num===1) {
        return false;
    }
    else if(num === 2) {
        return true;
    } else {
    for(var i = 2; i < num; i++); {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
    }    
}

console.log(isPrime(number));


function createListLanguages(language, id) {
    var htmlString = '<li id="language-' + id + ' " class="li-language">' + language + '</li>';
    return htmlString;
}

function createList(ListOfLanguages) {
    var htmlString = ' ' ;
    for(var i = 0; i < ListOfLanguages.length; i = i + 1) {
        htmlString = htmlString + createListLanguages(listOfLanguages[i], i);
    }
    return htmlString;
}

var listOfLanguages = ["Japanese", "German", "Spanish", "English", "Serbian", "Italian"];

function populateList() {
    var ulElement = document.getElementById('languages');
    ulElement.innerHTML = createList(listOfIngredients);
}