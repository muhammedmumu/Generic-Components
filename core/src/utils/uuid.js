import { v4 } from "uuid";

export const getUuid = (version = 1) => {
  if (version === 1) {
    return v4();
  } else {
    return null;
  }
};

export default {
  getUuid,
};
