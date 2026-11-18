import useTheme from "../context/useTheme"

export default function Dashboard(){

    const {theme} = useTheme();
    return(
        <div className="">
            
            <h1>Dashboard Page...</h1>

            <p>currentTheme: {theme}</p>
        </div>
    )
}