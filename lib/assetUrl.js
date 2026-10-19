const PRODUCTION_BASE_PATH = "/raj-vardhan-portfolio";

const basePath =
  process.env.NODE_ENV === "production" ? PRODUCTION_BASE_PATH : "";

const isExternalAsset = (value) =>
  /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(value);

const assetUrl = (path) => {
  if (!path || typeof path !== "string" || isExternalAsset(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (
    !basePath ||
    normalizedPath === basePath ||
    normalizedPath.startsWith(`${basePath}/`)
  ) {
    return normalizedPath;
  }

  return `${basePath}${normalizedPath}`;
};

module.exports = {
  assetUrl,
  basePath,
  PRODUCTION_BASE_PATH,
};
