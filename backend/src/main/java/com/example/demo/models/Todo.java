package com.example.demo.models;

import org.springframework.data.annotation.Id;

import java.util.UUID;

public class Todo {
    @Id
    private String id;
    private String name;
    private Boolean complete;

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Boolean getComplete() {
        return complete;
    }

    public Todo(String id, String name, Boolean complete) {
        this.id = id;
        this.name = name;
        this.complete = complete;
    }
}
