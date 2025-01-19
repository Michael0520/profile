import { describe, it, expect } from 'vitest';
import { TreeNode } from '../types/TreeNode';
import { isBalanced } from './solution';

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

describe('110. Balanced Binary Tree', () => {
    const testCases = [
        {
            input: [3,9,20,null,null,15,7],
            expected: true,
            description: 'balanced tree'
        },
        {
            input: [1,2,2,3,3,null,null,4,4],
            expected: false,
            description: 'unbalanced tree'
        },
        {
            input: [],
            expected: true,
            description: 'empty tree'
        },
        {
            input: [1],
            expected: true,
            description: 'single node'
        },
        {
            input: [1,2,null,3],
            expected: false,
            description: 'left heavy tree'
        }
    ];

    testCases.forEach(({ input, expected, description }) => {
        it(`should handle ${description}`, () => {
            const tree = createTree(input);
            expect(isBalanced(tree)).toBe(expected);
        });
    });

    it('should handle complex balanced tree', () => {
        const tree = createTree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
        expect(isBalanced(tree)).toBe(true);
    });
});
