package com.spORtify.chat;

import com.spORtify.chat.model.Message;
import com.spORtify.data.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionConnectedEvent;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

import java.util.Objects;

@Component
@Slf4j
@AllArgsConstructor
public class WebSocketEventListener {

    private SimpMessageSendingOperations sendingOperations;

    private UserRepository userRepository;

    @EventListener
    public void handle(SessionConnectedEvent event) {
        log.info("new web socket connection");
    }

    @EventListener
    public void handleWebSocketDisconnectListener(SessionDisconnectEvent event) {
        StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(event.getMessage());

        var username = (String) Objects.requireNonNull(headerAccessor.getSessionAttributes()).get("username");
        var id = (String) Objects.requireNonNull(headerAccessor.getSessionAttributes()).get("id");
        if(username != null) {
            log.info("User disconnected : " + username);
            var user = userRepository.findUserByUserId(Long.parseLong(id));

            Message chatMessage = new Message();
            chatMessage.setSender(user);

            sendingOperations.convertAndSend("/topic/public", chatMessage);
        }
    }
}
