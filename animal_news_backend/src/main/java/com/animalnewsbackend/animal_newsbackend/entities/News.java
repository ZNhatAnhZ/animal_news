package com.animalnewsbackend.animal_newsbackend.entities;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.List;

@Document("news")
@Data
@NoArgsConstructor
public class News {
    @Id
    private String id;
    private String title;
    private String date;
    private List<String> images;
    private String content;
    private Long created_on;
}
