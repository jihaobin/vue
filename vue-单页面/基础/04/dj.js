const mock = require("mockjs");
const Random = mock.Random;

module.exports = () => {
  let data = { news: [] };
  for (let _ = 0; _ < 20; _++) {
    data.news.push({
      id: _,
      title: Random.cword(10, 20),
      content: Random.cparagraph(10),
    });
  }
  return data;
};
