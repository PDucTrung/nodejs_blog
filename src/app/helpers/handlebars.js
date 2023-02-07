const Handlebars = require("handlebars");

module.exports = {
  sum: (a, b) => a + b,
  sortable: (field, sort) => {
    const sortType = field === sort.column ? sort.type : "default";

    const icons = {
      default: "play-outline",
      asc: "arrow-down-outline",
      desc: "arrow-up-outline",
    };

    const types = {
      default: "desc",
      asc: "desc",
      desc: "asc",
    };

    const icon = icons[sortType];
    const type = types[sortType];

    const address = Handlebars.escapeExpression(
      `?_sort&column=${field}&type=${type}`
    );

    const output = `<a href="${address}">
        <ion-icon name="${icon}" style="font-size: 20px;"></ion-icon>
    </a>`;
    return new Handlebars.SafeString(output);
  },
};
