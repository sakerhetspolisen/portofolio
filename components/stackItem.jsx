import { Row, Col } from "react-bootstrap";

const StackItem = ({ title, desc, margin, height, children, style }) => {
    //Bad way to hide the logos on mobile
    return (
        <Row style={{
            margin: `${margin}px 0`,
            height: height ? height : 40,
            fontSize: 15,
            fontWeight: 300,
            whiteSpace: "nowrap",
            ...style,
        }}>
            <Col className="pl-0" lg={3} md={3} sm={3} xs={4}>{title}</Col>
            <Col className="hide-on-mobile" lg={"auto"} md={"auto"} sm={3}>{children}</Col>
            <Col style={{textAlign: "right"}} className="pr-0">{desc}</Col>
        </Row>
    )
}


export default StackItem