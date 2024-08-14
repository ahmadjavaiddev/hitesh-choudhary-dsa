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

    insertNode(node, newNode) {
        if (newNode.key <= node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
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
