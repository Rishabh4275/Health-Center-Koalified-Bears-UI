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
    private Long id;
    @NotBlank
    private String name;
    @NotBlank
    private String email;
    private String phone;
    @NotBlank
    private int doctor_id;


}
