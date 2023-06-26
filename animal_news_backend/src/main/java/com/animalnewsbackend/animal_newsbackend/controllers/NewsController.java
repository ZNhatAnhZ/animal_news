package com.animalnewsbackend.animal_newsbackend.controllers;

import com.animalnewsbackend.animal_newsbackend.entities.News;
import com.animalnewsbackend.animal_newsbackend.services.implementedServices.NewsService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:80")
@RestController
@RequestMapping("/news")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class NewsController {
    private final NewsService newsService;
    @GetMapping("/index")
    public ResponseEntity<Page<News>> index(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "15") int size) {
        return ResponseEntity.ok(newsService.getAllPartialNews(page, size).get());
    }

    @GetMapping("/detail")
    public ResponseEntity<News> detail(@RequestParam String id) {
        Optional<News> news = newsService.getNewsDetail(id);
        return news.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.badRequest().body(new News()));
    }
}
