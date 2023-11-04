import Label from "../atoms/Label";
import List from "../atoms/ListResult";
import Section from "../atoms/Section";

export default function HistoricMolecule(props){
    return (
        <>
            <Section className="historic">
                <Label>Historic</Label>
                <List array={props.array}></List>
            </Section>
            
        </>
    );
}