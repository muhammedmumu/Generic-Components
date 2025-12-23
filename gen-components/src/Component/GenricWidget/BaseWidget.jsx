import { Card, Box } from '@mui/material';
import WidgetHeader from './WidgetHeader'
import WidjetFooter from './WidjetFooter'

const BaseWidget = ({
  container = "card",
  header,
  footer,
  children,
}) => {
  const Wrapper = container === "card" ? Card : Box;
  return (
    <Wrapper sx={{ p: 2, width: "fit-content", height: "fit-content" }}>
      <WidgetHeader {...header} />
      {children}
      <WidjetFooter {...footer} />
    </Wrapper>

  )
}

export default BaseWidget
