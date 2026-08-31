import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <Row>
                <Col>
                    <div
                        style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "red",
                        }}
                    />
                </Col>

                <Col>
                    <div
                        style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "red",
                        }}
                    />
                </Col>

                <Col>
                    <div
                        style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "red",
                        }}
                    />
                </Col>
            </Row>
            <h1>Go Yankees!</h1>
            <img
                src="../images/CDJ3000xTop.webp"
                alt="I hope to own a pair of these one day"
            />

            <ul>
                <li>Eggs</li>
                <li>Bacon</li>
                <li>Avocado</li>
                <li>Bread</li>
            </ul>
            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                John Rellah - Edit <code>src/App.tsx</code> and save. This page
                will automatically reload.
            </p>
            <p>Hello World</p>
        </div>
    );
}

export default App;
