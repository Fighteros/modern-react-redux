import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Translate = ({ language, text }) => {
    // my key = AIzaSyDKsNDWnSxwH0sGp7viA71BfiJ3aR1t0Zw
    // his key = AIzaSyCf0Xy0OnhxlduyEt3K8zP-sOuu-l_u6uA
    const doTransaltion = async (input, langagueCode, cancelToken) => {
        try {
            const { data } = await axios.post(
                'https://translation.googleapis.com/language/translate/v2?key=AIzaSyCf0Xy0OnhxlduyEt3K8zP-sOuu-l_u6uA',
                {
                    q: input,
                    target: langagueCode
                },
                { cancelToken: cancelToken.token }
            );
            return data.data.translations[0].translatedText
        } catch (err) {
            console.log(err)
        }
    }


    const [translated, setTranslated] = useState("");

    useEffect(() => {
        if (!text) {
            return;
        }
        const cancelToken = axios.CancelToken.source();

        doTransaltion(text, language, cancelToken).then(setTranslated);

        return () => {
            try {
                cancelToken.cancel();
            } catch (err) { }
        };
    }, [text, language]);


    return (
        <div>
            <label className="label">Output</label>
            <h1 className="title">{translated}</h1>
        </div >
    )
}

export default Translate
