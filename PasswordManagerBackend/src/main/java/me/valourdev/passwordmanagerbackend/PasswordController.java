package me.valourdev.passwordmanagerbackend;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PasswordController {

    private final PassRepository passRepository;

    public PasswordController(PassRepository passRepository) {
        this.passRepository = passRepository;
    }

    @GetMapping("/api/v1/entries")
    public List<Entry> getEntries() {
        return (List<Entry>) passRepository.findAll();
    }

    @PostMapping("/api/v1/entries")
    void AddEntry (@RequestBody Entry entry){
        passRepository.save(entry);
    }

}
