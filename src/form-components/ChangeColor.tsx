import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "brown",
];

const DEFAULT_COLOR = COLORS[0];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(DEFAULT_COLOR);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((option: string) => (
                <Form.Check
                    inline
                    key={option}
                    type="radio"
                    name="color-choice"
                    id={"color-check-" + option}
                    label={option}
                    value={option}
                    checked={color === option}
                    onChange={updateColor}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    width: "150px",
                    height: "50px",
                    color: "white",
                }}
            >
                {color}
            </div>
        </div>
    );
}
