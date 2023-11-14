import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as CrwnLogo } from '../../assets/home.svg';
import { ReactComponent as SignIn } from '../../assets/check-mark.svg';

import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';
import { userEvent } from '@storybook/testing-library';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>

                    <CrwnLogo className='logo' />
                </Link>

                <div className='nav-links-container'>

                    {currentUser ? (
                        <div>
                            Welcome Back! You are signed in {currentUser.email}
                            <SignIn style={{ width: 20, paddingLeft: 3, }} />
                        </div>
                    ) : (<></>)}
                    <div className='button'>

                        <Link className='nav-link' to='/income'>
                            Income
                        </Link>

                    </div>
                    {/* <div className='button'>

                        <Link className='nav-link' to='/faq'>
                            FAQ
                        </Link>
                    </div>
                    <div className='button'>

                        <Link className='nav-link' to='/shop'>
                            SHOP
                        </Link>
                    </div>  */}
                    {currentUser ? (
                        <div className='button'>

                            <span className='nav-link' onClick={signOutUser}>
                                SIGN OUT
                            </span>
                        </div>

                    ) : (
                        <div className='button'>

                            <Link className='nav-link' to='/auth'>
                                SIGN IN
                            </Link>
                        </div>
                    )}
                    {/* <CartIcon /> */}
                </div>
                {/* {isCartOpen && <CartDropdown />} */}
            </div>
            <Outlet />


        </Fragment>
    );
};

export default Navigation;