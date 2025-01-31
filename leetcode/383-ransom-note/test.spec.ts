import { describe, it, expect } from 'vitest';
import { canConstruct } from './solution';

describe('383. Ransom Note', () => {
    const testCases = [
        {
            ransomNote: 'a',
            magazine: 'b',
            expected: false,
            description: 'different single letters'
        },
        {
            ransomNote: 'aa',
            magazine: 'ab',
            expected: false,
            description: 'insufficient letters'
        },
        {
            ransomNote: 'aa',
            magazine: 'aab',
            expected: true,
            description: 'sufficient letters'
        },
        {
            ransomNote: '',
            magazine: '',
            expected: true,
            description: 'empty strings'
        },
        {
            ransomNote: 'aab',
            magazine: 'baa',
            expected: true,
            description: 'different order'
        }
    ];

    testCases.forEach(({ ransomNote, magazine, expected, description }) => {
        it(`should handle ${description}`, () => {
            expect(canConstruct(ransomNote, magazine)).toBe(expected);
        });
    });

    it('should handle long strings', () => {
        const ransomNote = 'a'.repeat(1000);
        const magazine = 'a'.repeat(1000);
        expect(canConstruct(ransomNote, magazine)).toBe(true);
    });

    it('should handle case sensitivity', () => {
        expect(canConstruct('a', 'A')).toBe(false);
    });
});
