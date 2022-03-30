package me.valourdev.passwordmanagerbackend;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PassRepository extends CrudRepository<Entry, Long> {
}
