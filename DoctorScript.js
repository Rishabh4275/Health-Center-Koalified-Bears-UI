if(window.sessionStorage.accessToken!=='undefined'){
const app = document.getElementById('doctor-list')
var html = ""

const redraw = document.createElement('div')
app.appendChild(redraw)

console.log(app.innerHTML)


var request = new XMLHttpRequest()
request.open('GET', 'http://localhost:8080/doctors/all', true);
request.setRequestHeader('Authorization','Bearer '+window.sessionStorage.accessToken);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
data.forEach(function(result, i) {
	html = '<div class="col-lg-3 col-md-6 d-flex mb-sm-4 ftco-animate fadeInUp ftco-animated"><div class="staff"><div class="info text-center"><h3><a href="“#”">'+result.name+'</a></h3><div class="position">'+result.specialization+'</div><div class="text"><p>'+result.address+'</p></div></div></div></div>'
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