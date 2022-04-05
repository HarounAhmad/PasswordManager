package me.valourdev.passwordmanagerbackend.Base;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.WebApplicationContext;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@CrossOrigin
public class PasswordController {
    @Autowired
    private WebApplicationContext context;

    private final PassRepository passRepository;
    public PasswordController(PassRepository passRepository) {
        this.passRepository = passRepository;
    }

    @GetMapping("/api/v1/app/entries")
    public List<Entry> getEntries() {
        System.out.println("UserID: " + context.getServletContext().getAttribute("UserID"));
        return passRepository.findByOwnership(Long.parseLong(context.getServletContext().getAttribute("UserID").toString()));
    }

    @PostMapping("/api/v1/app/entries")
    void AddEntry (@RequestBody Entry entry){
        entry.setUser_id(Long.parseLong(context.getServletContext().getAttribute("UserID").toString()));
        passRepository.save(entry);
    }

    @DeleteMapping("/api/v1/app/entries/{id}")
    void deleteEntry(@PathVariable long id){
        var entry = passRepository.findById(id);
        if (entry.isPresent()){
            passRepository.delete(entry.get());
        } else {
            System.out.println("Entry does not exist");
        }
    }

    @PutMapping("/api/v1/app/entries")
    void editEntry(@RequestBody Entry entry){
        var currentEntry = passRepository.findById(entry.getId());
        if(currentEntry.isPresent()){
            currentEntry = java.util.Optional.of(
                    new Entry(
                            currentEntry.get().getId(),
                            entry.getTitle(),
                            entry.getLoginText(),
                            entry.getPassword(),
                            entry.getURL(),
                            entry.getUser_id()
                    )
            );
            passRepository.save(currentEntry.get());
        } else {
            System.out.println("Entry does not exist");
        }
    }

}
