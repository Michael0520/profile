# 235. Lowest Common Ancestor of a Binary Search Tree

## 題目描述

給定一個二元搜尋樹（BST）的根節點和兩個節點 p 和 q，找出這兩個節點的最低共同祖先（LCA）。

## 範例

```bash
Example 1:
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: 節點 2 和 8 的最低共同祖先是 6

Example 2:
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: 節點 2 和 4 的最低共同祖先是 2，因為一個節點可以是自己的祖先
```

## 解題思路

1. **基本概念**：
   - BST 的特性：左子樹所有節點值小於根節點，右子樹所有節點值大於根節點
   - 利用這個特性可以快速判斷搜尋方向

2. **解題步驟**：
   - 如果 p 和 q 都小於當前節點，往左子樹找
   - 如果 p 和 q 都大於當前節點，往右子樹找
   - 如果一個大於一個小於，則當前節點就是 LCA

## 複雜度

- 時間複雜度：O(H)，其中 H 是樹的高度
- 空間複雜度：O(1)，迭代解法只需要常數空間 
