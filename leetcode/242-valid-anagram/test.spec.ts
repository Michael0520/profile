import { describe, it, expect } from 'vitest';
import { isAnagram } from './solution';

describe('242. Valid Anagram', () => {
    const testCases = [
        {
            s: 'anagram',
            t: 'nagaram',
            expected: true,
            description: 'valid anagram'
        },
        {
            s: 'rat',
            t: 'car',
            expected: false,
            description: 'invalid anagram'
        },
        {
            s: '',
            t: '',
            expected: true,
            description: 'empty strings'
        },
        {
            s: 'ab',
            t: 'abc',
            expected: false,
            description: 'different lengths'
        },
        {
            s: 'aaa',
            t: 'aaa',
            expected: true,
            description: 'same repeated characters'
        }
    ];

    describe('Main Solution (using Map)', () => {
        testCases.forEach(({ s, t, expected, description }) => {
            it(`should handle ${description}`, () => {
                expect(isAnagram(s, t)).toBe(expected);
            });
        });

        it('should handle case sensitivity', () => {
            expect(isAnagram('Anagram', 'nagaram')).toBe(false);
        });

        it('should handle special characters', () => {
            expect(isAnagram('rat!', 'tar!')).toBe(true);
        });
    });
});
