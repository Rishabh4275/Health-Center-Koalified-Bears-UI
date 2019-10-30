package com.kolafied.bearsui.HealthCareUI.controller;

import com.kolafied.bearsui.HealthCareUI.model.Doctor;
import com.kolafied.bearsui.HealthCareUI.model.Patient;
import org.omg.CORBA.Environment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.validation.Valid;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping({"/doctor"})
public class DoctorController {
    @Value("${rest.uri}")
    String uri;

    @RequestMapping("/")
    public String home(Model model){
        String homeUri = this.uri + "/doctors/all";
        RestTemplate restTemplate = new RestTemplate();
        //List<Patient> allPatients = restTemplate.getForObject(homeUri, List.class);
        ResponseEntity<List<Doctor>> response = restTemplate.exchange(
                homeUri,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<Doctor>>(){});
        List<Doctor> allDoctors= response.getBody();
        model.addAttribute("doctors", allDoctors);
        return "doctors";
    }

    @RequestMapping(value = "/doctorentry", method = RequestMethod.GET)
    public String newEntry(Model model) {
        model.addAttribute("Action", "/doctor/doctorentry");
        model.addAttribute("doctor_id", "");
        model.addAttribute("name", "");
        model.addAttribute("specialization", "");
        model.addAttribute("mobile", "");
        model.addAttribute("email", "");
        model.addAttribute("address", "");
        return "doctorentry";
    }

    @RequestMapping(value = "/doctorentry", method = RequestMethod.POST)
    public String addDoctor(@RequestParam Long doctor_id,@RequestParam String name,@RequestParam String specialization,@RequestParam int mobile,@RequestParam String email,@RequestParam String address ) {
        Doctor newDoctor = new Doctor( doctor_id, name, specialization, mobile, email, address);
        String entryUri = this.uri + "/patients/add";
        RestTemplate restTemplate = new RestTemplate();
        Patient patient = restTemplate.postForObject(entryUri, newDoctor, Patient.class);
        return "redirect:/doctor/";
    }



    @RequestMapping(value = "/doctorentry/{id}", method = RequestMethod.GET)
    public String editPatient(@PathVariable(value = "id") Long id, Model model) {
        String entryId = this.uri + "/doctor/"+id;
        RestTemplate restTemplate = new RestTemplate();
        Doctor doctor = restTemplate.getForObject(entryId, Doctor.class);
        //Patient patient= entryRepository.findOne(entryId);

        model.addAttribute("action", "/doctorentry/" + id);
        model.addAttribute("doctor_id", doctor.getDoctor_id());
        model.addAttribute("name", doctor.getName());
        model.addAttribute("specialization", doctor.getSpecialization());
        model.addAttribute("mobile", doctor.getMobile());
        model.addAttribute("email", doctor.getEmail());
        model.addAttribute("address", doctor.getAddress());
        return "doctorentry";
    }

    @RequestMapping(value = "/doctorentry/{id}", method = RequestMethod.POST)
    public String updateEntry(@PathVariable(value = "id") Long id
            ,@RequestParam String name,@RequestParam String specialization,@RequestParam int mobile,@RequestParam String email,@RequestParam String address ) {
        String entryPut = this.uri + "/doctor/"+id;
        RestTemplate restTemplate = new RestTemplate();
        Doctor doctor= restTemplate.getForObject(entryPut, Doctor.class);

        doctor.setName(name);
        doctor.setSpecialization(specialization);
        doctor.setMobile(mobile);
        doctor.setEmail(email);
        doctor.setAddress(address);
        restTemplate.put(entryPut, doctor);
        return "redirect:/doctor/";
    }

    @RequestMapping(value = "/doctorentry/delete/{id}", method = RequestMethod.GET)
    public String deleteEntry(@PathVariable(value = "id") Long id) {
        String entryDel = this.uri + "/doctor/"+id;
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(entryDel);
        return "redirect:/doctor/";
    }
}
