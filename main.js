function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/[...]',modelReady);
}

function modelReady(){
    classifier.classfy(gotResults);
}