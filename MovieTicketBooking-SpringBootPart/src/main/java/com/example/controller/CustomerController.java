package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Customer;
import com.example.repository.CustomerRepository;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/cus")
public class CustomerController {
	@Autowired
	private CustomerRepository customerRepository;

	@GetMapping("/employees")
	public List<Customer> getAllCustomers() {
		return customerRepository.findAll();
	}
	@GetMapping("/hello")
	public void getAllCustomer() {
		System.out.println("Hello");
	}
	
	
}
