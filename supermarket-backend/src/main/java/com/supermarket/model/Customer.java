package com.supermarket.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDate;

@Document(collection = "customers")
public class Customer {

    @Id
    private String id;
    private String email;
    private String password;
    private String status;
    private LocalDate registeredDate;

    public Customer() {
        this.status = "Applied";
        this.registeredDate = LocalDate.now();
    }

    public Customer(String email, String password) {
        this.email = email;
        this.password = password;
        this.status = "Applied";
        this.registeredDate = LocalDate.now();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDate getRegisteredDate() {
        return registeredDate;
    }

    public void setRegisteredDate(LocalDate registeredDate) {
        this.registeredDate = registeredDate;
    }
}
