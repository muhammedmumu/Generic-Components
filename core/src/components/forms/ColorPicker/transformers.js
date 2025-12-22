export const DEFAULT_CONVERTER = 'rgba_hex';

export function toHex(value) {
  let result = parseInt(value);
  result = Math.min(Math.max(0, result), 255);
  return (
    '0123456789abcdef'.charAt((result - (result % 16)) / 16) +
    '0123456789abcdef'.charAt(result % 16)
  );
}

export const converters = {
  rgba: (c) => `rgba(${c.rgb.r}, ${c.rgb.g}, ${c.rgb.b}, ${c.rgb.a})`,
  rgb: (c) => `rgb(${c.rgb.r}, ${c.rgb.g}, ${c.rgb.b})`,
  hex: (c) => c.hex,

  rgba_rgb: (c) => (c.rgb.a === 1 ? converters.rgb(c) : converters.rgba(c)),
  rgba_hex: (c) => (c.rgb.a === 1 ? converters.hex(c) : converters.rgba(c)),
  argb_hex: (c) =>
    `#${toHex(c.rgb.r)}${toHex(c.rgb.g)}${toHex(c.rgb.b)}${
      c.rgb.a < 1 ? toHex(c.rgb.a * 255) : ''
    }`,
};

export default converters;
