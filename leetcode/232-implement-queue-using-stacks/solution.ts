type Queue = {
  push: (x: number) => void;
  pop: () => number;
  peek: () => number;
  empty: () => boolean;
};

export const createQueue = (): Queue => {
  // 使用兩個堆疊來實現 FIFO 隊列
  const stacks = {
    in: [] as number[],   // 用於新增元素
    out: [] as number[]   // 用於取出元素
  };

  // 確保 out stack 有元素可用
  const transfer = () => {
    const { in: inStack, out: outStack } = stacks;

    if (!outStack.length && inStack.length) {
      outStack.push(...inStack.reverse());
      inStack.length = 0;
    }
  };

  return {
    // 新增元素到 in stack
    push: (x: number) => void stacks.in.push(x),

    // 從 out stack 取出元素
    pop: () => {
      transfer();
      return stacks.out.pop()!;
    },

    // 查看 out stack 最上面的元素
    peek: () => {
      transfer();
      return stacks.out.at(-1)!;
    },

    // 檢查兩個 stack 是否都為空
    empty: () => !stacks.in.length && !stacks.out.length
  };
};
