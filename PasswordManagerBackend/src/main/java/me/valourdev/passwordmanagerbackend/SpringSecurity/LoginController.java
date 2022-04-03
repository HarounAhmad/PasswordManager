package me.valourdev.passwordmanagerbackend.SpringSecurity;

import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.Base64;
import java.util.List;

@RestController
@CrossOrigin
public class LoginController {

    private final UserRepository userRepository;
    private boolean isValid = false;

    public LoginController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @RequestMapping("/api/v1/auth/login/{username}/{password}")
    public boolean login(@RequestBody User user, @PathVariable String username, @PathVariable String password) {
        return validateLogin(username, password);
    }

    public boolean validateLogin(String username, String password) {

        List<User> users = (List<User>) userRepository.findAll();
        users.forEach(user -> {
            if (user.getUsername().equals(username) && user.getPassword().equals(password)) {
                System.out.println("Correct username and password");
                System.out.println(user);
                isValid = true;
            }

        });
        System.out.println(isValid);
        return isValid;
    }

    @RequestMapping("/api/v1/auth/user")
    public Principal user(HttpServletRequest request) {
        String authToken = request.getHeader("Authorization")
                .substring("Basic".length()).trim();
        return () -> new String(Base64.getDecoder()
                .decode(authToken)).split(":")[0];
    }
}
