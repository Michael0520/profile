/**
 * 檢查是否可以用 magazine 中的字母構成 ransomNote
 * 使用 Map 來追蹤字母頻率，避免全域污染
 *
 * @example
 * // 可以用 "aab" 構成 "aa"
 * canConstruct("aa", "aab") // returns true
 *
 * // 不能用 "ab" 構成 "aa"，因為只有一個 'a'
 * canConstruct("aa", "ab") // returns false
 */
export const canConstruct = (ransomNote: string, magazine: string): boolean => {
    // 提前返回：如果 ransomNote 比 magazine 長，一定不夠用
    if (ransomNote.length > magazine.length) return false;

    // 使用 Map 來記錄每個字母的數量
    const letterMap = new Map<string, number>();

    // 統計 magazine 中每個字母的數量
    for (const char of magazine) {
        letterMap.set(char, (letterMap.get(char) || 0) + 1);
    }

    // 檢查 ransomNote 中的每個字母
    for (const char of ransomNote) {
        const count = letterMap.get(char) || 0;

        // 如果字母不夠用了
        if (count === 0) return false;

        // 使用一個字母
        letterMap.set(char, count - 1);
    }

    return true;
};
