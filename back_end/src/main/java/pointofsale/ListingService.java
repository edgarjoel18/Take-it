package pointofsale;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import parser.ParsedUrl;
import processor.Processor;
import processor.ProcessorFactory;

public class ListingService {
    private ProcessorFactory processorFactory;
    private static ListingService instance;
    private static Gson gson = new GsonBuilder().setPrettyPrinting().create();

    private ListingService(ProcessorFactory processorFactory) {
        this.processorFactory = processorFactory;
    }

    public static ListingService getInstance() {
        return getInstance(new ProcessorFactory());
    }

    public static ListingService getInstance(ProcessorFactory factory) {
        if (instance == null) {
            instance = new ListingService(factory);
        }
        return instance;
    }

    public String restApi(String url, String body) {
        ParsedUrl parse = new ParsedUrl(url);
        Processor proc = processorFactory.getProcessor(parse);
        return gson.toJson(proc.processor(parse, body));
    }
}