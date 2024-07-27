package com.animalnewsbackend.animal_newsbackend.repositories;

import com.animalnewsbackend.animal_newsbackend.entities.News;
import org.springframework.data.jpa.repository.JpaRepository;


public interface NewsRepository extends JpaRepository<News, String> {
}
