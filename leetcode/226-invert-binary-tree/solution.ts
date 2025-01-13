import type { TreeNode } from '../types/TreeNode';

export const invertTree = (root: TreeNode | null): TreeNode | null => {
    // 處理邊界情況：空節點直接返回
    if (!root) return null;

    // 使用解構賦值交換左右子樹
    [root.left, root.right] = [
        invertTree(root.right),  // 遞迴處理右子樹
        invertTree(root.left)    // 遞迴處理左子樹
    ];

    return root;
};
