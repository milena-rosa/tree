import { ITree } from "./ITree";
import { ITreeNode } from "./ITreeNode";
import { TreeNode } from "./treeNode";

export class Tree<T> implements ITree<T> {
  root: ITreeNode<T>;

  constructor({ root }: ITree<T>) {
    this.root = root;
  }

  *preOrderTraversal(node: ITreeNode<T> = this.root): any {
    yield node;
    if (node.children?.length) {
      for (let child of node.children) {
        yield* this.preOrderTraversal(child);
      }
    }
  }

  *postOrderTraversal(node: ITreeNode<T> = this.root): any {
    if (node.children?.length) {
      for (let child of node.children) {
        yield* this.postOrderTraversal(child);
      }
    }
    yield node;
  }

  insert(parentNodeKey: string | number, key: string | number, value: T): boolean {
    for (let node of this.preOrderTraversal()) {
      if (node.key === parentNodeKey) {
        node.children.push(new TreeNode({ key, value, parent: node as ITreeNode<T> }));
        return true;
      }
    }
    return false;
  }

  remove(key: string | number): boolean {
    for (let node of this.preOrderTraversal()) {
      const filteredNodes = node.children.filter((item: ITreeNode<T>) => item.key !== key);
      if (filteredNodes.length !== node.children.length) {
        node.children = filteredNodes;
        return true;
      }
    }
    return false;
  }

  find(key: string | number): ITreeNode<T> | undefined {
    for (let node of this.preOrderTraversal()) {
      if (node.key === key) return node;
    }
    return undefined;
  }
}
