import Id from "../api/id";

export const objectEntries = <S, T>(o: any): [S, T][] => {
  return Object.keys(o).reduce((acc: any, k: any) => {
    return acc.concat([[k, o[k]]]);
  }, []);
};

export const stringToId = <T = string>(str: string) => str as Id<T>;
