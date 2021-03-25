import moment from "moment"

export const vueRoute = obj => {
  let $route = _.pick(obj, ['meta', 'path', 'hash', 'query', 'params', 'fullPath']);
  $route.matched = obj.matched.map(matched =>
    _.pick(matched, [
      'path',
      'regex',
      //"components",
      //"instances",
      'meta',
      'props'
    ])
  );
  return JSON.stringify({ $route }, null, 2);
};

export const dollars = (value) => {
  return `$${(value / 100).toFixed(2)}`
}
export const date = (value) => {
  const date = moment(value)
  return date.isValid() && date.format('MM/DD/YYYY')
}

export const route = base => ({
  login: `/${base}/login`,
  index: `/${base}`,
  userAdd: `/${base}/employee/add`,
  userEdit: id => `/${base}/employee/${id}/edit`,
  userDelete: id => `/${base}/employee/${id}/delete`
});

export const toQueryString = obj => {
  if (obj instanceof Object) {
    return Object.keys(obj)
      .map(k => `${encodeURIComponent(k)}=${obj[k]}`)
      .join("&");
  }
  return "";
};

export const Api = {
  getMe: async ({ query } = {}) => {
    const q = toQueryString(query)
    return await axios.get(`/api/me?${q}`);
  },
  getProducts: async ({ query } = {}) => {
    const q = toQueryString(query)
    return await axios.get(`/api/products?${q}`);
  },
  getOrders: async ({ query } = {}) => {
    const q = toQueryString(query)
    return await axios.get(`/api/orders?${q}`);
  },
  getInventory: async ({ query } = {}) => {
    const q = toQueryString(query)
    return await axios.get(`/api/inventories?${q}`);
  },
};

export const formatLocation = loc => {
  return `
    ${loc.line1},
    ${loc.city},
    ${loc.state}
    ${loc.zip}
  `;
};
