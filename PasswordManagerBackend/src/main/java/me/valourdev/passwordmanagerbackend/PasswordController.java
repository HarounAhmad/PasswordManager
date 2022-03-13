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

    @DeleteMapping("/api/v1/entries/{id}")
    void deleteEntry(@PathVariable long id){
        var entry = passRepository.findById(id);
        if (entry.isPresent()){
            passRepository.delete(entry.get());
        } else {
            System.out.println("Entry does not exist");
        }
    }

    @PutMapping("/api/v1/entries")
    void editEntry(@RequestBody Entry entry){
        var currentEntry = passRepository.findById(entry.getId());
        if(currentEntry.isPresent()){
            currentEntry = java.util.Optional.of(
                    new Entry(
                            currentEntry.get().getId(),
                            entry.getId(),
                            entry.getTitle(),
                            entry.getLoginText(),
                            entry.getPassword()
                    )
            );
            passRepository.save(currentEntry.get());
        } else {
            System.out.println("Entry does not exist");
        }
    }

}
