import "./index.css";
import "./App.css";
export interface Complex {
    name: string;
    value: string;
}
export type Props = {
    onCountUpdated: (count: number) => void;
    title: string;
    complex: Complex;
};
export declare const App: ({ onCountUpdated, title, complex }: Props) => import("react/jsx-runtime").JSX.Element;
