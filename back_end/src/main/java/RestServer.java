import com.google.gson.Gson;
import dao.ListingDao;
import dto.ListingDto;
import pointofsale.ListingService;
import processor.ViewListingsProcessor;
import spark.Request;
import spark.Response;

import static spark.Spark.*;

public class RestServer {
    public static void main(String[] args){
         // react has a proxy from 3000 -> 1234
        port(1234);

        // put this before get handlers
        webSocket("/ws", WebSocketHandler.class);

        Gson gson = new Gson();
        ListingDao db = ListingDao.getInstance();

        // Your Handlers go here
        // To get to the home page with the view of listings
        get("/", (req, res) -> {
            //res.redirect("/Home.js");
            res.type("application/json");
            return ListingService.getInstance().restApi(req.url(),req.body());

        },gson::toJson);

        // Route to add a listing, deleteListing, and viewListing
        path("/api", () -> {
           post("/createListing", (request, response) -> {
                  ListingDto listing = gson.fromJson(request.body(),ListingDto.class);
                  db.insert(listing);
               return "added";
           });
           delete("/deleteListing", (request, response) -> {
               db.delete(request.params("id"));
               return "deleted";
               });
            get("/viewListings", (request, response) ->{
                return db.getItems();
            });

            put("/updateListings", RestServer::updateListing);
        });


    }
    public static String updateListing(Request req, Response res){
        String postId = req.queryMap().get("postId").value();
        if(postId != null){
            // Then we are updating a listing

        }
        return "no postId";
    }
}
