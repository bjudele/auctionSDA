package com.sda.auction.controller;

import com.sda.auction.dto.UserDto;
import javax.jws.soap.SOAPBinding.Use;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/register")
public class Registration {

	@GetMapping
	public ResponseEntity<String> get() {
		return new ResponseEntity<>("hello world", HttpStatus.OK);
	}


	@PostMapping(consumes = "application/json", produces = "application/json")
	public ResponseEntity<UserDto> post(@Valid @RequestBody UserDto userDto) {
		System.out.println("am primit " + userDto);


		return new ResponseEntity<>(userDto, HttpStatus.OK);
	}
}
