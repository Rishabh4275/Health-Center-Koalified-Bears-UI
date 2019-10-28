package com.kolafied.bearsui.HealthCareUI.model;

import java.util.Date;

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
public class Patient_History {
	private int case_id;
	@NotBlank
	private int patient_id;
	private String diagnose_code;
	private String insurance_id;
	@NotBlank
	private Date date_of_admission;


}
