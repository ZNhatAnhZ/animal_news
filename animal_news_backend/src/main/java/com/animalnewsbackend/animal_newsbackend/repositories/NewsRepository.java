package com.animalnewsbackend.animal_newsbackend.repositories;

import com.animalnewsbackend.animal_newsbackend.entities.News;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface NewsRepository extends MongoRepository<News, String> {
}
