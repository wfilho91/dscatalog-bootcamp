package com.devsuperior.dscatalog.dto;

import java.io.Serializable;

import com.devsuperior.dscatalog.services.validation.UserInsertValid;
import com.devsuperior.dscatalog.services.validation.UserUpdateValid;

@UserUpdateValid
public class UserUpdateDTO extends UserDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	
}