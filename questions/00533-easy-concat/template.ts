import { t } from "../../scripts/locales"

// type Concat<T extends Array<T>, U extends Array<T>> = [...T, ...U];
type Concat<T extends any[], U extends any[]> = [...T, ...U];
