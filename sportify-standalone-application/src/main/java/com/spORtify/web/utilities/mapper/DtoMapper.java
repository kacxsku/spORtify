package com.spORtify.web.utilities.mapper;

import java.text.ParseException;

public interface DtoMapper<T, V> {
     T mapDto(V objectToMap) throws ParseException;
}
