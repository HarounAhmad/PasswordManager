package me.valourdev.passwordmanagerbackend.Base;

import me.valourdev.passwordmanagerbackend.Base.Entry;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PassRepository extends CrudRepository<Entry, Long> {
}
