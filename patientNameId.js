let pat = document.getElementById('patient-down');
console.log(pat)
pat.length = 0;

let opt = document.createElement('option');
opt.text = 'Select Patient';

pat.add(opt);
pat.selectedIndex = 0;

const paturl = 'https://kolafiedbearsboot.herokuapp.com/patients/all';

const req = new XMLHttpRequest();
req.open('GET', paturl, true);

req.onload = function() {
  if (req.status === 200) {
    const data = JSON.parse(req.responseText);
    let opt1;
    for (let i = 0; i < data.length; i++) {
      opt1 = document.createElement('option');
      console.log(data[i])
      opt1.text = data[i].firstName+' '+data[i].lastName;
      opt1.value=data[i].patientId;
	  pat.add(opt1);
     
    }
   } else {
    // Reached the server, but it returned an error
  }   
}

req.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + paturl);
};

req.send(); 