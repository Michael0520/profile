/**
 * API 定義
 * isBadVersion(version: number): boolean {}
 */

type FirstBadVersionFn = (n: number) => number;

export const solution = (isBadVersion: (version: number) => boolean): FirstBadVersionFn => {
    // 使用遞迴來實現二分搜尋
    const binarySearch = ({ left, right }: { left: number; right: number }): number => {
        // 基本情況：找到第一個壞版本
        if (left === right) return left;

        // 避免整數溢出的寫法
        const mid = left + Math.floor((right - left) / 2);

        return isBadVersion(mid)
            // 如果是壞版本，第一個壞版本可能是這個或在左邊
            ? binarySearch({ left, right: mid })
            // 如果是好版本，第一個壞版本一定在右邊
            : binarySearch({ left: mid + 1, right });
    };

    return (n: number): number => binarySearch({ left: 1, right: n });
};
