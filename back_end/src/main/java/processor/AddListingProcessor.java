package processor;

import com.google.gson.reflect.TypeToken;
import com.google.gson.Gson;
import dao.ListingDao;
import dto.ListingDto;
import dto.ResponseDto;

import java.util.ArrayList;
import java.util.Date;
import parser.ParsedUrl;

public class AddListingProcessor implements Processor {
    private static Gson gson = new Gson();

    @Override
    public ResponseDto processor(ParsedUrl parsedUrl, String body) {
        ListingDao list = ListingDao.getInstance();
        ListingDto item = gson.fromJson(body, new TypeToken<ListingDto>(){}.getType());
        list.insert(item);

        ArrayList<ListingDto> resp = new ArrayList<ListingDto>();
        resp.add(item);

        ResponseDto response = new ResponseDto(new Date(), resp, true);
        return response;
    }
}
