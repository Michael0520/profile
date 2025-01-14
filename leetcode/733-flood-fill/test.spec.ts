import { describe, it, expect } from 'vitest';
import { floodFill } from './solution';

describe('733. Flood Fill', () => {

    const testCases = [
        {
            image: [
                [1,1,1],
                [1,1,0],
                [1,0,1]
            ],
            sr: 1,
            sc: 1,
            newColor: 2,
            expected: [
                [2,2,2],
                [2,2,0],
                [2,0,1]
            ],
            description: 'basic flood fill'
        },
        {
            image: [[0,0,0],[0,0,0]],
            sr: 0,
            sc: 0,
            newColor: 1,
            expected: [[1,1,1],[1,1,1]],
            description: 'fill entire image'
        },
        {
            image: [[0]],
            sr: 0,
            sc: 0,
            newColor: 2,
            expected: [[2]],
            description: 'single pixel image'
        }
    ];

    describe('Flood Fill Implementation', () => {
        testCases.forEach(({ image, sr, sc, newColor, expected, description }) => {
            it(`should handle ${description}`, () => {
                expect(floodFill(image, sr, sc, newColor)).toEqual(expected);
            });
        });

        it('should handle same color case', () => {
            const image = [
                [1,1,1],
                [1,1,0]
            ];
            expect(floodFill(image, 1, 1, 1)).toEqual(image);
        });

        it('should handle large image', () => {
            const size = 100;
            const largeImage = Array(size).fill(0).map(() => Array(size).fill(0));
            const result = floodFill(largeImage, 0, 0, 1);
            expect(result[0][0]).toBe(1);
            expect(result[size-1][size-1]).toBe(1);
        });
    });
});
