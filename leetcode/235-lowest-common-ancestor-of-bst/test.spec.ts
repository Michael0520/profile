import { describe, it, expect } from 'vitest';
import { TreeNode } from '../types/TreeNode';
import { lowestCommonAncestor } from './solution';

// 幫助函數：建立二元搜尋樹
const createBST = (values: (number | null)[]): TreeNode | null => {
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

describe('235. Lowest Common Ancestor of a Binary Search Tree', () => {
    it('should find LCA when nodes are on different sides', () => {
        const root = createBST([6,2,8,0,4,7,9,null,null,3,5]);
        const p = new TreeNode(2);
        const q = new TreeNode(8);
        const result = lowestCommonAncestor(root, p, q);
        expect(result?.val).toBe(6);
    });

    it('should find LCA when one node is ancestor of another', () => {
        const root = createBST([6,2,8,0,4,7,9,null,null,3,5]);
        const p = new TreeNode(2);
        const q = new TreeNode(4);
        const result = lowestCommonAncestor(root, p, q);
        expect(result?.val).toBe(2);
    });

    it('should handle empty tree', () => {
        const result = lowestCommonAncestor(null, new TreeNode(1), new TreeNode(2));
        expect(result).toBeNull();
    });

    it('should handle single node tree', () => {
        const root = new TreeNode(1);
        const result = lowestCommonAncestor(root, root, root);
        expect(result?.val).toBe(1);
    });

    it('should find LCA for nodes in left subtree', () => {
        const root = createBST([6,2,8,0,4,7,9]);
        const p = new TreeNode(0);
        const q = new TreeNode(4);
        const result = lowestCommonAncestor(root, p, q);
        expect(result?.val).toBe(2);
    });
});
