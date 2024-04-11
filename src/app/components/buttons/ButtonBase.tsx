export function ButtonBase(
    { ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
    return (
        <button {...props} className="bg-medium-blue text-white p-4 rounded-lg shadowGeneral">
            Continuar
        </button>
    )
}