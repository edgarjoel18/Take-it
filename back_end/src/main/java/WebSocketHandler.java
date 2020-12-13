import com.google.gson.Gson;
import dao.ListingDao;
import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.annotations.*;

import java.io.IOException;
import java.sql.SQLOutput;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@WebSocket
public class WebSocketHandler {

    private HashMap<Session,Session> sessionMap = new HashMap<>();
    private List<ListingDao> listings = new ArrayList<>();

    @OnWebSocketConnect
    public void connected(Session session) throws IOException {
        Gson gson = new Gson();
        sessionMap.put(session,session);
        System.out.println("Client has connected");
        session.getRemote().sendString(gson.toJson(listings));
    }

    @OnWebSocketClose
    public void closed(Session session, int statusCode, String reason){
        sessionMap.remove(session);
        System.out.println("Client disconnected");
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
