if(window.sessionStorage.accessToken!=='undefined'){
const app = document.getElementById('medicines-list')
var html = ""

const redraw = document.createElement('div')
app.appendChild(redraw)

console.log(app.innerHTML)


var request = new XMLHttpRequest()
request.open('GET', 'http://localhost:8080/medicines/all', true)
request.setRequestHeader('Authorization','Bearer '+window.sessionStorage.accessToken);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
data.forEach(function(result, i) {
	html = '<tr><td>'+result.medicine_id+'</td><td>'+result.medicine_name+'</td><td>'+result.m_price+'</td><td>'+result.m_count+'</td></tr>'
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