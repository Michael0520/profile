# 383. Ransom Note

## 題目描述

給定兩個字串 `ransomNote` 和 `magazine`，判斷 `ransomNote` 是否可以由 `magazine` 中的字母構成。
每個字母只能使用一次。

## 範例

```bash
Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
```

## 解題思路

1. **基本概念**：
   - 使用 Map 來記錄每個字母的出現次數
   - 檢查 ransomNote 中的每個字母是否有足夠的數量

2. **解題步驟**：
   - 先檢查長度是否合理
   - 使用 Map 統計每個字母的數量
   - 逐一檢查勒索信中的每個字母是否夠用
   - 用完一個字母就減去一個

## 複雜度

- 時間複雜度：O(m + n)，m 和 n 分別是兩個字串的長度
- 空間複雜度：O(1)，因為字母表大小固定為 26 
