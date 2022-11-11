import myAxios from "../index.js";

function get(params) {
  return myAxios({
    url: "news",
    method: "get",
    params,
  });
}

function post(data) {
  return myAxios({
    url: "/news",
    method: "post",
    data,
  });
}

function del(data) {
  return myAxios({
    url: `news/${data}`,
    method: "DELETE",
  });
}

export default { get, post, del };
