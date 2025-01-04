package com.animalnewsbackend.animal_newsbackend.controllers;

import com.animalnewsbackend.animal_newsbackend.entities.News;
import com.animalnewsbackend.animal_newsbackend.services.NewsService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/news")
@RequiredArgsConstructor
public class NewsController {

  private final NewsService newsService;

  @GetMapping("/index")
  public ResponseEntity<Page<News>> index(
      @RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "15") int size) {
    return ResponseEntity.ok(newsService.getAllPartialNews(page, size));
  }

  @GetMapping("/{id}/detail")
  public ResponseEntity<News> detail(@PathVariable String id) {
    return ResponseEntity.ok(newsService.getNewsDetail(id));
  }
}
