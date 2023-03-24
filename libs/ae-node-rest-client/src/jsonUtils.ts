import JSONbig from "json-bigint";

export const JSONbigConfigured = JSONbig({
  useNativeBigInt: true,
  storeAsString: true,
  alwaysParseAsBig: false,
});
export const toJSON = (s: any) => {
  return JSONbigConfigured.stringify(s);
};
export const fromJSON = (s: string) => {
  return JSONbigConfigured.parse(s);
};
