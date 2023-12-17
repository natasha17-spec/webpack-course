import React from 'react';
import {Link, Outlet} from "react-router-dom";
import classes from './App.module.scss'

import jpegPicture from '@/assets/cat.jpeg'
import pngPicture from '@/assets/new.png'
import IconSvg from '@/assets/home.svg'


export const App = () => {

    return (
        <div data-testid={'test'}>
            <div><img src={jpegPicture} alt={''}/></div>
            <div>{__PLATFORM__}</div>
            {
                __ENV__ === 'development' &&
                (
                    <div>
                        <div>
                            <img width={100} height={100} src={pngPicture} alt={''}/>
                        </div>
                        <IconSvg width={500} height={500}/>
                    </div>

                )
            }

            <Link to={'/about'}>About</Link>
            <Link to={'/shop'}>Shop</Link>
            <button className={classes.sdsdf}><span>dfd</span></button>
            Hello Wordsdfsdf
            <Outlet/>
        </div>
    );
};

export default App;