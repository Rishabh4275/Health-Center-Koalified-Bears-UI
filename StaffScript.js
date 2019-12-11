const app = document.getElementById('staff-list')
var html = ""

/*const redraw = document.createElement('div')
app.appendChild(redraw)*/

console.log(app.innerHTML)


var request = new XMLHttpRequest()
request.open('GET', 'http://localhost:8080/staff/all', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
data.forEach(function(result, i) {
	html = '<tr><td>'+result.eid+'</td><td>'+result.name+'</td><td>'+result.type+'</td><td>'+result.address+'</td><td>'+result.dob+'</td></tr>'
	app.innerHTML += html
})
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Error..!`
    app.appendChild(errorMessage)
  }
}
request.send()