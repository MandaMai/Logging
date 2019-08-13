package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;
import java.util.stream.Collectors;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
class CoolMusicController {
    private MusicRepository repository;

    public CoolMusicController(MusicRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/good-music")
    @CrossOrigin(origins = "http://localhost:4200")
    public Collection<Music> coolCars() {
        return repository.findAll().stream()
                .filter(this::isGood)
                .collect(Collectors.toList());
    }

    private boolean isGood(Music music) {
        return !music.getName().equals("Bad") &&
                !music.getName().equals("Eww");
    }
}