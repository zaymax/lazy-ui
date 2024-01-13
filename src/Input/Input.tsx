import React from "react";

import "./Input.css";

type InputProps = {
    value: string;
    onChange: () => void;
}

export const Input = ({ value, onChange }: InputProps) => {

    return (
        <input className={"lui-input"} value={value} onChange={onChange} />
    );
}
