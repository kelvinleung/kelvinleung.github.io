export const MENU_DATA = [
  {
    id: 1,
    name: "首页",
    url: "/",
    regex: /^\/$/,
    type: undefined,
  },
  {
    id: 2,
    name: "秘籍",
    url: "/posts/horse-sense",
    regex: /^\/posts/,
    type: "horse-sense",
  },
  {
    id: 3,
    name: "八股",
    url: "/posts/gibberish",
    regex: /^\/posts/,
    type: "gibberish",
  },
  {
    id: 4,
    name: "庖丁",
    url: "/posts/xray",
    regex: /^\/posts/,
    type: "xray",
  },
  {
    id: 5,
    name: "画瓢",
    url: "/posts/copycat",
    regex: /^\/posts/,
    type: "copycat",
  },
];

export function getPostTypeName(type) {
  const match = MENU_DATA.filter((menu) => menu.type === type);
  return match.length > 0 ? match[0].name : "未知";
}
