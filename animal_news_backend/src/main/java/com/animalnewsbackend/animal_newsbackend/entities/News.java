package com.animalnewsbackend.animal_newsbackend.entities;

import io.hypersistence.utils.hibernate.type.json.JsonType;
import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;
import lombok.*;
import org.hibernate.annotations.Type;
import org.springframework.data.annotation.CreatedDate;

@Entity(name = "news")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class News {

  @Id @GeneratedValue private int id;

  private String title;

  private String date;

  @Type(JsonType.class)
  @Column(columnDefinition = "json")
  private List<String> images = new ArrayList<>();

  private String content;

  @CreatedDate private Long createdOn;
}
