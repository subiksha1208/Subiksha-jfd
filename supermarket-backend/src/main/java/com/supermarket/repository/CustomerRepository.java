package com.supermarket.repository;

import com.supermarket.model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends MongoRepository<Customer, String> {

    // ✅ For login
    Customer findByEmailAndPassword(String email, String password);

    // ✅ For checking email existence
    Customer findByEmail(String email);
}
