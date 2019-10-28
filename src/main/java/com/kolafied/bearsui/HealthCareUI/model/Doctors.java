package com.kolafied.bearsui.HealthCareUI.model;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter
public class Doctors {
	private int doctor_id;
    @NotBlank
	private String first_name;
	private String last_name;
	@NotBlank
	private String specialization;
	private int mobile;
	@NotBlank
	private String email;
	private String address;
}
