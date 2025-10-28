package com.supermarket.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.supermarket.model.Customer;

public interface CustomerRepository extends MongoRepository<Customer, String> {
    Customer findByEmail(String email);
}
