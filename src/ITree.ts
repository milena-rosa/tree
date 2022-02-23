import { ITreeNode } from "./ITreeNode";

export interface ITree<T> {
  root: ITreeNode<T>;
  preOrderTraversal: (node: ITreeNode<T>) => Generator<ITreeNode<T>, ITreeNode<T>, ITreeNode<T>>;
  postOrderTraversal: (node: ITreeNode<T>) => Generator<ITreeNode<T>, ITreeNode<T>, ITreeNode<T>>;
  insert: (parentNodeKey: string | number, key: string | number, value: T) => boolean;
  remove: (key: string | number) => boolean;
  find: (key: string | number) => ITreeNode<T> | undefined;
}
