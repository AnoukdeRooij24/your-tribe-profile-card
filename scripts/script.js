//selects the FIRST occurence of <button>;
var button = document.querySelector("button")
var element = document.querySelector("div")

button.addEventlistener("Click", function {element.classlist.toggle("yay")})
