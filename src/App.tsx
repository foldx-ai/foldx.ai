import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";
import 'grapesjs/dist/css/grapes.min.css'
import grapesjs from "grapesjs";

import websitePlugin from 'grapesjs-preset-webpage';
import basicBlockPlugin from 'grapesjs-blocks-basic'
import formPlugin from 'grapesjs-plugin-forms'

function App() {
    useEffect(() => {
        grapesjs.init({
            container: '#gjs',
            width: '100%',
            plugins: [websitePlugin, basicBlockPlugin, formPlugin],
        })
    }, []);
    return (
        <div id="gjs"></div>
    );
}

export default App;
