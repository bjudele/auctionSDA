package com.sda.auction.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode
@Data
public class ItemDto {

	private Integer id;

	@NotEmpty(message = "Please insert item's name")
	@Pattern(regexp = "[A-Za-z ]+", message = "Letters and spaces only!")
	private String name;

	@NotEmpty(message = "Please insert item's description")
	private String description;

	@Positive
	private int startingPrice;

	@NotEmpty
	private String category;

	@NotEmpty
	private String startDate;

	@NotEmpty
	private String endDate;

	@NotEmpty
	private String photo;

}
