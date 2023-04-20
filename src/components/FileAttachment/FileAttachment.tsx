import React, { useRef, useState } from 'react';
import TextArea from '../Inputs/TextArea/TextArea';
import './FileAttachment.scss';


export const FileAttachment = () => {
  const [droppedFiles, setDroppedFiles] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSelectFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileName = e.target.files[0].name;
      setDroppedFiles((prev) => [...prev, fileName]);
    }
  };

  return (
    <div className="file-attach-container">
      <div className="file-attach">
        <div onClick={() => inputRef.current?.click()} className="text_mini file-attach__btn">
          <span className="text_gray">+</span> {droppedFiles.length > 0 && droppedFiles.join(', ')}{' '}
          <span className="text_yellow">Attach a File</span>
        </div>
        <input onChange={handleSelectFiles} ref={inputRef} type="file" />
      </div>
      <TextArea label="Tell about Your results" placeholder="..." />
    </div>
  );
};

export default FileAttachment;
