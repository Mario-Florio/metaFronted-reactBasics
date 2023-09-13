import { useState, useEffect, useRef } from "react";

function Calculator() {
    const [input, setInput] = useState(0);
    const [result, setResult] = useState(0);

    useEffect(() => {
        if (result === Infinity) setResult(0);
    }, [result, input]);

    const handleChange = e => {
        setInput(e.target.value)
    }

    const plus = e => {
        e.preventDefault();
        setResult(result => result + Number(input));
    }

    const minus = e => {
        e.preventDefault();
        setResult(result => result - Number(input));
    }

    const times = e => {
        e.preventDefault();
        setResult(result => result * Number(input));
    }

    const divide = e => {
        e.preventDefault();
        setResult(result => result / Number(input));
        console.log(result);
    }

    const resetInput = e => {
        e.preventDefault();
        setInput(0);
    }

    const resetResult = e => {
        e.preventDefault();
        setResult(0);
    }

    return(
        <form 
            className="Calculator"
            onSubmit={e => e.preventDefault()}
        >
            <p>{result}</p>
            <input 
                pattern="[0-9]"
                value={input}
                onChange={handleChange}
                type="number"
                placeholder="Type a number"
            />
            <br/>
            <button onClick={plus}>add</button>
            <button onClick={minus}>minus</button>
            <button onClick={times}>times</button>
            <button onClick={divide}>divide</button>
            <br/>
            <button className="reset" onClick={resetInput}>reset input</button>
            <button className="reset" onClick={resetResult}>reset result</button>
        </form>
    );
}

export default Calculator;