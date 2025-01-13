/**
 * 判斷兩個字串是否為重組字（Anagram）
 * @param s 第一個字串
 * @param t 第二個字串
 * @returns 是否為重組字
 */
export const isAnagram = (s: string, t: string): boolean => {
    // 長度檢查
    if (s.length !== t.length) return false;

    // 建立頻率 Map
    const freq = new Map<string, number>();

    // 統計第一個字串
    for (const char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    // 驗證第二個字串
    for (const char of t) {
        // 字母不存在或次數為 0
        if (!freq.has(char) || freq.get(char) === 0) {
            return false;
        }
        freq.set(char, freq.get(char)! - 1);
    }

    return true;
};
