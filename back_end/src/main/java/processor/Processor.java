package processor;

import dto.ResponseDto;
import parser.ParsedUrl;

public interface Processor {
    public ResponseDto processor(ParsedUrl parsedUrl, String body);
}
