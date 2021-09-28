/** 
 * 创作页面
 * */
import * as React from 'react'
import { observer } from 'mobx-react-lite' 
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

const { useState } = React

const Creation: React.FC = observer(() => {
    const [editorState, setEditorState] = useState<EditorState>(() => 
        EditorState.createEmpty(),
    )

    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState);
            return 'handled';
        }
        return 'not-handled';
    }
    
    const _onBoldClick = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    }
    return <div>
        <button onClick={_onBoldClick}>Bold</button>
         <Editor
            editorState={editorState}
            onChange={setEditorState}
            handleKeyCommand={handleKeyCommand}    
        />
    </div>
})

export default Creation