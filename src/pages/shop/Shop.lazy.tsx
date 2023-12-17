import React, {lazy} from 'react';
import classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";

export const LazyShop = lazy(() => import('./Shop'))
