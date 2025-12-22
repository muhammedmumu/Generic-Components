import { useState } from 'react';

export function useSeeMore(text='', maxLength = 200) {
  const [expanded, setExpanded] = useState(false);

  const isLongText = text?.length >= maxLength;

  let displayText = text;
  if (isLongText) {
    displayText = expanded ? text : text.substring(0, maxLength);
  }

  const toggle = () => setExpanded(!expanded);

  return {
    expanded,
    toggle,
    displayText,
    isLongText,
  };
}
