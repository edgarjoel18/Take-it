import com.google.gson.Gson;
import dao.ListingDao;
import dto.ListingDto;
import dto.ResponseDto;
import org.bson.Document;
import pointofsale.ListingService;
import processor.Processor;
import processor.ProcessorFactory;
import processor.ViewListingsProcessor;
import spark.Request;
import spark.Response;

import java.util.ArrayList;
import java.util.List;

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
            //return ListingService.getInstance().restApi(req.url(),req.body());
            return gson.toJson(ListingService.getInstance().restApi(req.url(),req.body()));

        },gson::toJson);

        // Route to add a listing, deleteListing, and viewListing
        ListingService listingService = ListingService.getInstance();
        post("/api/createListing", (req,res) -> {

            String jsonObj = req.body();
            ListingDto listingDto = gson.fromJson(jsonObj,ListingDto.class);
            if(listingDto == null) {
                res.status(400);
                return "Item not created";
            }
            db.insert(listingDto);
            return "user Created";
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
















//        path("/api", () -> {
//           post("/createListing",(req,res) -> {
//               res.type("application/json");
//               ListingDto obj = gson.fromJson(req.body(),ListingDto.class);
//               db.insert(obj);
//               return db.getItems();
//
//           });
//
//        });





//        path("/api", () -> {
//           post("/createListing", (request, response) -> {
//                  ListingDto listing = gson.fromJson(request.body(),ListingDto.class);
//                  db.insert(listing);
//               return "added";
//           });
//           delete("/deleteListing", (request, response) -> {
//               db.delete(request.params("id"));
//               return "deleted";
//               });
//            get("/viewListings", (request, response) ->{
//                return db.getItems();
//            });
//
//            put("/updateListings", RestServer::updateListing);
//        });
