@TypeDefs({
        @TypeDef(
                name="encryptedString",
                typeClass= EncryptedStringType.class,
                parameters= {
                        @Parameter(name="encryptorRegisteredName", value="StringEncryptor")
                }
        )
})
package me.valourdev.passwordmanagerbackend.encryption;
import org.hibernate.annotations.Parameter;
import org.hibernate.annotations.TypeDef;
import org.hibernate.annotations.TypeDefs;
import org.jasypt.hibernate5.type.EncryptedStringType;