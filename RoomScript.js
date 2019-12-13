const app = document.getElementById('room-list')
var html = ""

const redraw = document.createElement('div')
app.appendChild(redraw)

console.log(app.innerHTML)


var request = new XMLHttpRequest()
request.open('GET', 'http://localhost:8080/rooms/all', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
data.forEach(function(result, i) {
	html = '<tr><td>'+result.room_id+'</td><td>'+result.bed_id+'</td><td>'+result.room_type+'</td><td>'+result.availability+'</td></tr>'
	app.innerHTML += html
})
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Error..!`
    app.appendChild(errorMessage)
  }
}
request.send()