import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { RichTextEditor } from "@mantine/tiptap";

import {
  Paperclip,
  TextB,
  TextItalic,
  TextUnderline,
  X,
} from "@phosphor-icons/react";
import { Underline } from "@tiptap/extension-underline";
import "@mantine/tiptap/styles.css";
import { MantineProvider } from "@mantine/core";
import { twMerge } from "tailwind-merge";
import { useRef, useState } from "react";
const BoldIcon = () => <TextB size={20} />;
const ItalicIcon = () => <TextItalic size={20} />;
const UnderlineIcon = () => <TextUnderline size={20} />;

const CommentInput = () => {
  const [, setSelectedFiles] = useState<File[]>([]);
  const [selectedFileURLs, setSelectedFileURLs] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: "<p>Customize icons with icon prop</p>",
  });

  if (!editor) {
    return null;
  }

  // Function to determine if a formatting option is active
  const isActive = (format: string) => editor.isActive(format);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setSelectedFiles((prev) => [...prev, ...files]);
      const fileURLs = files.map((file) => URL.createObjectURL(file));
      setSelectedFileURLs((prev) => [...prev, ...fileURLs]);
    }
  };

  const handleDelete = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
    setSelectedFileURLs((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <MantineProvider>
      <div className="max-w-full border-2 border-gray-200 shadow-md rounded-2xl">
        <RichTextEditor
          editor={editor}
          className="p-3 min-h-48 flex flex-col space-y-2"
        >
          <RichTextEditor.Content className="flex-1" />

          <div className="border-b border-gray-500 flex items-center">
            {selectedFileURLs.map((eachFile, index) => (
              <div key={index} className="relative border rounded-lg">
                <X
                  className="absolute top-0 right-0 cursor-pointer"
                  onClick={() => handleDelete(index)}
                />
                <img
                  src={eachFile}
                  className="aspect-[9/16] object-contain h-20"
                />
              </div>
            ))}
          </div>
          <RichTextEditor.Toolbar className="flex justify-between">
            <RichTextEditor.ControlsGroup className="flex space-x-2">
              <button
                className={twMerge(
                  "flex items-center p-2 rounded-full text-gray-700",
                  isActive("bold") ? "bg-stone-200" : "",
                )}
                onClick={() => editor.chain().focus().toggleBold().run()}
                type="button"
              >
                <BoldIcon />
              </button>
              <button
                className={twMerge(
                  "flex items-center p-2 rounded-full text-gray-700",
                  isActive("italic") ? "bg-stone-200" : "",
                )}
                onClick={() => editor.chain().focus().toggleItalic().run()}
                type="button"
              >
                <ItalicIcon />
              </button>
              <button
                className={twMerge(
                  "flex items-center p-2 rounded-full text-gray-700",
                  isActive("underline") ? "bg-stone-200" : "",
                )}
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                type="button"
              >
                <UnderlineIcon />
              </button>

              <button>
                <label htmlFor="fileUpload" className="cursor-pointer">
                  <Paperclip size={20} />
                  <input
                    ref={fileInputRef}
                    type="file"
                    id="fileUpload"
                    className="hidden"
                    accept="image/*"
                    multiple={true}
                    onChange={handleChange}
                  />
                </label>
              </button>
            </RichTextEditor.ControlsGroup>
            <button className="text-gray-200 bg-black rounded-md px-3 py-1 self-end">
              Send
            </button>
          </RichTextEditor.Toolbar>
        </RichTextEditor>
      </div>
    </MantineProvider>
  );
};

export default CommentInput;
