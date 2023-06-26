package com.animalnews.animal_news.services.implementedServices;

import com.animalnews.animal_news.entities.News;
import com.animalnews.animal_news.repositories.NewsRepository;
import com.animalnews.animal_news.services.abstractServices.NewsInterface;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class NewsService implements NewsInterface {
    private final NewsRepository newsRepository;

    @Override
    public Optional<Page<News>> getAllPartialNews(int page, int size) {
        Page<News> pageList = newsRepository.findAll(PageRequest.of(page, size, Sort.by("created_on").descending()));
        List<News> newsList = pageList.getContent().stream().map(e -> {
            e.setImages(List.of(e.getImages().get(0)));
            e.setCreated_on(0L);
            e.setContent(e.getContent().substring(0, 400));
            return e;
        }).toList();

        Page<News> result = new PageImpl<News>(newsList,pageList.getPageable(),pageList.getTotalElements());
        return Optional.of(result);
    }

    @Override
    public Optional<News> getNewsDetail(String id) {
        return newsRepository.findById(id);
    }
}
