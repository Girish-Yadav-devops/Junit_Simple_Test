import React, { useState } from 'react';

const JUnitTestSimulator = () => {
    const [output, setOutput] = useState(null); 
    const [isTestHidden, setIsTestHidden] = useState(true); 
    const [explanation, setExplanation] = useState('');  // To hold the explanation of the process

    const runTest = () => {
        setIsTestHidden(false);  
        setExplanation('Running test: Checking if the sum of 2 and 3 equals 5...');
        
        const result = testAddNumbers(2, 3); 
        if(result) {
            setExplanation(prev => prev + ' Test Passed: 2 + 3 = 5');
        } else {
            setExplanation(prev => prev + ' Test Failed: 2 + 3 does not equal 5');
        }

        setOutput(result ? 'green' : 'red'); 
    };

    const resetTest = () => {
        setIsTestHidden(true);  
        setOutput(null); 
        setExplanation('');  // Clear explanation when reset
    };

    const testAddNumbers = (a, b) => {
        return a + b === 5; 
    };

    return (
        <div>
            <h2>JUnit Test Simulator</h2>
            <button onClick={runTest}>Run Test</button>
            <button onClick={resetTest}>Reset Test</button>

            <div>
                {isTestHidden ? (
                    <p>Click "Run Test" to start the test.</p>
                ) : (
                    <p style={{ color: output === 'green' ? 'green' : 'red' }}>
                        Test Result: {output === 'green' ? 'Passed' : 'Failed'}
                    </p>
                )}
            </div>

            <div>
                {explanation && (
                    <p>{explanation}</p>  // Display the explanation of what is happening
                )}
            </div>
        </div>
    );
};

export default JUnitTestSimulator;
//green