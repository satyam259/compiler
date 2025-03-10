import React, { useEffect, useRef, useState } from "react";
import EditorNavbar from "../../component/editorNavbar";
import { MdLightMode } from "react-icons/md";
import { AiOutlineExpandAlt } from "react-icons/ai";
import Editor from "@monaco-editor/react";
import { CODE_SNIPPETS, LANGUAGE_VERSIONS } from "../../utils/constant";
import Output from "../../component/output";
const Editior = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [isLightMode, setIsLightMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [codesnippet, setCodeSnippet] = useState("");
  const editorRef = useRef();
  const languages = Object.entries(LANGUAGE_VERSIONS);

  const handleTheme = () => {
    if (isLightMode) {
      document.body.classList.remove("lightmode");
      setIsLightMode(false);
    } else {
      document.body.classList.add("lightmode");
      setIsLightMode(true);
    }
  };

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <>
      <EditorNavbar/>
      <div className="flex">
        <div className={`left ${isExpanded ? "w-[100%]" : "w-[50%]"}`}>
          <div className="tabs flex items-center justify-between gap-2 w-full bg-[#1A1919] h-[50px] px-[40px]">
            <div className="tabs flex items-center gap-2">
              <select
                value={selectedLanguage}
                onChange={(e) => {
                  const language = e.target.value;
                  setSelectedLanguage(language);
                  setCodeSnippet(CODE_SNIPPETS[language]);
                }}
                className="bg-[#1E1E1E] text-white p-2 rounded cursor-pointer tab"
              >
                {languages.map(([lang, version]) => (
                  <option key={version} value={lang}>
                 {`${lang} (${version})`}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <i className="text-[20px] cursor-pointer" onClick={handleTheme}>
                <MdLightMode />
              </i>
              <i
                className="text-[20px] cursor-pointer"
                onClick={() => {
                  setIsExpanded(!isExpanded);
                }}
              >
                <AiOutlineExpandAlt />
              </i>
            </div>
          </div>        
            <Editor
              onChange={(value) => {
                setCodeSnippet(CODE_SNIPPETS[value])
              }}
              height="100vh"
              theme={isLightMode ? "vs-light" : "vs-dark"}
              language={selectedLanguage}
              value={codesnippet}
              options={{
                minimap: {
                  enabled: false,
                },
              }}
              defaultValue={CODE_SNIPPETS[selectedLanguage]}
              onMount={onMount}
            />
        </div>
           <Output editorRef={editorRef} language={selectedLanguage} isexpanded={isExpanded}/>
      </div>
    </>
  );
};

export default Editior;
