package processor;

import parser.ParsedUrl;

public class ProcessorFactory {

    public Processor getProcessor(ParsedUrl parsedUrl) {
        System.out.println(parsedUrl.getPath());
        switch (parsedUrl.getPath()) {
            case "/api/createListing":
                System.out.println("/api/createListing Confirmed" );

                return new AddListingProcessor();
            case "/api/viewListings":
                if (parsedUrl.hasQueryArgs()) {
                    return new FilterProcessor();
                } else {
                    return new ViewListingsProcessor();
                }
            case "/api/deleteListing":
                return new DeleteListingProcessor();
            default:
                return new ErrorProcessor();
        }
    }
}