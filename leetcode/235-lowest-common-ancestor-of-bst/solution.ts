import type { TreeNode } from '../types/TreeNode';

/**
 * 找出二元搜尋樹中兩個節點的最低共同祖先
 * @param root 二元搜尋樹的根節點
 * @param p 第一個目標節點
 * @param q 第二個目標節點
 * @returns 最低共同祖先節點
 */
export const lowestCommonAncestor = (
    root: TreeNode | null,
    p: TreeNode,
    q: TreeNode
): TreeNode | null => {
    // 基本情況：如果根節點為空，返回 null
    if (!root) return null;

    // 取得當前節點值和目標範圍
    const currentVal = root.val;
    const minTarget = Math.min(p.val, q.val);
    const maxTarget = Math.max(p.val, q.val);

    // 如果當前節點值大於兩個目標值，往左子樹找
    if (currentVal > maxTarget) {
        return lowestCommonAncestor(root.left, p, q);
    }

    // 如果當前節點值小於兩個目標值，往右子樹找
    if (currentVal < minTarget) {
        return lowestCommonAncestor(root.right, p, q);
    }

    // 當前節點值在兩個目標值之間，表示找到 LCA
    return root;
};
