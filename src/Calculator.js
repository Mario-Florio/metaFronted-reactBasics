import { useState, useRef } from "react";

function Calculator() {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    const plus = e => {
        e.preventDefault();
        setResult(result => result + Number(inputRef.current.value));
    }

    const minus = e => {
        e.preventDefault();
        setResult(result => result - Number(inputRef.current.value));
    }

    const times = e => {
        e.preventDefault();
        setResult(result => result * Number(inputRef.current.value));
    }

    const divide = e => {
        e.preventDefault();
        setResult(result => result / Number(inputRef.current.value));
    }

    const resetInput = e => {
        e.preventDefault();
        inputRef.current.value = 0;
    }

    const resetResult = e => {
        e.preventDefault();
        setResult(prevVal => prevVal * 0);
    }

    return(
        <form 
            className="Calculator"
            onSubmit={e => e.preventDefault()}
        >
            <p ref={resultRef}>{result}</p>
            <input 
                pattern="[0-9]"
                ref={inputRef}
                type="number"
                placeholder="Type a number"
            />
            <button onClick={plus}>add</button>
            <button onClick={minus}>minus</button>
            <button onClick={times}>times</button>
            <button onClick={divide}>divide</button>
            <button onClick={resetInput}>reset input</button>
            <button onClick={resetResult}>reset result</button>
        </form>
    );
}

export default Calculator;