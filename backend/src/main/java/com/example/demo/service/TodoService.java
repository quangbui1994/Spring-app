package com.example.demo.service;

import com.example.demo.exception.EntityNotFoundException;
import com.example.demo.models.Todo;
import com.example.demo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    public List<Todo> findAll() {
        return todoRepository.findAll();
    }

    public Todo findById(String id) {
        return todoRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    public Todo create(Todo todo) {
        return todoRepository.save(todo);
    }

    public Todo update(Todo todo) {
        return todoRepository.save(todo);
    }

    public void deleteById(String id) {
        todoRepository.deleteById(id);
    }
}
