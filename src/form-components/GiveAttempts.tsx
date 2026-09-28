import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<string>("");

    function updateRequested(event: React.ChangeEvent<HTMLInputElement>) {
        setRequested(event.target.value);
    }

    function spendAttempt() {
        setAttempts(attempts - 1);
    }

    function gainAttempt() {
        setAttempts(attempts + (parseInt(requested) || 0));
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts left: {attempts}</div>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Attempts to gain:</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={updateRequested}
                />
            </Form.Group>
            <Button onClick={spendAttempt} disabled={attempts <= 0}>
                use
            </Button>
            <Button onClick={gainAttempt}>gain</Button>
        </div>
    );
}
