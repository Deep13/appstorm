import React, { useState } from 'react'
import Typed from 'react-typed';
import logoImage from '../../assets/appstrome logo trans.png';
import logo from '../../assets/favicon-appstorm.png';

export default function Create() {
    const [searchText, setsearchText] = useState('');
    const aSuggestions = {
        default: ['A GPT that analyze CSV data and provide a professional report',
            'A GPT can generates images of mythological creatures crossed with cyberpunk',
            'A GPT that can read the latest news and write it as a song',
            'A home fixer GPT that can analyze images and suggest repairs',],
        cricket: [
            "Vintage cricket moments GPT, generating sepia-toned images of historical plays."
            ,
            "Match Highlights Compiler that transforms user-provided key moments text descriptions into a visual storyboard."
            ,
            "Cricket diet GPT creates meal plans for athletes based on performance data."
            ,
            "Personalized Cricket Workout Planner that takes user physique images and suggests cricket-specific fitness routines."
        ],
        football: [
            "GPT that writes football game commentary in Shakespearean English."
            ,
            "Tailgate Recipe Generator that suggests recipes based on a text list of ingredients you have, complete with voice-guided cooking instructions."
            ,
            "GPT draft analyzer: assesses football team picks with witty remarks."
            ,
            "Haiku football match summarizer GPT, for poetic game recaps."

        ],
        anime: [
            "GPT for converting classic literature into anime scripts."
            ,
            "A GPT that writes anime-inspired fantasy epics."
            ,
            "Anime character design helper that creates character sketches from text descriptions of traits."
            ,
            "Haiku-writing GPT influenced by anime themes and characters."

        ]
    };
    const [suggestions, setsuggestions] = useState(aSuggestions.default);
    const [tags, settags] = useState([{ title: 'video', selected: false }, { title: 'audio', selected: false }, { title: 'media', selected: false }, { title: 'pics', selected: false }, { title: 'GPT4', selected: false }]);

    const insert = val => {
        console.log(val);
        setsearchText(searchText + val)
    }
    const calculateHeight = () => {
        // You can adjust the height calculation logic as per your requirements
        const defaultHeight = 20; // Default height in pixels
        const lineHeight = 1.5; // Line height factor
        const lines = Math.ceil(searchText.length / 20); // Number of characters per line
        return `${defaultHeight + lines * lineHeight}px`;
    };

    const setSelectedTag = title => {
        var newtags = tags.filter(val => {
            if (val.title === title) {
                val.selected = !val.selected;
            }
            return true
        });
        settags(newtags)
    }

    const setSelectedTagOnly = title => {
        if (title) {
            var newtags = tags.filter(val => {
                if (title.indexOf(val.title) > -1) {
                    val.selected = true;
                }
                else {
                    val.selected = false;
                }
                return true
            });
            settags(newtags)
        }
        else {

        }
    }

    const onTypeSearch = value => {
        setsearchText(value);
        if (value.indexOf('football') !== -1) {
            setsuggestions(aSuggestions.football);
            setSelectedTagOnly(['video', 'media']);
        }
        else if (value.indexOf('anime') !== -1) {
            setsuggestions(aSuggestions.anime);
            setSelectedTagOnly(['audio', 'pics']);
        }
        else if (value.indexOf('cricket') !== -1) {
            setsuggestions(aSuggestions.cricket);
            setSelectedTagOnly(['GPT4']);
        }
        else {
            setsuggestions(aSuggestions.default);
            setSelectedTagOnly([]);
        }

    }
    const clickclick = async (evt, parsedCommandU) => {

        const cube = document.getElementById("image");
        cube.classList.add("rotated-image");
        setTimeout(() => {
            // setInput('');
            cube.classList.remove("rotated-image");
            setsearchText('An app to name characters of anime');
            onTypeSearch('An app to name characters of anime')
        }, 2000);
        // }
    };
    return (
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div
                id="appstormId"
                onClick={clickclick}
                alt="Idea"
                style={{ padding: 5, marginRight: 5, width: 40, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
            >
                <img id="image" alt="app logo" src={logo} style={{ maxHeight: 80 }} />
                <img alt="app logo" src={logoImage} style={{ maxHeight: 50, marginBottom: 10 }} />
            </div>

            <Typed
                strings={[
                    'App to create something new',
                    'App to design',
                    'App to innovate']}
                typeSpeed={40}
                backSpeed={50}
                attr="placeholder"
                loop >
                <input
                    style={{ fontSize: 20, padding: '10px 20px', borderRadius: 20, borderWidth: 1, marginTop: 20, minWidth: 500, borderColor: '#0000005e', height: calculateHeight }}
                    type="text"
                    value={searchText}
                    onChange={(e) => onTypeSearch(e.target.value)}
                    onKeyUp={(e) => {
                        e.preventDefault();
                        if (e.key === "Enter") {
                            // navigate("/Dashboard")
                        }
                    }}
                />

            </Typed>
            <div style={{ marginTop: 20, color: 'black', width: '100%', textAlign: 'left', maxWidth: 500, }}>This app would include:</div>
            <div style={{ display: 'flex', width: '100%', gap: 10, marginTop: 20, maxWidth: 500, flexWrap: 'wrap', justifyContent: 'flex-start' }}>

                {
                    tags.map((val, index) => {
                        return <button onClick={() => setSelectedTag(val.title)} style={{ color: val.selected ? 'white' : 'black', padding: '5px 15px', borderRadius: 5, border: '1px solid', borderColor: val.selected ? 'white' : 'black', background: val.selected ? '#ff7400' : 'white', cursor: 'pointer', textAlign: 'left', lineHeight: '20px' }}>{val.title}</button>

                    })
                }
            </div>
            <div style={{ marginTop: 20, color: 'black', width: '100%', textAlign: 'left', maxWidth: 500, }}>Try these out:</div>

            <div style={{ display: 'flex', gap: 10, marginTop: 20, maxWidth: 500, flexWrap: 'wrap', justifyContent: 'flex-start' }}>

                {
                    suggestions.map((val, index) => {
                        return <button onClick={() => {
                            setsearchText(val);
                            onTypeSearch(val)
                        }} style={{ color: 'black', padding: '5px 15px', borderRadius: 5, border: '1px solid black', background: 'white', cursor: 'pointer', textAlign: 'left', lineHeight: '20px' }}>{val}</button>

                    })
                }
            </div>
        </div>
    )
}
