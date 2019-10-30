package com.kolafied.bearsui.HealthCareUI.controller;


import com.kolafied.bearsui.HealthCareUI.model.Doctor;
import com.kolafied.bearsui.HealthCareUI.model.Patient;
import com.kolafied.bearsui.HealthCareUI.model.PatientHistory;
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
@RequestMapping({"/patienthistory"})
public class PatientHistoryController {
    @Value("${rest.uri}")
    String uri;

    @RequestMapping("/")
    public String home(Model model){
        String homeUri = this.uri + "/patienthistory/all";
        RestTemplate restTemplate = new RestTemplate();
        //List<Patient> allPatients = restTemplate.getForObject(homeUri, List.class);
        ResponseEntity<List<PatientHistory>> response = restTemplate.exchange(
                homeUri,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<PatientHistory>>(){});
        List<PatientHistory> allPatientHistory= response.getBody();
        model.addAttribute("patienthistory", allPatientHistory);
        return "patienthistory";
    }

    @RequestMapping(value = "/patienthistoryentry", method = RequestMethod.GET)
    public String newEntry(Model model) {
        model.addAttribute("Action", "/doctor/doctorentry");
        model.addAttribute("id", "");
        model.addAttribute("name", "");
        model.addAttribute("email", "");
        model.addAttribute("phone", "");
        model.addAttribute("doctor_id", "");
        return "patienthistoryentry";
    }

    @RequestMapping(value = "/patienthistoryentry", method = RequestMethod.POST)
    public String addDoctor(@RequestParam Long id, @RequestParam String name, @RequestParam String email, @RequestParam String phone, @RequestParam int doctor_id) {
        PatientHistory newPatientHistory = new PatientHistory( id, name, email, phone, doctor_id);
        String entryUri = this.uri + "/patienthistory/add";
        RestTemplate restTemplate = new RestTemplate();
        PatientHistory patient = restTemplate.postForObject(entryUri, newPatientHistory, PatientHistory.class);
        return "redirect:/patienthistory/";
    }



    @RequestMapping(value = "/patienthistoryentry/{id}", method = RequestMethod.GET)
    public String editPatient(@PathVariable(value = "id") Long id, Model model) {
        String entryId = this.uri + "/patienthistory/"+id;
        RestTemplate restTemplate = new RestTemplate();
        PatientHistory patientHistory = restTemplate.getForObject(entryId, PatientHistory.class);
        //Patient patient= entryRepository.findOne(entryId);

        model.addAttribute("action", "/patienthistoryentry/" + id);
        model.addAttribute("id", patientHistory.getId());
        model.addAttribute("name", patientHistory.getName());
        model.addAttribute("email", patientHistory.getEmail());
        model.addAttribute("phone", patientHistory.getPhone());
        model.addAttribute("doctor_id", patientHistory.getDoctor_id());
        return "patienthistoryentry";
    }

    @RequestMapping(value = "/patienthistoryentry/{id}", method = RequestMethod.POST)
    public String updateEntry(@PathVariable(value = "id") Long id,
             @RequestParam String name, @RequestParam String email, @RequestParam String phone, @RequestParam int doctor_id) {
        String entryPut = this.uri + "/patienthistory/"+id;
        RestTemplate restTemplate = new RestTemplate();
        PatientHistory patientHistory= restTemplate.getForObject(entryPut, PatientHistory.class);

        patientHistory.setName(name);
        patientHistory.setEmail(email);
        patientHistory.setPhone(phone);
        patientHistory.setDoctor_id(doctor_id);
        restTemplate.put(entryPut, patientHistory);
        return "redirect:/patienthistory/";
    }

    @RequestMapping(value = "/patienthistoryentry/delete/{id}", method = RequestMethod.GET)
    public String deleteEntry(@PathVariable(value = "id") Long id) {
        String entryDel = this.uri + "/patienthistory/"+id;
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(entryDel);
        return "redirect:/patienthistory/";
    }
}
