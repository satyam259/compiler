import { useState } from "react";
import { executeCode } from "../../utils/api";

const Output = ({ editorRef, language, isexpanded }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    console.log(sourceCode,"sdaf")
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      setIsError(!!result.stderr);
    } catch (error) {
      console.error("Error running code:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${isexpanded ? "hidden" : "w-1/2"} p-3`}>
      <div className="flex justify-between items-center">
      <h2 className="tab mb-2 text-lg font-semibold ">Output</h2>
      <button
        className="mb-4 px-4 py-2 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white transition-all disabled:opacity-50"
        disabled={isLoading}
        onClick={runCode}
      >
        {isLoading ? "Running..." : "Run Code"}
      </button>
      </div>
      <div
        className={`h-[75vh] p-2 border rounded-md ${isError ? "border-red-500 text-red-400" : "border-gray-700 "}`}
      >
        {output
          ? output.map((line, i) => <p key={i} className="whitespace-pre-wrap">{line}</p>)
          : 'Click "Run Code" to see the output here'}
      </div>
    </div>
  );
};

export default Output;
