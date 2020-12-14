package processor;

import com.google.gson.reflect.TypeToken;
import com.google.gson.Gson;
import dao.ListingDao;
import dto.ListingDto;
import dto.ResponseDto;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import parser.ParsedUrl;

public class AddListingProcessor implements Processor {
    private static Gson gson = new Gson();

    @Override
    public ResponseDto processor(ParsedUrl parsedUrl, String body) {
        Gson gson = new Gson();
        System.out.println(body);
        ListingDao instance = ListingDao.getInstance();
        ListingDto listing = gson.fromJson(body, ListingDto.class);
        System.out.println(listing);
        List<ListingDto> response = new ArrayList<>();
        response.add(instance.insert(listing));
        return new ResponseDto(new Date(), response, true);
    }
}
