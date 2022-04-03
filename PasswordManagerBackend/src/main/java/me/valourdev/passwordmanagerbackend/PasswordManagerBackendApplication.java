package me.valourdev.passwordmanagerbackend;

import me.valourdev.passwordmanagerbackend.SpringSecurity.User;
import me.valourdev.passwordmanagerbackend.SpringSecurity.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;


@SpringBootApplication
public class PasswordManagerBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(PasswordManagerBackendApplication.class, args);
    }

    @Bean
    CommandLineRunner init(UserRepository userRepository) {
        return args -> {
            Stream.of("John", "Julie", "Jennifer", "Helen", "Rachel").forEach(name -> {
                User user = new User(name, "admin" );
                userRepository.save(user);
            });
            userRepository.findAll().forEach(System.out::println);
        };
    }

}
