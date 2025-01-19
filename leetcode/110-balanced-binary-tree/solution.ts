import type { TreeNode } from '../types/TreeNode';

export const isBalanced = (root: TreeNode | null): boolean => {
    // 使用 -1 作為不平衡的標記
    const getHeight = (node: TreeNode | null): number => {
        // 基礎情況：空節點高度為 0
        if (!node) return 0;

        const { left, right } = node;

        // 遞迴計算子樹高度
        const leftHeight = getHeight(left);
        const rightHeight = getHeight(right);

        // 優化：任一子樹不平衡，直接返回 -1
        if (leftHeight === -1 || rightHeight === -1) return -1;

        // 計算高度差
        const heightDiff = Math.abs(leftHeight - rightHeight);

        // 如果高度差 > 1，返回 -1 表示不平衡
        // 否則返回當前子樹的高度
        return heightDiff > 1 ? -1 : Math.max(leftHeight, rightHeight) + 1;
    };

    return getHeight(root) !== -1;
};
