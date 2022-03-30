package me.valourdev.passwordmanagerbackend.Base;

import org.hibernate.annotations.Type;
import javax.persistence.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Table(name = "entries")
public class Entry {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Type(type="encryptedString")
    @Column(name = "title")
    private String title;

    @Type(type="encryptedString")
    @Column(name = "loginText")
    private String loginText;


    @Type(type="encryptedString")
    @Column(name = "url")
    private String URL;


    @Type(type="encryptedString")
    @Column(name = "password")
    private String password;

    public Entry(
                long id,
                String title,
                String loginText,
                String url,
                String password
    ) {
        this.id = id;
        this.title = title;
        this.loginText = loginText;
        this.URL = url;
        this.password = password;
    }

    public Entry() {

    }

    @Override
    public String toString() {
        return String.format(
                "Task[id=%d, title='%s', loginText='%s', password='%s']",
                id, title, loginText, password
        );
    }

    public String getURL() {
        return URL;
    }

    public void setURL(String URL) {
        this.URL = URL;
    }

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLoginText() {
        return loginText;
    }

    public void setLoginText(String loginText) {
        this.loginText = loginText;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
