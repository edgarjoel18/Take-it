package dao;

import com.mongodb.client.FindIterable;
import dto.ListingDto;
import mongo.MongoConnection;
import org.bson.Document;

import java.util.ArrayList;
import java.util.List;

public class ListingDao extends MongoDao<ListingDto> {

    private static ListingDao instance;

    /* Constructor that makes a connection to the database */
    public ListingDao(MongoConnection connection){
        super(connection);
    }
    public void bindCollection(){
        // get collection instance here

//    MongoConnection tempConnection = new MongoConnection();
//    MongoCollection<ListingDao> collection = tempConnection.getCollection("users", ListingDto.class);
        collection = connection.getCollection("collection",ListingDao.class);
    }


    public static ListingDao getInstance(){
        if(instance == null){
            instance = new ListingDao(new MongoConnection());
        }
        return instance;
    }

    public static ListingDao setTestConnection(MongoConnection connection){
        instance = new ListingDao(connection);
        instance.bindCollection();
        return instance;
    }

    /* Insertion to the database */
    public void insert(ListingDto item){
        Document obj = new Document("item",item);
        collection.insertOne(item);
    }
    public void delete(String id){
        Document query = new Document("id",id);
        collection.deleteOne(query);
    }

    public List<ListingDto> getItems(){
        FindIterable<ListingDto> list = collection.find();
        ArrayList<ListingDto> result = list.into(new ArrayList<ListingDto>());

        return result;
    }
}
