package com.animalnewsbackend.animal_newsbackend.configs;

import com.animalnewsbackend.animal_newsbackend.services.CrawlerExternalService;
import java.time.Instant;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@Configuration
@Slf4j
@EnableScheduling
@RequiredArgsConstructor
public class SchedulingConfig {

  private final CrawlerExternalService crawlerExternalService;

  @Scheduled(cron = "${crawler.cron-expression}")
  public void startCrawlerCronJob() {
    log.info("Running startCrawlerCronJob at {}", Instant.now());
    crawlerExternalService.startCrawler();
  }
}
