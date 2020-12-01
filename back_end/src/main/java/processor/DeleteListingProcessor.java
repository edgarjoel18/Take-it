package processor;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import dao.ListingDao;
import dto.ListingDto;
import dto.ResponseDto;
import java.util.ArrayList;
import java.util.Date;
import mongo.MongoConnection;
import parser.ParsedUrl;

public class DeleteListingProcessor implements Processor{

    @Override
    public ResponseDto process(ParsedUrl parsedUrl, String body) {
        ListingDao list = ListingDao.getInstance();
        list.delete(parsedUrl.getValue("id"));

        ResponseDto response = new ResponseDto(new Date(),list.getItems(),true);

        return response;
    }
}
