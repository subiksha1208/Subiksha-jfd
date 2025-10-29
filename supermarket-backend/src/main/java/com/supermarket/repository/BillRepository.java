package com.supermarket.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.supermarket.model.Bill;

public interface BillRepository extends MongoRepository<Bill, String> {
}
