package com.sda.auction.mapper;

import com.sda.auction.dto.HeaderDto;
import io.jsonwebtoken.Claims;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class HeaderMapper {

	public HeaderDto map(Claims claim) {
		System.out.println(claim);
		HeaderDto headerDto = new HeaderDto();
		headerDto.setFirstName(claim.get("firstName", String.class));
		List<String> userRoles = claim.get("roles", ArrayList.class);
		for (String role : userRoles) {
			if (role.compareTo("admin") == 0) {
				headerDto.setAdmin(true);
			}
			if (role.compareTo("user") == 0) {
				headerDto.setUser(true);
			}
		}
		return headerDto;
	}
}
