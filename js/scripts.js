// scripts.js

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
console.log(text.length);
console.log(text);

var dinosaur = 'triceratops'
var dinosaurUpperCased = dinosaur.toUpperCase();
var textCharsAfter = text.replace('Velociraptor', dinosaurUpperCased);
console.log(textCharsAfter);
console.log(textCharsAfter.length / 2);
console.log(textCharsAfter.slice(0, textCharsAfter.length / 2));