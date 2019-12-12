if(window.sessionStorage.accessToken!=='undefined'){
const app = document.getElementById('patient-list')
var html = ""

/*const redraw = document.createElement('div')
app.appendChild(redraw)*/

console.log(app.innerHTML)


var request = new XMLHttpRequest()
request.open('GET', 'http://localhost:8080/patients/all', true)
request.setRequestHeader('Authorization','Bearer '+window.sessionStorage.accessToken);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
data.forEach(function(result, i) {
	html = '<tr><td>'+result.patientId+'</td><td>'+result.firstName+'</td><td>'+result.lastName+'</td><td>'+result.email+'</td><td>'+result.age+'</td><td>'+result.sex+'</td><td>'+result.mobile+'</td><td>'+result.address+'</td></tr>'
	app.innerHTML += html
})
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Error..!`
    app.appendChild(errorMessage)
  }
}
request.send()
}