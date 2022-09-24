import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeEight from '../HomeEight/FooterHomeEight';
import Drawer from '../Mobile/Drawer';
import HeaderService from '../Service/HeaderService';
import HeroNews from '../News/HeroNews';
import Forms from './Forms';
import { motion } from 'framer-motion/dist/framer-motion'

function Contact() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <motion.div
        initial = {{width: 0 }}
        animate = {{width: "100%" }}
        exit = {{ x: window.innerWidth, transition:{duration: 0.1} }}
        >
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderService action={drawerAction.toggle} />
            <HeroNews
                title="Contact Us"
                breadcrumb={[
                
                ]}
            />
            <Forms />
            <FooterHomeEight />
            <BackToTop />
        </motion.div>
    );
}

export default Contact;
