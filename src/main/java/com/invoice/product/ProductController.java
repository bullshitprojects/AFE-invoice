package com.invoice.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class ProductController {
    @Autowired private ProductService service;

    @GetMapping("/product")
    public ResponseEntity<List<Product>> getProductList() {
        return new ResponseEntity<>(service.listAll(), HttpStatus.OK);
    }

    @PostMapping("/product/save")
    public ResponseEntity<Void> saveOrUpdateProduct(@RequestBody Product product){
        service.save(product);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/product/deleteAll")
    public ResponseEntity<Void> deleteAllProducts() {
        service.deleteAllProducts();
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
