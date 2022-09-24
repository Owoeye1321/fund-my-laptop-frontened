import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import Drawer from '../Mobile/Drawer';
import FooterHomeEight from './FooterHomeEight';
import HeaderHomeEight from './HeaderHomeEight';
import HeroHomeEight from './HeroHomeEight';
import SignupHomeEight from './SignupHomeEight';

function HomeEight() {
    const [drawer, setDrawer] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={setDrawer.toggle} />
            <HeaderHomeEight drawer={drawer} action={setDrawer.toggle} />
            <HeroHomeEight />
            <SignupHomeEight />
            <FooterHomeEight />
            <BackToTop className="back-to-top-8" />
        </>
    );
}

export default HomeEight;
