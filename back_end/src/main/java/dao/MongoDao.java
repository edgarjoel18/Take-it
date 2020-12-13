package dao;

import com.mongodb.client.MongoCollection;
import dto.BaseDto;
import mongo.MongoConnection;

public class MongoDao<T extends BaseDto>  {
    MongoCollection<T> collection;
    MongoConnection connection;

    public MongoDao(){}
    public MongoDao(MongoConnection connection){
        this.connection = connection;
    }

}
