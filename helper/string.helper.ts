export const lenSlice = (str: string, len: number = 210): string =>
    str.slice(0, len) + "...";

export const isObjEmpty = (obj: Object): boolean =>
    obj &&
    Object.keys(obj).length === 0 &&
    Object.getPrototypeOf(obj) === Object.prototype;