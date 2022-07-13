//https://teachablemachine.withgoogle.com/models/6fDkCGUwp/
Webcam.set( {
    height: 300,
    width: 350,
    image_format: 'png',
    pngquality: 90
})  
camera= document.getElementById("camera")
Webcam.attach("#camera")

function nonf() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML="<img id= 'dm' src='" + data_uri + "'>"
    })
}



console.log("ml5 version:", ml5.version)
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6fDkCGUwp/model.json", modelloaded)

function modelloaded() {
console.log("modelloaded!")}
prediction1=""
prediction2=""

function speak() {
    var synth=window.speechSynthesis
    speakdata="The first prediction is " + prediction1 + " The second prediction is " + prediction2
    var utterthis=new SpeechSynthesisUtterance(speakdata)
    synth.speak(utterthis)
}
function madeup() {
    img= document.getElementById("dm")
    classifier.classify(img, gotresults)
}
function gotresults(error, results) {
    if (error) {
        console.error(error)
    } else {
        console.log(results)
        document.getElementById("g").innerHTML =results[0].label
        document.getElementById("chips").innerHTML =results[1].label
        prediction1=results[0].label
        prediction2=results[1].label
        speak()
        if (prediction1=="Angry") {
            document.getElementById("q").innerHTML= "&#128545;"
        }
        if (prediction1=="Thinking") {
            document.getElementById("q").innerHTML= "&#129300;"
        }
        if (prediction1=="Scheming") {
            document.getElementById("q").innerHTML= "&#128527;"
        }
        if (prediction1=="Surprised") {
            document.getElementById("q").innerHTML= "&#128558;"
        }
        if (prediction2=="Angry") {
            document.getElementById("brick").innerHTML= "&#128545;"
        }
        if (prediction2=="Thinking") {
            document.getElementById("brick").innerHTML= "&#129300;"
        }
        if (prediction2=="Scheming") {
            document.getElementById("brick").innerHTML= "&#128527;"
        }
        if (prediction2=="Surprised") {
            document.getElementById("brick").innerHTML= "&#128558;"
        }
    }
    
}
