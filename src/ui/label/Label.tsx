type TProps = {
    label: string;
    isRequired?: boolean;
}

export const Label = ({label, isRequired = false}: TProps) => {

    return (
        <label className="text-(--color-brand-600) dark:text-(--color-brand-25)">{label}</label>
    )
}