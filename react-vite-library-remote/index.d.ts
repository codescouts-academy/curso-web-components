import React from "react";
declare global {
    namespace JSX {
        interface IntrinsicElements {
            "app-component": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}
