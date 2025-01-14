import { describe, it, expect } from 'vitest';
import { search } from './solution';

describe('704. Binary Search', () => {
    const testCases = [
        {
            nums: [-1, 0, 3, 5, 9, 12],
            target: 9,
            expected: 4,
            description: 'target exists in array'
        },
        {
            nums: [-1, 0, 3, 5, 9, 12],
            target: 2,
            expected: -1,
            description: 'target does not exist'
        },
        {
            nums: [5],
            target: 5,
            expected: 0,
            description: 'single element array'
        },
        {
            nums: [],
            target: 5,
            expected: -1,
            description: 'empty array'
        },
        {
            nums: [1, 2, 3, 4, 5],
            target: 1,
            expected: 0,
            description: 'target at start'
        },
        {
            nums: [1, 2, 3, 4, 5],
            target: 5,
            expected: 4,
            description: 'target at end'
        }
    ];

    describe('Binary Search Implementation', () => {
        testCases.forEach(({ nums, target, expected, description }) => {
            it(`should handle ${description}`, () => {
                expect(search(nums, target)).toBe(expected);
            });
        });

        it('should handle large sorted arrays', () => {
            const largeArray = Array.from(
                { length: 10000 },
                (_, i) => i * 2
            ); // [0,2,4,...,19998]
            expect(search(largeArray, 19998)).toBe(9999);
        });

        it('should handle negative numbers', () => {
            const nums = [-10, -5, 0, 5, 10];
            expect(search(nums, -5)).toBe(1);
        });
    });
});
