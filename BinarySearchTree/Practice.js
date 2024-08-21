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

        if (root.key > key) {
            root.left = this.deleteNode(root.left, key);
        } else if (root.key < key) {
            root.right = this.deleteNode(root.right, key);
        } else {
            if (root.left === null && root.right === null) {
                return null;
            } else if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            } else {
                let tempNode = this.findMinNode(root.right);
                root.key = tempNode.key;
                root.right = this.deleteNode(root.right, tempNode.key);
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

    depthFirstTraversal() {
        let root = this.root;
        if (root === null) {
            return null;
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

    breadthFirstTraversal() {
        if (this.root === null) {
            return null;
        }
        const values = [];
        const queue = [];

        while (queue.length > 0) {
            const node = queue.shift();
            values.push(node.key);

            if (node.right !== null) {
                queue.push(node.right);
            }

            if (node.left !== null) {
                queue.push(node.left);
            }
        }
        return values;
    }
}

const BinarySearchTree = new BinarySearchTree();

BinarySearchTree.insert(21);
BinarySearchTree.insert(54);
BinarySearchTree.insert(12);
BinarySearchTree.insert(20);
BinarySearchTree.insert(5);
BinarySearchTree.insert(45);
BinarySearchTree.insert(451);
BinarySearchTree.delete(54);
console.log("Values ::", BinarySearchTree.breadthFirstTraversal());
