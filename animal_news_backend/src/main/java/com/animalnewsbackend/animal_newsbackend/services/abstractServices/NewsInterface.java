package com.animalnewsbackend.animal_newsbackend.services.abstractServices;

import com.animalnewsbackend.animal_newsbackend.entities.News;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Optional;

public interface NewsInterface {
    Optional<Page<News>>  getAllPartialNews(int page, int size);
    Optional<News>  getNewsDetail(String id);
}
