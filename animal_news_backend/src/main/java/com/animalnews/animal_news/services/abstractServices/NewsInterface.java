package com.animalnews.animal_news.services.abstractServices;

import com.animalnews.animal_news.entities.News;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Optional;

public interface NewsInterface {
    Optional<Page<News>>  getAllPartialNews(int page, int size);
    Optional<News>  getNewsDetail(String id);
}
