import React from 'react';
import Logo from '../../img/logo.png'
import { AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import armenia from '../../img/armenian.png'
import { Link, useLocation } from 'react-router-dom';
import russian from '../../img/russian.png'


function Header({ totalItems }) {


    const classes = useStyles();
    return (
        <header className="header">
            <div className="mailInfo">
                <i class="fas fa-mail-bulk"></i>
                <div className="mail">sales@rcandle.am</div>
            </div>

            <div className="logo">
                <img src={Logo} />
            </div>

            <div className="languages">
                <ul>
                    <li><img src={armenia} /></li>
                    <li><img src={russian} /></li>
                </ul>
                </div>
                <IconButton component={Link} to="/cart" aria-label="show cart items" color="inherit">
                    <Badge badgeContent={2} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                
        </header>
    )
}

export default Header