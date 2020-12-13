package mongo;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import dao.ListingDao;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.codecs.pojo.Conventions;
import org.bson.codecs.pojo.PojoCodecProvider;

import java.util.Arrays;

import static org.bson.codecs.configuration.CodecRegistries.fromProviders;
import static org.bson.codecs.configuration.CodecRegistries.fromRegistries;

public class MongoConnection {
     MongoClient mongoClient;
     MongoDatabase database;

    public MongoConnection(){
        PojoCodecProvider provider = PojoCodecProvider.builder().
                conventions(Arrays.asList(Conventions.ANNOTATION_CONVENTION)).automatic(true).build();
        CodecRegistry pojoCodecRegistry = fromRegistries(MongoClient.getDefaultCodecRegistry(),
                fromProviders(provider));
        mongoClient = new MongoClient("localhost",27017);
        database = mongoClient.getDatabase("CSC413");
    }


    /* Get the Collections from database */
    public MongoCollection getCollection(String name, Class<ListingDao> listingDaoClass){
        return database.getCollection(name);
    }

}

