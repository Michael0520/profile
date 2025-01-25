import { describe, it, expect } from 'vitest';
import { createQueue } from './solution';

describe('232. Implement Queue using Stacks', () => {
    it('should handle basic operations', () => {
        const queue = createQueue<number>();
        queue.push(1);
        queue.push(2);
        expect(queue.peek()).toBe(1);
        expect(queue.pop()).toBe(1);
        expect(queue.empty()).toBe(false);
    });

    it('should handle multiple push and pop operations', () => {
        const queue = createQueue<number>();
        queue.push(1);
        queue.push(2);
        queue.push(3);
        expect(queue.pop()).toBe(1);
        expect(queue.pop()).toBe(2);
        queue.push(4);
        expect(queue.pop()).toBe(3);
        expect(queue.pop()).toBe(4);
        expect(queue.empty()).toBe(true);
    });

    it('should handle empty queue', () => {
        const queue = createQueue<number>();
        expect(queue.empty()).toBe(true);
    });

    it('should handle peek after pop', () => {
        const queue = createQueue<number>();
        queue.push(1);
        queue.push(2);
        expect(queue.pop()).toBe(1);
        expect(queue.peek()).toBe(2);
    });

    it('should handle generic types', () => {
        const queue = createQueue<string>();
        queue.push('a');
        queue.push('b');
        expect(queue.pop()).toBe('a');
        expect(queue.peek()).toBe('b');
    });
});
