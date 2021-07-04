import { Row, Col } from "react-bootstrap";

const StackItem = ({ title, desc, margin, height, children, style }) => {
    return (
        <Row style={{
            margin: `${margin}px 0`,
            height: height ? height : 40,
            fontSize: 15,
            fontWeight: 300,
            ...style,
        }}>
            <Col className="pl-0" lg={3}>{title}</Col>
            <Col lg={"auto"}>{children}</Col>
            <Col style={{textAlign: "right"}} className="pr-0">{desc}</Col>
        </Row>
    )
}


export default StackItem