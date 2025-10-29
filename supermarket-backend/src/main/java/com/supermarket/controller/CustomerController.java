package com.supermarket.controller;

import com.supermarket.model.Customer;
import com.supermarket.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    // ✅ Register API
    @PostMapping("/register")
    public Customer registerCustomer(@RequestBody Customer customer) {
        customer.setStatus("Applied");
        customer.setRegisteredDate(java.time.LocalDate.now());
        return customerRepository.save(customer);
    }

    // ✅ Login API
    @PostMapping("/login")
    public Customer loginCustomer(@RequestBody Customer loginRequest) {
        Customer existingCustomer = customerRepository.findByEmailAndPassword(
                loginRequest.getEmail(),
                loginRequest.getPassword()
        );

        if (existingCustomer != null) {
            return existingCustomer;
        } else {
            throw new RuntimeException("Invalid credentials");
        }
    }

    // ✅ View All Requests
    @GetMapping("/requests")
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }
}
