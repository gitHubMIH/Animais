function startClassification() {
  navigator.mediaDevices.getUserMedia({ audio: true });
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ymkimZ89G/model.json', modelReady);
}

function modelReady() {
  classifier.classify(gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  }
  else {
    console.log(results);
    r = Math.floor(Math.random() * 255) + 1;
    g = Math.floor(Math.random() * 255) + 1;
    b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = "posso ouvir " + results[0].label;
    document.getElementById("result_confidence").innerHTML = "Precisão " + (results[0].confidence * 100).toFixed(2) + "%";
    document.getElementById("result_label").style.color = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("result_confidence").style.color = "rgb(" + r + "," + g + "," + b + ")";

    mosca = document.getElementById("mosca");
    pato = document.getElementById("pato");
    gato = document.getElementById("gato");
    cão = document.getElementById("cão");
    if (results[0].label == "Latido") {
      mosca.src = "mosca.png.png";
      pato.src = "images.png";
      gato.src = "nyamCat.png";
      cão.src = "dog.gif.gif";
    }
    else if (results[0].label == "Miado") {
      mosca.src = "mosca.png.png";
      pato.src = "images.png";
      gato.src = "gato.gif";
      cão.src = "dog.png";
    }
    else if (results[0].label == "Quack") {
      mosca.src = "mosca.png.png";
      pato.src = "donald-duck.gif";
      gato.src = "nyamCat.png";
      cão.src = "dog.png";
    }
    else{
      mosca.src = "mosca.gif.gif";
      pato.src = "images.png";
      gato.src = "nyamCat.png";
      cão.src = "dog.png";
    }
  }
}
