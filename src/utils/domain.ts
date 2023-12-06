const domain = import.meta.env.DOMAIN;
const restApi = "/wp-json/wp/v2/";
const baseUrl = domain + restApi + "pages?slug=";
const baseImageUrl = domain + restApi + "media/";

export { baseUrl, baseImageUrl };
