if(window.sessionStorage.accessToken!=='undefined'){
const app = document.getElementById('bill-list')
var html = ""

const redraw = document.createElement('div')
app.appendChild(redraw)

console.log(app.innerHTML)


var request = new XMLHttpRequest()
request.open('GET', 'http://localhost:8080/bill/all', true)
request.setRequestHeader("Content-Type", "application/json");
request.setRequestHeader("Authorization", "Bearer "+window.sessionStorage.accessToken);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
data.forEach(function(result, i) {
console.log(result.bDate)
var date=new Date(result.bDate).toString();
console.log(date);
	html = '<tr><td>'+result.bId+'</td><td>'+date+'</td><td>'+result.email+'</td><td>'+result.bAmt+'</td></tr>'
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