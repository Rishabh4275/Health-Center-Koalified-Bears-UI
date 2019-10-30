package com.kolafied.bearsui.HealthCareUI.controller;


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
@RequestMapping({"/patients"})
public class PatientController {
    @Value("${rest.uri}")
    String uri;

    @RequestMapping("/index")
    public String index(Model model){
        model.addAttribute("datetime", new Date());
        model.addAttribute("username", "Rishabh");
        model.addAttribute("projectname", "Kolafied Bears HealthCare");
        return "index";
    }

    @RequestMapping("/")
    public String home(Model model){
        String homeUri = this.uri + "/patients/all";
        RestTemplate restTemplate = new RestTemplate();
        //List<Patient> allPatients = restTemplate.getForObject(homeUri, List.class);
        ResponseEntity<List<Patient>> response = restTemplate.exchange(
                homeUri,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<Patient>>(){});
        List<Patient> allPatients = response.getBody();
        model.addAttribute("patients", allPatients);
        return "patients";
    }

    @RequestMapping(value = "/patiententry", method = RequestMethod.GET)
    public String newEntry(Model model) {
        model.addAttribute("Action", "/patients/patiententry");
        model.addAttribute("patientId", "");
        model.addAttribute("firstName", "");
        model.addAttribute("lastName", "");
        model.addAttribute("email", "");
        model.addAttribute("age", "");
        model.addAttribute("sex", "");
        model.addAttribute("mobile", "");
        model.addAttribute("address", "");
        return "patiententry";
    }

    @RequestMapping(value = "/patiententry", method = RequestMethod.POST)
    public String addPatient(@RequestParam Long patientId,@RequestParam String firstName,@RequestParam String lastName,@RequestParam String email,@RequestParam int age,@RequestParam String sex,@RequestParam String mobile,@RequestParam String address) {
        Patient newPatient = new Patient( patientId, firstName, lastName, email, age, sex, mobile, address);
        String entryUri = this.uri + "/patients/add";
        RestTemplate restTemplate = new RestTemplate();
        Patient patient = restTemplate.postForObject(entryUri, newPatient, Patient.class);
        return "redirect:/patients/";
    }



    @RequestMapping(value = "/patiententry/{id}", method = RequestMethod.GET)
    public String editPatient(@PathVariable(value = "id") Long id, Model model) {
        String entryId = this.uri + "/patients/"+id;
        RestTemplate restTemplate = new RestTemplate();
        Patient patient = restTemplate.getForObject(entryId, Patient.class);
        //Patient patient= entryRepository.findOne(entryId);

        model.addAttribute("action", "/patiententry/" + id);
        model.addAttribute("firstName", patient.getFirstName());
        model.addAttribute("lastName", patient.getLastName());
        model.addAttribute("email", patient.getEmail());
        model.addAttribute("age", patient.getAge());
        model.addAttribute("sex", patient.getSex());
        model.addAttribute("mobile", patient.getMobile());
        model.addAttribute("address", patient.getAddress());
        return "patiententry";
    }

    @RequestMapping(value = "/patiententry/{id}", method = RequestMethod.POST)
    public String updateEntry(@PathVariable(value = "id") Long id
                              ,@RequestParam String firstName,@RequestParam String lastName,@RequestParam String email,@RequestParam int age,@RequestParam String sex,@RequestParam String mobile,@RequestParam String address) {
        String entryPut = this.uri + "/patients/"+id;
        RestTemplate restTemplate = new RestTemplate();
        Patient patient = restTemplate.getForObject(entryPut, Patient.class);

        patient.setFirstName(firstName);
        patient.setLastName(lastName);
        patient.setEmail(email);
        patient.setAge(age);
        patient.setSex(sex);
        patient.setMobile(mobile);
        patient.setAddress(address);
        restTemplate.put(entryPut, patient);
        return "redirect:/patients/";
    }

    @RequestMapping(value = "/patiententry/delete/{id}", method = RequestMethod.GET)
    public String deleteEntry(@PathVariable(value = "id") Long id) {
        String entryDel = this.uri + "/patients/"+id;
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(entryDel);
        return "redirect:/patients/";
    }


}
