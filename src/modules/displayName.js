import {createContext, useState} from 'react';

const NameContext = createContext({
    state: {name: ''},
    actions: {setName: () => {}}
});

export default NameContext;