/**
 * Read in a Blob value and return it as a base64 string
 * @param blob The blob value to convert to a base64 string
 */
export const readBlobAsBase64 = async blob =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result;
      const base64StringWithoutTags = base64String.substr(
        base64String.indexOf(',') + 1,
      ); // remove prefix "data:application/pdf;base64,"
      resolve(base64StringWithoutTags);
    };
    reader.onerror = error => reject(error);
    reader.readAsDataURL(blob);
  });
/**
 * Safely web encode a string value (inspired by js-cookie)
 * @param str The string value to encode
 */
export const encode = str =>
  encodeURIComponent(str)
    .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
    .replace(/[()]/g, escape);
/**
 * Safely web decode a string value (inspired by js-cookie)
 * @param str The string value to decode
 */
export const decode = str =>
  str.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
//# sourceMappingURL=utils.js.map
