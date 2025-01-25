type Queue<T> = {
  push: (x: T) => void;
  pop: () => T;
  peek: () => T;
  empty: () => boolean;
};

export const createQueue = <T>(): Queue<T> => {
  // 使用兩個堆疊來實現 FIFO 佇列
  const stacks = {
    in: [] as T[],   // 用於新增元素
    out: [] as T[]   // 用於取出元素
  };

  // 當輸出堆疊為空時，將輸入堆疊的元素轉移到輸出堆疊
  // 這樣可以維持先進先出（FIFO）的順序
  const transfer = () => {
    // 只有當輸出堆疊為空，且輸入堆疊有元素時才需要轉移
    if (!stacks.out.length && stacks.in.length) {
      // 將輸入堆疊的所有元素反轉後放入輸出堆疊
      // 反轉是為了保持原始的插入順序
      stacks.out.push(...stacks.in.reverse());

      // 清空輸入堆疊，避免重複轉移
      stacks.in.length = 0;
    }
  };

  return {
    // 新增元素到輸入堆疊
    push: (x: T) => void stacks.in.push(x),

    // 從輸出堆疊取出元素
    pop: () => {
      transfer();
      return stacks.out.pop()!;
    },

    // 查看輸出堆疊最上面的元素
    peek: () => {
      transfer();
      return stacks.out.at(-1)!;
    },

    // 檢查兩個堆疊是否都為空
    empty: () => !stacks.in.length && !stacks.out.length
  };
};
