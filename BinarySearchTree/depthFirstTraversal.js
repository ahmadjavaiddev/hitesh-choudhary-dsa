// class Node {
//     constructor(key) {
//         this.key = key;
//         this.right = null;
//         this.left = null;
//     }
// }

const DepthFirstTraversal = (root) => {
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
};

const recursiveDepthTraversal = (root) => {
    if (root === null) {
        return;
    }

    const leftValues = recursiveDepthTraversal(root.left);
    const rightValues = recursiveDepthTraversal(root.right);

    return [root, ...leftValues, ...rightValues];
};
