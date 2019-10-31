
let dropdown = document.getElementById('appointment_department');
console.log(dropdown)
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Department Name';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'http://localhost:8080/department/all';

const request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function() {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    let option;
    var array=[];
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].deptName;
      if(!array.includes(option.text)){
        dropdown.add(option);
        array.push(option.text);
      }else{

      }
    }
   } else {
    // Reached the server, but it returned an error
  }   
}

request.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + url);
};

request.send();  