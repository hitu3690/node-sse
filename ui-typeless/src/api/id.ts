interface IdInner<T> {
  value: T;
}

type Id<T> = string & IdInner<T>;

export default Id;
