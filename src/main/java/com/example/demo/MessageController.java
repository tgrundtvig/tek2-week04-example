package com.example.demo;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    private final MessageRepository repository;

    public MessageController(MessageRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Message> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public Message create(@RequestBody Message message) {
        message.setCreatedAt(java.time.LocalDateTime.now());
        return repository.save(message);
    }
}
