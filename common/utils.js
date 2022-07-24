import { POST_TYPES } from "./constant";

export function getPostTypeId(typeId) {
  const index = POST_TYPES.findIndex((type) => type.id === typeId);
  return index > -1 ? POST_TYPES[index].name : "未知";
}
