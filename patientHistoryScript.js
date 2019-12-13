if(window.sessionStorage.accessToken!=='undefined'){
const app = document.getElementById('patient-hist-list')
var html = ""

/*const redraw = document.createElement('div')
app.appendChild(redraw)*/

console.log(app.innerHTML)


var request = new XMLHttpRequest()
request.open('GET', 'http://localhost:8080/patienthistory/all', true)
request.setRequestHeader('Authorization','Bearer '+window.sessionStorage.accessToken);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
data.forEach(function(result, i) {
	html = '<tr><td>'+result.case_id+'</td><td>'+result.date_of_admission+'</td><td>'+result.insurance_id+'</td><td>'+result.diagnose_code+'</td></tr>'
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