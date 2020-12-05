package dao;

import com.mongodb.MongoClient;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class MangoConnection {
     MongoClient mongoClient;
     MongoDatabase database;

    public MangoConnection(){
        mongoClient = new MongoClient("localhost",27017);
        database = mongoClient.getDatabase("CSC413");
    }


    /* Get the Collections from database */
    public MongoCollection getCollection(String name, Class clazz) {
        return database.getCollection(name);
    }

}

