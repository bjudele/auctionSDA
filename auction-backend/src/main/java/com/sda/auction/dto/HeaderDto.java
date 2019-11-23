package com.sda.auction.dto;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode
@Data
public class HeaderDto {

	private String firstName;

	private boolean isAdmin;

	private boolean isUser;

}
