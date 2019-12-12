if(window.sessionStorage.accessToken!=='undefined'){
var docid = document.getElementById('doctor-down');
console.log(docid)
docid.length = 0;

var doctext = document.createElement('option');
doctext.text = 'Select Doctor';

docid.add(doctext);
docid.selectedIndex = 0;

const docurl = 'http://localhost:8080/doctors/all';

const docreq = new XMLHttpRequest();
docreq.open('GET', docurl, true);
docreq.setRequestHeader('Authorization','Bearer '+window.sessionStorage.accessToken);

docreq.onload = function() {
  if (docreq.status === 200) {
    const docdata = JSON.parse(docreq.responseText);
    let docopt;
    for (let i = 0; i < docdata.length; i++) {
      docopt = document.createElement('option');
      console.log(docdata[i])
      docopt.text = docdata[i].name;
      docopt.value=docdata[i].doctor_id;
	  docid.add(docopt);
     
    }
   } else {
    // Reached the server, but it returned an error
  }   
}

docreq.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + paturl);
};

docreq.send(); 
}