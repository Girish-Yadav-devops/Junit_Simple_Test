import React, { useState } from 'react';

const JUnitTestSimulator = () => {
  const [testResult, setTestResult] = useState(null); // Holds the test result (pass or fail)
  const [testStep, setTestStep] = useState(''); // Holds the current test explanation
  const [testRunning, setTestRunning] = useState(false); // Determines if the test is running
  const [showResult, setShowResult] = useState(false); // Controls the visibility of the test result

  // Simulate running the JUnit test
  const runTest = () => {
    setTestRunning(true);
    setTestStep('Running test: Checking if 2 + 3 equals 5...');
    
    // Simulate the test
    setTimeout(() => {
      const result = testAddNumbers(2, 3); // Run the test for adding numbers
      setTestResult(result);
      setTestStep(result ? 'Test Passed: 2 + 3 equals 5' : 'Test Failed: 2 + 3 does not equal 5');
      setShowResult(true); // Show the result after the test completes
      setTestRunning(false);
    }, 2000); // Simulate a delay for the test execution (e.g., network delay or test processing time)
  };

  // Reset the test
  const resetTest = () => {
    setTestResult(null);
    setTestStep('');
    setShowResult(false);
  };

  // Simulated test function (Add two numbers and check if the sum is correct)
  const testAddNumbers = (a, b) => {
    return a + b === 5;
  };

  return (
    <div>
      <h2>JUnit Test Simulator</h2>
      <div>
        <button onClick={runTest} disabled={testRunning}>Run Test</button>
        <button onClick={resetTest} disabled={testRunning || !showResult}>Reset Test</button>
      </div>

      {/* Display test progress and explanation */}
      <div>
        <p>{testStep}</p>
      </div>

      {/* Conditionally render the result of the test */}
      {showResult && (
        <div>
          <h3 style={{ color: testResult ? 'green' : 'red' }}>
            Test Result: {testResult ? 'Passed' : 'Failed'}
          </h3>
        </div>
      )}
      
      {/* Optional: Extra explanation when the test passes */}
      {testResult && (
        <div>
          <p>The test successfully validated that the sum of 2 and 3 is indeed 5.</p>
        </div>
      )}

      {/* Optional: Extra explanation when the test fails */}
      {!testResult && (
        <div>
          <p>There seems to be an error. The sum of 2 and 3 should be 5, but the test failed. Please check the implementation.</p>
        </div>
      )}
    </div>
  );
};

export default JUnitTestSimulator;
