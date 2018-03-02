function pigLatinTranslator(text) {
    //Split the given text into an array
    var words = text.split(" ")

    //Set up avriables helpful to translation checks
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    var punctuation = [",", ".", "!", "?"]
    var capitalized = false;
    var punctuated = false;

    //Check if there is actually text provided, otherwise return an error
    if(!text) {
        return "ERROR: Empty string";
    }

    //Run the translation checking each word/string in the array.
    for(var i = 0; i < words.length; i++){

        //perform a test to see if a number is in the string creating an invalid word for translation
        var hasNum = /\d/;
        if (hasNum.test(words[i])){
            continue;
        }

        //set a variable for the length of the word to reduce cluttered statements
        var len = words[i].length; 

        //check if the word is capitalized or punctuated.
        if(words[i] != words[i].toLowerCase()){
            capitalized = true;
        }
        if(punctuation.indexOf(words[i][len-1]) != -1){
            punctuated = true;
        }

        //Translate...check if the first letter is a vowel or not and use the else statement to catch consonants.
        if (vowels.indexOf(words[i][0]) != -1) {
            if(punctuated) {
                var temp = words[i][len-1];
                words[i] = words[i].slice(0, len - 1);
                words[i] += "way";
                words[i] += temp;
            }
            else {
                words[i] += "way"
            }
            
        }
        else {
            if(punctuated){
                var temp = words[i][len - 1];
                var first = words[i].slice(0,1);
                first += "ay"
                words[i] = words[i].slice(1, len - 1);
                words[i] = words[i] + first + temp;
            }
            else {
                var first = words[i].slice(0, 1);
                first += "ay"
                words[i] = words[i].slice(1, len);
                words[i] += first;
            }
        }

        //If the word is capitalized make sure it's properly capitalized upon output
        if (capitalized) {
            words[i] = words[i].toLowerCase();
            var first = words[i].charAt(0).toUpperCase();
            var edit = words[i].slice(1,)
            words[i] = first + edit
        }

        //Reset the checks for the next loop
        capitalized = false;
        punctuated = false;
    }
    
    //Join the array of translated words into a string again.
    words = words.join(" ");

    //return the translated text
    return words;
}

test = "Pig latin, is Cool."

console.log(pigLatinTranslator(test));

