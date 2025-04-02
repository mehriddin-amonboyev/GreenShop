export const Button = ({ children, className, ...props }) => {
    return (
        <button className={`bg-primary text-white px-4 py-2 rounded-md ${className}`} {...props}>
            {children}
        </button>
    )
}