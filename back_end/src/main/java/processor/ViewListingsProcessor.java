package processor;

import com.google.gson.Gson;
import dao.ListingDao;
import dto.ListingDto;
import dto.ResponseDto;
import java.util.Date;
import java.util.List;

import parser.ParsedUrl;

public class ViewListingsProcessor implements Processor{

    private static Gson gson = new Gson();

    @Override
    public ResponseDto process(ParsedUrl parsedUrl, String body) {
        ListingDao list = dao.getInstance();
        List<ListingDto> items = list.getItems();

        ResponseDto response = new ResponseDto(new Date(), items, true);
        return response;
    }
}