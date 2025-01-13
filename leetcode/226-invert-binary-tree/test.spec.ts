import { describe, it, expect } from 'vitest';
import { TreeNode } from '../types/TreeNode';
import { invertTree } from './solution';

// 幫助函數：建立二元樹
const createTree = (values: (number | null)[]): TreeNode | null => {
    if (!values.length) return null;

    const root = new TreeNode(values[0]!);

    const queue = [root];

    let i = 1;

    while (queue.length && i < values.length) {
        const node = queue.shift()!;

        // 處理左子節點
        if (i < values.length && values[i] !== null) {
            node.left = new TreeNode(values[i]!);
            queue.push(node.left);
        }
        i++;

        // 處理右子節點
        if (i < values.length && values[i] !== null) {
            node.right = new TreeNode(values[i]!);
            queue.push(node.right);
        }
        i++;
    }

    return root;
};

describe('226. Invert Binary Tree', () => {
    it('should invert a binary tree correctly', () => {
        // Test case 1
        const input1 = createTree([4,2,7,1,3,6,9]);
        const output1 = createTree([4,7,2,9,6,3,1]);
        expect(invertTree(input1)).toEqual(output1);

        // Test case 2
        const input2 = createTree([2,1,3]);
        const output2 = createTree([2,3,1]);
        expect(invertTree(input2)).toEqual(output2);

        // Test case 3: empty tree
        expect(invertTree(null)).toBeNull();
    });
});
