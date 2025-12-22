import _ from "underscore";

export const likeSearchList = (data, by, searchValue) =>
  _.filter(data, function (item) {
    return item[by].toLowerCase().startsWith(searchValue.toLowerCase());
  });
