package com.kolafied.bearsui.HealthCareUI.model;


import javax.validation.constraints.NotBlank;
import lombok.*;


import java.util.Date;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter
public class Doctor {
    @NotBlank
    private Long doctor_id;
    @NotBlank
    private String name;
    @NotBlank
    private String specialization;
    private int mobile;
    @NotBlank
    private String email;
    private String address;
}
