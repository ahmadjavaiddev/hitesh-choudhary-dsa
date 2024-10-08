class BSTNode {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(key) {
        const newNode = new BSTNode(key);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insert(key) {
        const newNode = new BSTNode(key);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (root.key < newNode.key) {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        } else {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        }
    }

    delete(key) {
        this.root = this.deleteNode(this.root, key);
    }

    deleteNode(root, key) {
        if (root === null) {
            return null;
        }

        if (root.key < key) {
            root.right = this.deleteNode(root.right, key);
        } else if (root.key > key) {
            root.left = this.deleteNode(root.left, key);
        } else {
            if (root.left === null && root.right === null) {
                return null;
            } else if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            } else {
                let tempNode = this.findMinNode(root.right);
                node.key = tempNode.key;
                node.right = this.deleteNode(node.right, tempNode.key);
            }
        }
        return node;
    }

    findMinNode(root) {
        while (root.left !== null) {
            root = root.left;
        }
        return root;
    }

    inOrderTraversal() {
        const result = [];
        this.inOrder(this.root, result);
        return result;
    }

    inOrder(node, result) {
        if (node !== null) {
            this.inOrder(node.left, result);
            result.push(node.key);
            this.inOrder(node.right, result);
        }
    }

    preOrderTraversal() {
        const result = [];
        this.preOrder(this.root, result);
        return result;
    }

    preOrder(node, result) {
        if (node !== null) {
            result.push(node.key);
            this.preOrder(node.left, result);
            this.preOrder(node.right, result);
        }
    }

    postOrderTraversal() {
        const result = [];
        this.postOrder(this.root, result);
        return result;
    }

    postOrder(node, result) {
        if (node !== null) {
            this.postOrder(node.left, result);
            this.postOrder(node.right, result);
            result.push(node.key);
        }
    }

    recursiveDepth() {
        let root = this.root;
        if (root === null) {
            return;
        }

        const values = [];
        const stack = [root];
        while (stack.length > 0) {
            const node = stack.pop();
            values.push(node.key);

            if (node.right !== null) {
                stack.push(node.right);
            }
            if (node.left !== null) {
                stack.push(node.left);
            }
        }
        return values;
    }

    print() {
        console.log("Tree ::", JSON.stringify(this.root));
    }
}

const bst = new BinarySearchTree();

bst.insert(8);
bst.insert(5);
bst.insert(9);
bst.insert(6);
bst.insert(64);
bst.insert(2);
bst.insert(0);
bst.insert(9);
bst.insert(1);
bst.print();
// bst.delete(9);
// bst.delete(9);
bst.print();
// console.log("recursiveDepth ::", bst.recursiveDepth());
