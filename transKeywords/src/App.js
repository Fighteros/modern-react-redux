import React from 'react'
import Field from './components/Field'
import Langauges from './components/Langauges'
import Translate from './components/Translate'
import { useState } from 'react'


const App = () => {
  const [text, setText] = useState('')
  const [language, setLanguage] = useState('ar');

  return (
    <div>
      <Field label="Enter A Word" text={text} onChange={setText} />
      <Langauges language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  )
}

export default App
