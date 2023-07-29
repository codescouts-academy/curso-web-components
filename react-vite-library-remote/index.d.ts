/// <reference types="react" />
import { Props } from "./App";
declare global {
    namespace JSX {
        interface IntrinsicElements {
            "app-component": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & Props;
        }
    }
}
