package processor;

import dao.ListingDao;
import dto.ResponseDto;

import java.util.Date;
import mongo.MangoConnection;
import parser.ParsedUrl;

public class DeleteListingProcessor implements Processor{

    @Override
    public ResponseDto process(ParsedUrl parsedUrl, String body) {
        ListingDao list = dao.getInstance();
        list.delete(parsedUrl.getValue("id"));

        ResponseDto response = new ResponseDto(new Date(),list.getItems(),true);

        return response;
    }
}
