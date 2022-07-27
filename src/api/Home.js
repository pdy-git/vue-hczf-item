import request from "@/utils/requist";

export const recommendImg = (params) => {
  return request({
    url: "/home/swiper",
    params,
  });
};

export const recommendHomeText = (params) => {
  return request({
    url: "/home/groups",
    params,
  });
};
