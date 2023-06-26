package com.animalnews.animal_news.repositories;

import com.animalnews.animal_news.entities.News;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface NewsRepository extends MongoRepository<News, String> {
}
