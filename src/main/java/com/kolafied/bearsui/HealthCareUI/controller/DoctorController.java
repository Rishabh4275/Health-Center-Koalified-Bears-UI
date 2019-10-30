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
        model.addAttribute("case_id", "");
        model.addAttribute("patient_id", "");
        model.addAttribute("diagnose_code", "");
        model.addAttribute("insurance_id", "");
        model.addAttribute("date_of_admission", "");
        return "doctorentry";
    }

    @RequestMapping(value = "/doctorentry", method = RequestMethod.POST)
    public String addDoctor(@RequestParam int case_id,@RequestParam int patient_id,@RequestParam String diagnose_code,@RequestParam String insurance_id,@RequestParam Date date_of_admission) {
        Doctor newDoctor = new Doctor( case_id, patient_id, diagnose_code, insurance_id, date_of_admission);
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
        model.addAttribute("case_id", doctor.getCase_id());
        model.addAttribute("patient_id", doctor.getPatient_id());
        model.addAttribute("diagnose_code", doctor.getDiagnose_code());
        model.addAttribute("insurance_id", doctor.getInsurance_id());
        model.addAttribute("date_of_admission", doctor.getDate_of_admission());
        return "doctorentry";
    }

    @RequestMapping(value = "/doctorentry/{id}", method = RequestMethod.POST)
    public String updateEntry(@PathVariable(value = "id") Long id
            ,@RequestParam int patient_id,@RequestParam String diagnose_code,@RequestParam String insurance_id,@RequestParam Date date_of_admission) {
        String entryPut = this.uri + "/doctor/"+id;
        RestTemplate restTemplate = new RestTemplate();
        Doctor doctor= restTemplate.getForObject(entryPut, Doctor.class);

        doctor.setPatient_id(patient_id);
        doctor.setDiagnose_code(diagnose_code);
        doctor.setInsurance_id(insurance_id);
        doctor.setDate_of_admission(date_of_admission);
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
