import { describe, it, expect } from 'vitest';
import { ListNode } from '../types/ListNode';
import { hasCycle } from './solution';

// 建立有環的鏈結串列
const createCyclicList = (values: number[], pos: number): ListNode | null => {
    if (!values.length) return null;

    // 建立頭節點
    const head = new ListNode(values[0]);
    let current = head;
    let cycleNode: ListNode | null = null;

    // 如果環的位置是 0，記錄頭節點
    if (pos === 0) {
        cycleNode = head;
    }

    // 建立其餘節點
    for (let i = 1; i < values.length; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;

        // 記錄環的起始節點
        if (i === pos) {
            cycleNode = current;
        }
    }

    // 如果需要建立環，將最後一個節點指向指定位置
    if (pos >= 0 && cycleNode) {
        current.next = cycleNode;
    }

    return head;
};

describe('141. Linked List Cycle', () => {
    const testCases = [
        {
            values: [3,2,0,-4],
            pos: 1,
            expected: true,
            description: 'list with cycle'
        },
        {
            values: [1,2],
            pos: -1,
            expected: false,
            description: 'list without cycle'
        },
        {
            values: [1],
            pos: -1,
            expected: false,
            description: 'single node'
        },
        {
            values: [],
            pos: -1,
            expected: false,
            description: 'empty list'
        }
    ];

    testCases.forEach(({ values, pos, expected, description }) => {
        it(`should handle ${description}`, () => {
            const list = createCyclicList(values, pos);
            expect(hasCycle(list)).toBe(expected);
        });
    });

    it('should handle cycle at the beginning', () => {
        const list = createCyclicList([1,2,3,4], 0);
        expect(hasCycle(list)).toBe(true);
    });

    it('should handle cycle at the end', () => {
        const list = createCyclicList([1,2,3,4], 3);
        expect(hasCycle(list)).toBe(true);
    });
});
