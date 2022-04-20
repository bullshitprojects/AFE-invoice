package com.invoice.controllers;

import com.invoice.product.Product;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;

@Controller
public class MainController {

    @GetMapping("")
    public String homePage(Model model){
        model.addAttribute("product", new Product());

        return "index";

    }

}
