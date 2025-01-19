package com.animalnewsbackend.animal_newsbackend.controllers;

import com.animalnewsbackend.animal_newsbackend.services.CrawlerExternalService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/test")
@RequiredArgsConstructor
public class TestController {

  private final CrawlerExternalService crawlerExternalService;

  @GetMapping("/cronJob")
  public ResponseEntity<Void> index() {
    crawlerExternalService.startCrawler();
    return ResponseEntity.ok().build();
  }
}
