package database;

import com.mongodb.client.MongoCollection;
import dto.BaseDto;
import org.bson.Document;

public class MongoDao<T extends BaseDto>  {
    MongoCollection<T> collection;
    MangoConnection connection;

    public MongoDao(){}
    public MongoDao(MangoConnection connection){
        this.connection = connection;
    }

}
