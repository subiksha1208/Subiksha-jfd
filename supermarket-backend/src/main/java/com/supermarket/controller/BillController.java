package com.supermarket.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.supermarket.model.Bill;
import com.supermarket.service.BillService;
import java.util.List;

@RestController
@RequestMapping("/api/bills")
@CrossOrigin(origins = "http://localhost:3000")
public class BillController {

    @Autowired
    private BillService billService;

    // GET all bills
    @GetMapping("/all")
    public List<Bill> getAllBills() {
        return billService.getAllBills();
    }

    // POST new bill
    @PostMapping("/save")
    public Bill saveBill(@RequestBody Bill bill) {
        return billService.saveBill(bill);
    }
}
