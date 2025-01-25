import { describe, it, expect } from 'vitest';
import { solution } from './solution';

describe('278. First Bad Version', () => {
    // 建立測試用的 isBadVersion API
    const createAPI = (badVersion: number) => {
        return (version: number): boolean => {
            return version >= badVersion;
        };
    };

    const testCases = [
        {
            n: 5,
            bad: 4,
            expected: 4,
            description: 'bad version in the middle'
        },
        {
            n: 1,
            bad: 1,
            expected: 1,
            description: 'single version'
        },
        {
            n: 10,
            bad: 1,
            expected: 1,
            description: 'first version is bad'
        },
        {
            n: 10,
            bad: 10,
            expected: 10,
            description: 'last version is bad'
        }
    ];

    testCases.forEach(({ n, bad, expected, description }) => {
        it(`should handle ${description}`, () => {
            const isBadVersion = createAPI(bad);
            const firstBadVersion = solution(isBadVersion);
            expect(firstBadVersion(n)).toBe(expected);
        });
    });

    it('should handle large numbers', () => {
        const n = 2147483647;  // 2^31 - 1
        const bad = 2147483647;
        const isBadVersion = createAPI(bad);
        const firstBadVersion = solution(isBadVersion);
        expect(firstBadVersion(n)).toBe(bad);
    });
});
