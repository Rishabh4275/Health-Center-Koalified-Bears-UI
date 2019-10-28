package com.kolafied.bearsui.HealthCareUI.model;



import javax.validation.constraints.NotBlank;
import lombok.*;



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
    private String address;
    
    @NotBlank
    private String email;
    private String phone;
    	
}
