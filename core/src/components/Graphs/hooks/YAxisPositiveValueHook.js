import React from 'react'

export default function YAxisPositiveValueHook() {
  const formatterYAxisPositiveValue = (value, postYAxisLabel) => {
    const absoluteValue = Math.abs(value);
    if (postYAxisLabel) {
      if (value !== 0) {
        return `${absoluteValue}${postYAxisLabel}`;
      }
    }
    return `${absoluteValue}`;
  };

  const formatterXAxisPositiveValue = (value, postXAxisLabel) => {
    const absoluteValue = Math.abs(value);
    if (postXAxisLabel) {
      if (value !== 0) {
        return `${absoluteValue}${postXAxisLabel}`;
      }
    }
    return `${absoluteValue}`;
  };

  return { formatterYAxisPositiveValue, formatterXAxisPositiveValue }
}
