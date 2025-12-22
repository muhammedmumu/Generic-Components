export const getPropertyUserId = (portfilioFilter, urlBased) => {
  if (urlBased) {
    if (portfilioFilter) {
      if (portfilioFilter.length > 0) {
        let ids = portfilioFilter?.map((item) => item.id);
        return ids;
      }
    } else {
      return null;
    }
  } else {
    if (portfilioFilter) {
      if (portfilioFilter.length > 0) {
        let ids = portfilioFilter?.map((item) => item.id);
        return JSON.stringify(ids);
      }
    } else {
      return null;
    }
  }
};

export default {
  getPropertyUserId,
};
