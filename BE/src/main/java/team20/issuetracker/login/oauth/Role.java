package team20.issuetracker.login.oauth;

import lombok.Getter;

@Getter
public enum Role {

    GUEST("GUEST"),
    USER("USER");

    private final String key;

    Role(String key) {
        this.key = key;
    }
}
