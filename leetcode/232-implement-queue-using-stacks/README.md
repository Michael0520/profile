---
title: '[Easy] 232. Implement Queue using Stacks'
date: '2025-01-26'
description: 'In this blog I will share a solution to the Implement Queue using Stacks problem'
image: /blogs-img/leetcode-grind-75.png
alt: Implement Queue using Stacks solution
ogImage: /blogs-img/leetcode-grind-75.png
tags: ['leetcode', 'javascript']
published: true
---

# 232. Implement Queue using Stacks

## 題目描述

使用兩個堆疊（Stack）來實現先進先出（FIFO）佇列（Queue）。

## 範例

```bash
MyQueue queue = new MyQueue();
queue.push(1);          // queue is: [1]
queue.push(2);          // queue is: [1, 2]
queue.peek();           // return 1
queue.pop();            // return 1, queue is: [2]
queue.empty();          // return false
```

## 解題思路

1. **基本概念**：
   - 使用兩個堆疊來模擬佇列
   - 一個用於新增元素（輸入堆疊）
   - 一個用於取出元素（輸出堆疊）

2. **解題步驟**：
   - 新增元素時，直接放入輸入堆疊
   - 取出元素時，如果輸出堆疊為空，將輸入堆疊的元素全部轉移到輸出堆疊
   - 轉移過程會自動反轉元素順序，實現先進先出

## 複雜度

- 時間複雜度：
  - push: O(1)
  - pop: 平攤 O(1)
  - peek: 平攤 O(1)
  - empty: O(1)

- 空間複雜度：O(n)，n 為佇列中的元素數量

## 什麼是 Stack 和 Queue？

1. **Stack（堆疊）**：
   ```typescript
   // 後進先出（LIFO）
   const stack = [];
   stack.push(1);    // [1]
   stack.push(2);    // [1, 2]
   stack.pop();      // 返回 2，剩下 [1]
   ```

2. **Queue（隊列）**：
   ```typescript
   // 先進先出（FIFO）
   const queue = new MyQueue();
   queue.push(1);    // [1]
   queue.push(2);    // [1, 2]
   queue.pop();      // 返回 1，剩下 [2]
   ```

## 程式碼實作

```typescript
export class MyQueue {
    private inputStack: number[];
    private outputStack: number[];

    constructor() {
        this.inputStack = [];
        this.outputStack = [];
    }

    // 將元素推入隊列尾端
    push(x: number): void {
        this.inputStack.push(x);
    }

    // 從隊列前端移除元素並返回該元素
    pop(): number {
        // 如果 outputStack 為空，將 inputStack 的元素倒入
        if (this.outputStack.length === 0) {
            this.transfer();
        }
        return this.outputStack.pop()!;
    }

    // 返回隊列前端的元素
    peek(): number {
        // 如果 outputStack 為空，將 inputStack 的元素倒入
        if (this.outputStack.length === 0) {
            this.transfer();
        }
        return this.outputStack[this.outputStack.length - 1];
    }

    // 檢查隊列是否為空
    empty(): boolean {
        return this.inputStack.length === 0 && this.outputStack.length === 0;
    }

    // 將 inputStack 的元素倒入 outputStack
    private transfer(): void {
        while (this.inputStack.length > 0) {
            this.outputStack.push(this.inputStack.pop()!);
        }
    }
}
```

## 技術重點

1. **效能優化**：
   - 只在必要時才進行元素轉移
   - 轉移後保持元素順序，避免重複操作

2. **時間複雜度**：
   - push: O(1)
   - pop: 平攤 O(1)
   - peek: 平攤 O(1)
   - empty: O(1)

3. **空間複雜度**：
   - O(n)，n 是元素數量
   - 需要兩個堆疊來儲存元素

## 實務應用

1. **瀏覽器歷史**：
   ```typescript
   // 前進後退功能
   class BrowserHistory {
       private backStack: string[];    // 後退堆疊
       private forwardStack: string[]; // 前進堆疊
   }
   ```

2. **任務管理**：
   ```typescript
   // 任務排程系統
   class TaskQueue {
       private pendingTasks: Task[];   // 待處理任務
       private completedTasks: Task[]; // 已完成任務
   }
   ```

3. **資料同步**：
   ```typescript
   // 離線資料同步
   class SyncQueue {
       private localChanges: Change[]; // 本地變更
       private serverChanges: Change[]; // 伺服器變更
   }
   ```
