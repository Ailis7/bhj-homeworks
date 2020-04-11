let uploadForm = document.getElementById(`form`);
const progress = document.getElementById("progress");

uploadForm.addEventListener("submit", e => {
  e.preventDefault();

  let request = new XMLHttpRequest();
  let formData = new FormData(uploadForm);
  request.upload.onprogress = (event) => {
    console.log( 'Загружено на сервер ' + event.loaded + ' байт из ' + event.total);
    let progerssComplite = Math.round(event.loaded / event.total * 100) / 100;
    progress.value = progerssComplite;
  };
  request.upload.onload = function() {
    alert( 'Данные полностью загружены на сервер!' );
    }
  request.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
  request.send(formData);
});
