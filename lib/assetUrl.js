const isExternalAsset = (value) =>
  /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(value);

const assetUrl = (path) => {
  if (!path || typeof path !== "string" || isExternalAsset(path)) {
    return path;
  }

  return path.startsWith("/") ? path : `/${path}`;
};

module.exports = {
  assetUrl,
};
