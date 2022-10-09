package com.spORtify.web.utilities;

public class Constants {

    public static final String BASE_PATH = "/";
    public static final String HOME_PATH = BASE_PATH + "home";
    public static final String BASE_REGEX_PATH = "**";

    //security
    public static final String AUTHORIZATION_PATH = "/authorization";
    public static final String LOGIN_PATH = AUTHORIZATION_PATH + "/login";
    public static final String LOGIN_CHANGE_PASSWORD_PATH = LOGIN_PATH + "/change/password";
    public static final String REGISTRATION_PATH = AUTHORIZATION_PATH + "/register";
    public static final String REGISTRATION_SAVE_PATH = REGISTRATION_PATH + "/register/save";

    //user
    public static final String USER_PATH = "/user";
    public static final String USER_CHANGE_PRIVATE_DATA_PATH = USER_PATH + "/change/private/";
    public static final String USER_CHANGE_PHOTO_PATH = USER_PATH + "/change/photo/";
    public static final String USER_CHANGE_DESCRIPTION_PATH = USER_PATH + "/change/description/";

    // announcement
    public static final String ANNOUNCEMENT_PATH = "/announcement";

    //announcements
    public static final String ANNOUNCEMENTS_PATH = "/announcements";

    //notifications
    public static final String NOTIFICATIONS_PATH = "/notifications";
    public static final String ALL_NOTIFICATIONS_PATH = NOTIFICATIONS_PATH + "/all";
    public static final String REMINDER_NOTIFICATION_PATH = NOTIFICATIONS_PATH + "/reminder";



}
