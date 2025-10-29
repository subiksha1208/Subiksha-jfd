package com.supermarket.service;

import com.supermarket.model.Customer;
import com.supermarket.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public Customer register(Customer customer) {
        return customerRepository.save(customer);
    }

    public Customer login(String email, String password) {
        return customerRepository.findByEmailAndPassword(email, password);
    }

    public Customer getByEmail(String email) {
        return customerRepository.findByEmail(email);
    }
}
