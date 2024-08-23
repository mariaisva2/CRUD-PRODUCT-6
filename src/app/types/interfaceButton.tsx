export interface ButtonProps {
    onClick: () => void;
    label: string;
    className?: string;
    type?: string;
    value?: string;
}