export default function List(props){
    const {array} = props;
    return(
        <>   
            <ul>
                {array.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
             </ul>
        </>
    );
}