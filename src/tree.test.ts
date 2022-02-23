import { Tree } from "./tree";
import { TreeNode } from "./treeNode";

describe("Tree", () => {
  it("should create a tree and insert tree values in it", () => {
    const tree = new Tree<string>({ root: new TreeNode({ key: 1, value: "AB" }) });

    tree.insert(1, 11, "AC");
    tree.insert(1, 12, "BC");
    tree.insert(12, 121, "BCG");

    expect([...tree.preOrderTraversal()].map((x) => x.value)).toStrictEqual([
      "AB",
      "AC",
      "BC",
      "BCG",
    ]);
  });

  it("should ", () => {
    const tree = new Tree<string>({ root: new TreeNode({ key: 1, value: "AB" }) });

    tree.insert(1, 11, "AC");
    tree.insert(1, 12, "BC");
    tree.insert(12, 121, "BCG");

    expect(tree.root.value).toBe("AB");
    expect(tree.root.hasChildren).toBeTruthy();
  });

  it("should find a tree value", () => {
    const tree = new Tree<string>({ root: new TreeNode({ key: 1, value: "AB" }) });

    tree.insert(1, 11, "AC");
    tree.insert(1, 12, "BC");
    tree.insert(12, 121, "BCG");

    expect(tree.find(12)?.isLeaf).toBeFalsy();
    expect(tree.find(121)?.isLeaf).toBeTruthy();
    expect(tree.find(121)?.parent?.value).toBe("BC");
  });

  it("should remove a tree value", () => {
    const tree = new Tree<string>({ root: new TreeNode({ key: 1, value: "AB" }) });

    tree.insert(1, 11, "AC");
    tree.insert(1, 12, "BC");
    tree.insert(12, 121, "BCG");

    tree.remove(12);

    expect([...tree.postOrderTraversal()].map((x) => x.value)).toStrictEqual(["AC", "AB"]);
  });
});
