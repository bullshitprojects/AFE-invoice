package com.invoice.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class ProductController {
    @Autowired private ProductService service;

    @GetMapping("/product")
    public String showProductList(Model model){
        List<Product> productList = service.listAll();
        model.addAttribute("productList", productList);
        return "product";
    }

    @PostMapping("/product/save")
    public String saveProduct(Product product){
        service.save(product);
        return "redirect:/";
    }

}
