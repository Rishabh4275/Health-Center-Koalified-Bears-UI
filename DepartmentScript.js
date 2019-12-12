if(window.sessionStorage.accessToken!=='undefined'){
console.log("token is "+window.sessionStorage.accessToken);
const app = document.getElementById('dept-description')
var html = ""

const redraw = document.createElement('div')
app.appendChild(redraw)

console.log(app.innerHTML)


var request = new XMLHttpRequest()
request.open('GET', 'http://localhost:8080/department/all', true)
request.setRequestHeader('Authorization','Bearer '+window.sessionStorage.accessToken);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
data.forEach(function(result, i) {
	html = '<div class="col-lg-3 col-md-6 d-flex mb-sm-4 ftco-animate fadeInUp ftco-animated"><div class="staff"><div class="info text-center"><h2><a href="“#”">'+result.dept_name+'</a></h2><div class="position">'+result.dept_desc+'</div></div></div></div>'
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