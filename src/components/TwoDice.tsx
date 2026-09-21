import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(3);
    const [rightDie, setRightDie] = useState<number>(4);

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <span> and </span>
            <span data-testid="right-die">{rightDie}</span>
            <div>
                <Button
                    onClick={() => {
                        setLeftDie(d6());
                    }}
                >
                    Roll Left
                </Button>
                <Button
                    onClick={() => {
                        setRightDie(d6());
                    }}
                >
                    Roll Right
                </Button>
            </div>
            {leftDie === 1 && rightDie === 1 && <div>You Lose!</div>}
            {leftDie === rightDie && leftDie !== 1 && <div>You Win!</div>}
        </div>
    );
}
