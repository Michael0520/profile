import { describe, it, expect } from 'vitest';
import { floodFill } from './solution';

describe('733. Flood Fill', () => {
    // 基本測試：一般填充情況
    it('should fill connected pixels with same color', () => {
        const image = [
            [1,1,1],
            [1,1,0],
            [1,0,1]
        ];
        const expected = [
            [2,2,2],
            [2,2,0],
            [2,0,1]
        ];

        const result = floodFill(image, 1, 1, 2);
        expect(result).toEqual(expected);
    });

    // 測試：當新舊顏色相同時
    it('should return same image when new color equals original color', () => {
        const image = [
            [1,1,1],
            [1,1,0]
        ];
        const result = floodFill(image, 1, 1, 1);
        expect(result).toEqual(image);
    });

    // 測試：單一像素的圖片
    it('should handle single pixel image', () => {
        const image = [[0]];
        const expected = [[2]];
        const result = floodFill(image, 0, 0, 2);
        expect(result).toEqual(expected);
    });

    // 測試：填充整個圖片
    it('should fill entire image when all pixels are connected', () => {
        const image = [
            [0,0,0],
            [0,0,0]
        ];
        const expected = [
            [1,1,1],
            [1,1,1]
        ];
        const result = floodFill(image, 0, 0, 1);
        expect(result).toEqual(expected);
    });
});
