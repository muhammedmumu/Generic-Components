import ReactDOM from "react-dom";
export default function PortalContainer({ element, children }) {
  return ReactDOM.createPortal(children, element);
}
