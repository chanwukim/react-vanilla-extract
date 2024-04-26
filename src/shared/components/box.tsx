import React from "react";
import { ClassValue } from "clsx";

import { Sprinkles } from "../styles/sprinkles.css";
import { atoms } from "../styles/atom";

export type PolymorphicRef<E extends React.ElementType> = React.ComponentPropsWithRef<E>["ref"];

export type BoxProps<E extends React.ElementType> = {
  as?: E;
  className?: ClassValue;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<E> &
  Sprinkles;

type BoxComponent = <E extends React.ElementType>(
  props: BoxProps<E> & { ref?: PolymorphicRef<E> },
) => React.ReactNode;

const Box: BoxComponent = React.forwardRef(function Box<E extends React.ElementType = "div">(
  props: BoxProps<E>,
  ref: PolymorphicRef<E>,
) {
  const {
    as,
    className = "",
    children,
    display,
    position,
    alignItems,
    justifyContent,
    flexGrow,
    flexShrink,
    flexDirection,
    flexWrap,
    gap,
    columnGap,
    rowGap,
    gridTemplateColumns,
    gridColumn,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    backgroundColor,
    opacity,
    borderRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderWidth,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    top,
    right,
    bottom,
    left,
    inset,
    color,
    fontSize,
    fontWeight,
    textAlign,
    overflow,
    ...rest
  } = props;

  const Component = as ?? "div";

  const mergedClassName = atoms({
    className,
    display,
    position,
    alignItems,
    justifyContent,
    flexGrow,
    flexShrink,
    flexDirection,
    flexWrap,
    gap,
    columnGap,
    rowGap,
    gridTemplateColumns,
    gridColumn,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    backgroundColor,
    opacity,
    borderRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderWidth,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    top,
    right,
    bottom,
    left,
    inset,
    color,
    fontSize,
    fontWeight,
    textAlign,
    overflow,
  });

  return (
    <Component ref={ref} className={mergedClassName} {...rest}>
      {children}
    </Component>
  );
});

export default Box;
