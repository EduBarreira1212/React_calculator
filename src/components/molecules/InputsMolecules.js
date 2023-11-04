import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Section from "../atoms/Section";

export default function InputsMolecule(props){

    const {value1, value2, onChange1, onChange2} = props

    return (
        <>
            <Section className="inputs">
                <Label>First number</Label>
                <Input value={value1} onChange={onChange1}/>
                <Label>Second number</Label>
                <Input value={value2} onChange={onChange2}/>
            </Section>
        </>
    );
}