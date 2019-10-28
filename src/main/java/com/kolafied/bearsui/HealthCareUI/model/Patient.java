package com.kolafied.bearsui.HealthCareUI.model;



import javax.validation.constraints.NotBlank;
import lombok.*;


import java.util.Date;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter
public class Patient {
    private Long patient_id;
    @NotBlank
    private String first_name;
    private String last_name;
    private int age;
    private String sex;
    private int mobile;
    private String insurance_id;
    private String address;
    
    @NotBlank
    private String email;
    private String phone;
    	
}
