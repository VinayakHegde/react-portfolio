export const Objectkeys = <O extends object>(obj:O) => Object.keys(obj) as Array<keyof O>;

