export default function Input(props){
    const {value, onChange} = props
    return <input value={value} onChange={onChange}/>
}