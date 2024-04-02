

export default function InputBox({ type, required, placeholder, className }){

    return (
        <input type={type} required={required} placeholder={placeholder} className={`${className} border border-transparent focus:outline-none px-4 font-thin text-xl ring-2 valid:ring-blue-500 invalid:ring-red-500 `} />
    )

}