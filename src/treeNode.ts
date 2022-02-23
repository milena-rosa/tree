import { ITreeNode } from "./ITreeNode";

export class TreeNode<T> implements ITreeNode<T> {
  key: string | number;
  value: T;
  parent?: ITreeNode<T>;
  children?: ITreeNode<T>[];

  constructor({ key, value, parent = undefined }: ITreeNode<T>) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.children = [];
  }

  get isLeaf() {
    return this.children?.length === 0;
  }

  get hasChildren() {
    return !this.isLeaf;
  }
}
