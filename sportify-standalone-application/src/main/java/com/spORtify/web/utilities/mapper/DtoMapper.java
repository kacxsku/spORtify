package com.spORtify.web.utilities.mapper;

public interface DtoMapper<T, V> {
     T mapDto(V objectToMap);
}
