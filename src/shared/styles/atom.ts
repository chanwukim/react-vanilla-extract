import clsx, { ClassValue } from "clsx";

import { sprinkles, Sprinkles } from "./sprinkles.css";

export type Atoms = Sprinkles & {
  className?: ClassValue;
};

export function atoms({ className, ...rest }: Atoms) {
  const sprinklesClasses = sprinkles(rest);

  return clsx(className, sprinklesClasses);
}
