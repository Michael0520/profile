/**
 * 二分搜尋法
 * @param nums 已排序的整數陣列
 * @param target 目標值
 * @returns 目標值的索引，若不存在則返回 -1
 */
export const search = (nums: number[], target: number): number => {
    // 定義搜尋範圍
    let [start, end] = [0, nums.length - 1];

    // 當還有範圍可搜尋時
    while (start <= end) {
        // 計算中間位置
        const mid = Math.floor((start + end) / 2);
        const guess = nums[mid];

        // 找到目標值
        if (guess === target) return mid;

        // 調整搜尋範圍
        [start, end] = guess < target
            ? [mid + 1, end]    // 搜尋右半部
            : [start, mid - 1]; // 搜尋左半部
    }

    return -1; // 沒找到目標值
};
