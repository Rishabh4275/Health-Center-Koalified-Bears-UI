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
    private Long id;
    @NotBlank
    private String name;
    @NotBlank
    private String email;
    private String phone;

    public Patient(String name,String  email,String  phone){
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}
