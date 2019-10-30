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
        model.addAttribute("case_id", "");
        model.addAttribute("patient_id", "");
        model.addAttribute("diagnose_code", "");
        model.addAttribute("insurance_id", "");
        model.addAttribute("date_of_admission", "");
        model.addAttribute("doctor_id", "");
        return "patienthistoryentry";
    }

    @RequestMapping(value = "/patienthistoryentry", method = RequestMethod.POST)
    public String addDoctor(@RequestParam int case_id, @RequestParam int patient_id, @RequestParam String diagnose_code, @RequestParam String insurance_id,@RequestParam Date date_of_admission, @RequestParam int doctor_id) {
        PatientHistory newPatientHistory = new PatientHistory( case_id, patient_id, diagnose_code, insurance_id,date_of_admission, doctor_id);
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
        model.addAttribute("case_id", patientHistory.getCase_id());
        model.addAttribute("patient_id", patientHistory.getPatient_id());
        model.addAttribute("diagnose_code", patientHistory.getDiagnose_code());
        model.addAttribute("insurance_id", patientHistory.getInsurance_id());
        model.addAttribute("date_of_admission", patientHistory.getDate_of_admission());
        model.addAttribute("doctor_id", patientHistory.getDoctor_id());
        return "patienthistoryentry";
    }

    @RequestMapping(value = "/patienthistoryentry/{id}", method = RequestMethod.POST)
    public String updateEntry(@PathVariable(value = "id") Long id,
                              @RequestParam int patient_id, @RequestParam String diagnose_code, @RequestParam String insurance_id,@RequestParam Date date_of_admission, @RequestParam int doctor_id) {
        String entryPut = this.uri + "/patienthistory/"+id;
        RestTemplate restTemplate = new RestTemplate();
        PatientHistory patientHistory= restTemplate.getForObject(entryPut, PatientHistory.class);

        patientHistory.setPatient_id(patient_id);
        patientHistory.setDiagnose_code(diagnose_code);
        patientHistory.setInsurance_id(insurance_id);
        patientHistory.setDate_of_admission(date_of_admission);
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
