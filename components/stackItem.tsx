import { Row, Col } from "react-bootstrap";

// Component: StackItem
// Used for listing all stack items and earlier experience.
//
// Props:
// - title: string
// - desc: string
// - margin: number
// - height: number
// - children: React element **What should be inside the item**
// - style: object **Custom CSS**

type Props = {
  title: string,
  desc?: string,
  margin?: number,
  height?: number,
  children?: React.ReactNode,
  style?: object
};

const StackItem = ({ title, desc, margin, height, children, style }: Props) => {
  //Bad way to hide the logos on mobile
  return (
    <Row
      style={{
        margin: `${margin}px 0`,
        height: height ? height : 40,
        fontSize: 15,
        fontWeight: 300,
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      <Col className="pl-0" lg={3} md={3} sm={3} xs={4}>
        {title}
      </Col>
      <Col className="hide-on-mobile" lg={"auto"} md={"auto"} sm={3}>
        {children}
      </Col>
      <Col style={{ textAlign: "right" }} className="pr-0">
        {desc}
      </Col>
    </Row>
  );
};

export default StackItem;
