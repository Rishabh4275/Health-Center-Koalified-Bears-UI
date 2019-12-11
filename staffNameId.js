let staff = document.getElementById('staff-down');
console.log(staff)
staff.length = 0;

let opt = document.createElement('option');
opt.text = 'Select Staff';

staff.add(opt);
staff.selectedIndex = 0;

const staffurl = 'http://localhost:8080/staff/all';

const req = new XMLHttpRequest();
req.open('GET', staffurl, true);

req.onload = function() {
  if (req.status === 200) {
    const data = JSON.parse(req.responseText);
    let opt1;
    for (let i = 0; i < data.length; i++) {
      opt1 = document.createElement('option');
      console.log(data[i])
      opt1.text = data[i].name;
      opt1.value=data[i].eid;
	  staff.add(opt1);
     
    }
   } else {
    // Reached the server, but it returned an error
  }   
}

req.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + staffurl);
};

req.send(); 