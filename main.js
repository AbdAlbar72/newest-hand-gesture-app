Webcam.set({
    width: 640,
    height: 480,
    image_format: 'jpeg',
    jpeg_quality: 90
});

Webcam.attach('#webcam-container');

function captureImage() {
    Webcam.snap(function(data_uri) {
        document.getElementById('capturedImageContainer').innerHTML = '<img src="'+data_uri+'"/>';
    });
}
function identifyImage() {
    document.getElementById('gestureName').innerText = 'Hand Gesture: Gesture 1'; 
    document.getElementById('gestureIcon').src = 'gesture1.png';
}


Webcam.attach('#webcam-container');

function captureImage() {
    Webcam.snap(function(data_uri) {
        document.getElementById('capturedImageContainer').innerHTML = '<img src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

const modelURL = 'Paste your model link here/model.json';

const handGestureModel = ml5.imageClassifier(modelURL, modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function identifyImage() {
    document.getElementById('gestureName').innerText = 'Hand Gesture: Gesture 1';
    document.getElementById('gestureIcon').src = 'gesture1.png';
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if (error) {
    console.error(error);
    } else {
      console.log(results);
      document.getElementById("result_emotion_name").innerHTML = results[0].label;
      document.getElementById("result_emotion_name2").innerHTML = results[1].label;
      prediction_1 = results[0].label;
      prediction_2 = results[1].label;
      speak();
      if(results[0].label == "Thumbs Up")
      {
        document.getElementById("update_emoji").innerHTML = "&#128077"
      }
      if(results[0].label == "Peace")
      {
        document.getElementById("update_emoji").innerHTML = "&#9996"
      }
      if(results[0].label == "Perfect")
      {
        document.getElementById("update_emoji").innerHTML = "&#128076"
      }
    }
}