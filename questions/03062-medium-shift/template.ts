type Shift<T extends any[]> = T extends [unknown, ...infer Rest] ? Rest : []
