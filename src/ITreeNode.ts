export interface ITreeNode<T> {
  key: number | string;
  value: T;
  parent?: ITreeNode<T>;
  children?: Array<ITreeNode<T>>;
  // isLeaf?: boolean;
  // hasChildren?: boolean;
}
