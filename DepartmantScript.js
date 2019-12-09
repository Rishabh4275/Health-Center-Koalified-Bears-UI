const app = document.getElementById('department-list')
var html = ""

/*const redraw = document.createElement('div')
app.appendChild(redraw)
*/
console.log(app.innerHTML)


var request = new XMLHttpRequest()
request.open('GET', 'https://kolafiedbearsboot.herokuapp.com/department/all', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
data.forEach(function(result, i) {
	i=i+1
	html = '<a class="nav-link ftco-animate fadeInUp ftco-animated" id="v-pills-'+i+'-tab" data-toggle="pill" href="#v-pills-'+i+'" role="tab" aria-controls="v-pills-'+i+'" aria-selected="false">'+result.deptName+'</a>'
	app.innerHTML += html
})
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Error..!`
    app.appendChild(errorMessage)
  }
}
request.send()
