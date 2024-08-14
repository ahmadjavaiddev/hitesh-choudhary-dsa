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

    delete(key) {
        this.root = this.deleteNode(this.root, key);
    }

    deleteNode(node, key) {
        if (node === null) {
            return null;
        }

        if (key < node.key) {
            node.left = this.deleteNode(node.left, key); // key < root => 5 line: 43 => if key > root => next line
        } else if (key > node.key) {
            node.right = this.deleteNode(node.right, key); // key > root => 9 line: 43 => if key > root => next line
        } else {
            // left and right is null then just return null
            if (node.left === null && node.right === null) {
                return null;
            }
            // If right have value but left is null then return right value of the node
            else if (node.left === null) {
                return node.right;
            }
            // If left have value but right is null then return left value of the node
            else if (node.right === null) {
                return node.left;
            }
            // If not any of the above condition is true then find min value
            else {
                // Hold the left node reference of the right node
                let tempNode = this.findMinNode(node.right);
                // Assign the left value of the right node to the node.key that is return by checking the findMinNode function which is the minimum value of the left node in the right side ({ right node })
                node.key = tempNode.key;
                // Now consider that root is node.right and recall deleteNode function with new root ({ node.right }) and key ({ tempNode.key })
                node.right = this.deleteNode(node.right, tempNode.key);
            }
        }
        return node;
    }

    findMinNode(node) {
        while (node.left !== null) {
            // Assign value of the ({ node.left }) to the node until it become null
            node = node.left;
        }
        // Return node now which value is the minimum left value of the right side ({ right node })
        return node;
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
bst.delete(9);
bst.delete(9);
bst.print();
