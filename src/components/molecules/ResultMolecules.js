import Label from "../atoms/Label";
import InputReadOnly from "../atoms/InputReadOnly";
import Section from "../atoms/Section";

export default function ResultsMolecule(props){
    return (
        <>
            <Section className="result">
                <Label>Result</Label>
                <InputReadOnly value={props.valueInput}></InputReadOnly>
            </Section>
        </>
    );
}