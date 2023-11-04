import ButtonsMolecule from "../molecules/Buttons";
import InputsMolecule from "../molecules/InputsMolecules";
import ResultsMolecule from "../molecules/ResultMolecules";
import HistoricMolecule from "../molecules/HistoricMolecule";
import {useEffect, useState} from "react";

export default function OperationsOrganisms(props){
    
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [result, setResult] = useState(0);
    const [listResult, setListResult] = useState([]);
  
    useEffect(() => {
        setListResult((prev) => [...prev, result])
    }, [result]);

    return (
        <>
            <InputsMolecule 
             value1={firstNumber}
             onChange1={e => setFirstNumber(Number(e.target.value))}
             value2={secondNumber}
             onChange2={e => setSecondNumber(Number(e.target.value))}
             />
            <ButtonsMolecule 
             button1={() => setResult(firstNumber + secondNumber)}
             button2={() => setResult(firstNumber - secondNumber)} 
             button3={() => setResult(firstNumber * secondNumber)} 
             button4={() => setResult(firstNumber / secondNumber)}
             />
            <ResultsMolecule 
             valueInput={result}
            />
            <HistoricMolecule 
             array={listResult}
            />
        </>
    );
}