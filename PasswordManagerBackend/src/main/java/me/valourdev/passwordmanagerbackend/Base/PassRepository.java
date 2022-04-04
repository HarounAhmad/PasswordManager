package me.valourdev.passwordmanagerbackend.Base;

import me.valourdev.passwordmanagerbackend.Base.Entry;
import me.valourdev.passwordmanagerbackend.SpringSecurity.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PassRepository extends CrudRepository<Entry, Long> {
    @Query(value = "SELECT * FROM entries WHERE owner = ?1", nativeQuery = true)
    List<Entry> findByOwnership(long id);
}
