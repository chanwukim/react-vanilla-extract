export function hexToRGBA(hex: string, opacity: number = 1): string {
  const hexRegex = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  const match = hex.match(hexRegex);

  if (!match) {
    throw new Error("Invalid hex color string");
  }

  // hex 값을 추출하여 10진수로 변환
  const r = parseInt(match[1], 16);
  const g = parseInt(match[2], 16);
  const b = parseInt(match[3], 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
