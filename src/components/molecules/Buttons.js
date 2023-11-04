import Button from "../atoms/Button";
import Section from "../atoms/Section";

export default function ButtonsMolecule(props){
    return (
        <>
            <Section className="buttons">
                <Button onClick={props.button1}>+</Button>
                <Button onClick={props.button2}>-</Button>
                <Button onClick={props.button3}>X</Button>
                <Button onClick={props.button4}>/</Button>
            </Section>
        </>
    );
}