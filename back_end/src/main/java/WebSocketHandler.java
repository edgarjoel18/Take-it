import com.google.gson.Gson;
import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.annotations.*;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Vector;
import java.util.concurrent.ConcurrentHashMap;

@WebSocket
public class WebSocketHandler {

    @OnWebSocketConnect
    public void connected(Session session) throws IOException {
        System.out.println("Client has connected");
    }

    @OnWebSocketClose
    public void closed(Session session, int statusCode, String reason){
        System.out.println("Client has disconnected");
    }

    @OnWebSocketMessage
    public void message(Session session, String message){
        System.out.println("Client has sent: " + message);
        // Would require a webSocket.send() in react in a handle function
    }

    @OnWebSocketError
    public void error(Session session, Throwable error){
        System.out.println("Error: " + error);
    }

}
