export interface InputProps{
    type: "text" | "number" | "password",
    placeholder:string,
    value:string,
    label:string,
    onChange:(event: React.ChangeEvent<HTMLInputElement>)=>void;
}

export default function Input({type,placeholder,value,label, onChange}:InputProps){
    return(
        <div className="">
            <label className="form-label mb-2">{label}</label>
            <input type={type} placeholder={placeholder}
            value={value} onChange={onChange} className="form-control"/>
        </div>
    )
}