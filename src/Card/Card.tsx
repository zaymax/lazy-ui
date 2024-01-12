import React from "react";

import "./Card.css";

export interface CardProps {
    title: string;
}

export function Card ({
      title,
      children,
  }: React.PropsWithChildren<CardProps>) {
    return (
        <article>
            <h2>{title}</h2>
            {children}
        </article>
    );
}