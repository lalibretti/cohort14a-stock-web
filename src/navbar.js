
import React  from 'react';

function Navbar(props){
    return(
        <div className={'col-span-12 border rounded-3xl p-10 border-white bg-gray-800 text-center tracking-widest font-mono '}>

                  <h1 className={'text-4xl text-white '}>STOCK TRADER</h1>

              </div>
    )
}

export default Navbar;

import React, {useState, useEffect} from 'react';

function Navbar(props) {
    return (
        <>
            <div className={'col-span-12 border p-10 bg-gray-400 text-center'}>

                <h1 className={'text-4xl'}>Paper Trader</h1>

            </div>
        </>
    );
}

export default Navbar;
