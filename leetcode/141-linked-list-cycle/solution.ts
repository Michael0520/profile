import type { ListNode } from '../types/ListNode';

/**
 * 檢查 Linked List 是否有環
 * 使用龜兔賽跑算法
 *
 */
export const hasCycle = (head: ListNode | null): boolean => {
    // 處理空 list 或單節點的情況
    if (!head?.next) {
        return false;
    }

    // 遞迴檢查是否有環
    const checkCycle = (
        turtle: ListNode | null,
        rabbit: ListNode | null
    ): boolean => {
        // 如果任一跑者到終點，表示沒有環
        if (!turtle?.next || !rabbit?.next) {
            return false;
        }

        // 兔子追上烏龜了！表示有環
        if (rabbit === turtle) {
            return true;
        }

        // 繼續跑：烏龜跑 1 步，兔子跑 2 步
        return checkCycle(turtle.next, rabbit.next.next);
    };

    return checkCycle(head, head.next);
};
