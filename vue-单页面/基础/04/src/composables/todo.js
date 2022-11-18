import myAxios from "../http/user/user.js";
import { ref, watchEffect, watch } from "vue";

const sortBy = ref("desc");
const todos = ref({});
export default () => {
  const load = async () => {
    todos.value = await myAxios.get();
    sort();
  };
  const del = async (id) => {
    await myAxios.del(id);
    load();
  };
  const post = async (data) => {
    await myAxios.post(data);
    load();
  };
  const sort = () => {
    todos.value = Array.prototype.sort.call(todos.value, (a, b) => {
      return sortBy.value == "asc" ? a.id - b.id : b.id - a.id;
    });
  };
  watch(sortBy, (value) => {
    sort();
  });
  return { todos, load, del, post, sortBy };
};
