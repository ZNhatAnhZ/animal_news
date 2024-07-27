package com.animalnewsbackend.animal_newsbackend.services;

import com.animalnewsbackend.animal_newsbackend.ResourceNotFoundException;
import com.animalnewsbackend.animal_newsbackend.entities.News;
import com.animalnewsbackend.animal_newsbackend.repositories.NewsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NewsService {

    private final NewsRepository newsRepository;

    public Page<News> getAllPartialNews(int page, int size) {
        Page<News> pageList = newsRepository
                .findAll(PageRequest.of(page, size, Sort.by("created_on").descending()));

        return pageList.map(e -> {
            e.setImages(List.of(e.getImages().getFirst()));
            e.setCreatedOn(e.getCreatedOn());
            e.setContent(e.getContent().substring(0, 400));
            return e;
        });
    }

    public News getNewsDetail(String id) {
        return newsRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(String.format("Can not find the news with id: %s", id)));
    }
}
