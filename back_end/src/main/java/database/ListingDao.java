package dao;

import com.mongodb.client.FindIterable;
import dto.ListingDto;
import org.bson.Document;

import java.util.ArrayList;
import java.util.List;

public class ListingDao extends MongoDao<ListingDto> {

    private static ListingDao instance;

    /* Constructor that makes a connection to the database */
    public ListingDao(MangoConnection connection){
        super(connection);
    }

    public static ListingDao getInstance(){
        if(instance == null){
            instance = new ListingDao(new MangoConnection());
        }
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
