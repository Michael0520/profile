/**
 * Flood Fill 演算法實作 (類似小畫家的油漆桶工具)
 * @param image 二維整數陣列表示的圖像
 * @param sr 起始行座標
 * @param sc 起始列座標
 * @param newColor 新的顏色值
 * @returns 填充後的圖像
 */
export const floodFill = (
    image: number[][],
    sr: number,
    sc: number,
    newColor: number
): number[][] => {
    // 1. 先取得起始位置的顏色
    const startColor = image[sr][sc];

    // 2. 如果新舊顏色一樣，不需要填充
    if (startColor === newColor) {
        return image;
    }

    // 3. 取得圖片的大小
    const height = image.length;
    const width = image[0].length;

    // 4. 檢查座標是否在圖片範圍內
    const isValidPosition = (row: number, col: number): boolean => {
        return row >= 0 && row < height && col >= 0 && col < width;
    };

    // 5. 檢查是否需要填充此位置
    const shouldFill = (row: number, col: number): boolean => {
        return isValidPosition(row, col) && image[row][col] === startColor;
    };

    // 6. 建立一個佇列來存放要處理的座標
    const queue: [number, number][] = [[sr, sc]];

    // 7. 開始填充過程
    while (queue.length > 0) {
        // 取出一個位置
        const [currentRow, currentCol] = queue.shift()!;

        // 填上新顏色
        image[currentRow][currentCol] = newColor;

        // 檢查四個相鄰的位置
        const neighbors = [
            [currentRow - 1, currentCol], // 上
            [currentRow + 1, currentCol], // 下
            [currentRow, currentCol - 1], // 左
            [currentRow, currentCol + 1]  // 右
        ];

        // 將需要填充的相鄰位置加入佇列
        for (const [nextRow, nextCol] of neighbors) {
            if (shouldFill(nextRow, nextCol)) {
                queue.push([nextRow, nextCol]);
            }
        }
    }

    return image;
};
