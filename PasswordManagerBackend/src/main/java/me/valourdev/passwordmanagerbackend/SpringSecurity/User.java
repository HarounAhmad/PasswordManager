package me.valourdev.passwordmanagerbackend.SpringSecurity;


import javax.persistence.*;


@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

   // @Type(type="encryptedString")
    @Column(name = "username")
    private String username;

   // @Type(type="encryptedString")
    @Column(name = "password")
    private String password;


    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

    public User(String username, String password) {
      //  this.id = id;
        this.username = username;
        this.password = password;
    }

    public User() {
    }

    


    public long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }



    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}
