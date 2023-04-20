import React, { useState } from 'react';
import dynamic from "next/dynamic";

const ReactQuill = dynamic(import('react-quill'), { ssr: false })

function QuillEditor() {
    const [text, setText] = useState('');

    function handleChange(value) {
        setText(value);
    }

    return (
        <ReactQuill value={text} onChange={handleChange} />
    );
}

export default QuillEditor;




