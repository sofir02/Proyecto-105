Webcam.attach('#camera');
camera = document.getElementById("camera");
Webcam.set({
    width: 360, 
    height: 300, 
    image_format : 'jpg', 
    jpg_quality: 90
});

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mfQts8Yfm/model.json' , modelLoaded);
function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id = "selfie" src = "'+ data_uri + '" />';
    });
}

console.log("ml5 version: " , ml5.version);
function modelLoaded(){
    console.log('modelo cargado');
}

function check(){
    img = document.getElementById('selfie');
    classifier.classify (img, gotresult);
}

function gotresult(error, results){
    if (error){
        console.error (error);
    }
    else{
        console.log (results);
        document.getElementById ("result_object").innerHTML = results[0].label;
        document.getElementById ("accuracy_object").innerHTML = results[0].confidence.toFixed(3);
    }
}

