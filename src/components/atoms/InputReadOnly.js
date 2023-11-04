export default function InputReadOnly(props){
    const {value} = props
    return <input value={value} readOnly={true}/>
}