package database;

import com.google.gson.Gson;
import com.mongodb.MongoClient;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

import javax.print.Doc;
import java.lang.reflect.Array;
import java.util.List;

public class MangoConnection {
     MongoClient mongoClient = new MongoClient("localhost",27017);
     MongoDatabase database = mongoClient.getDatabase("CSC413");
     MongoCollection<Document> collection;



    /* Insertion to database */
    public void put(String item){
        Document obj = new Document("item",item);
        collection.insertOne(obj);
    }

    /* Delete an item from database */
    public void delete(String id){
        Document query = new Document("id",id);
        collection.deleteOne(query);
    }

//    public List<String> getItems(){
//        FindIterable<>
//    }



    /* Get the Collections from database */
    public MongoCollection getCollection(String name){
        return database.getCollection(name);
    }

}

