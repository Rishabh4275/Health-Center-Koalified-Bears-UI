package com.kolafied.bearsui.HealthCareUI.model;


import javax.validation.constraints.NotBlank;
import lombok.*;


import java.util.Date;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter
public class PatientHistory {
    @NotBlank
    private int case_id;
    @NotBlank
    private int patient_id;
    private String diagnose_code;
    private String insurance_id;
    @NotBlank
    private Date date_of_admission;
    @NotBlank
    private int doctor_id;


}
