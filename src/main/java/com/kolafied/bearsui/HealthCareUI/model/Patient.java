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
    @NotBlank
    private Long patientId;
    @NotBlank
    private String firstName;
    private String lastName;
    @NotBlank
    private String email;
    private int age;
    private String sex;
    private String mobile;
    private String address;
}
