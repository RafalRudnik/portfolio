import { useData } from '../context/DataContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const pageLinks = [
	{
		linkTo: '/',
		linkName: 'Home',
		class: 'menu-item-link--leszek',
		img: './img/Menu_small.jpeg',
	},
	{
		linkTo: '/work',
		linkName: 'Work',
		class: 'menu-item-link--joanna',
		img: './img/Work_small.png',
	},
	{
		linkTo: '/contact',
		linkName: 'Contact',
		class: 'menu-item-link--contact',
		img: './img/Contact_small.jpeg',
	},
];

function Menu() {
	const { menuOpen } = useData();

	return (
		<AnimatePresence mode='wait'>
			{menuOpen && (
				<motion.div
					className='menu'
					initial={{ y: '-100%' }}
					animate={{ y: '0%' }}
					exit={{ y: '-100%' }}
					transition={{ duration: 0.5 }}>
					<div className='container'>
						<div className='menu-main'>
							<MobileMenu />
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default Menu;

function MobileMenu() {
	const [selectedLink, setSelectedLink] = useState({
		isActive: false,
		index: 0,
	});

	const menuList = useRef(null);

	useEffect(function () {
		const menu = menuList.current;

		gsap.fromTo(
			menu.children,
			{
				y: '+=30',
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.6,
				delay: 0.4,
				stagger: 0.2,
				ease: 'easeInOut',
			}
		);
	}, []);

	return (
		<motion.ul
			className='menu-list'
			ref={menuList}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.1 }}>
			{pageLinks.map((link, i) => (
				<PageLink
					link={link}
					key={link.linkName}
					index={i}
					selectedLink={selectedLink}
					setSelectedLink={setSelectedLink}
				/>
			))}
		</motion.ul>
	);
}

function PageLink({ link, index, selectedLink, setSelectedLink }) {
	const { handleMenuOpen, handleCursorHeader, handleCursorLeave } = useData();

	return (
		<>
			<li
				className={`menu-item ${link.class}`}
				onMouseEnter={handleCursorHeader}
				onMouseLeave={handleCursorLeave}>
				<Link
					to={`${link.linkTo}`}
					className={`menu-item-link ${
						selectedLink.isActive && selectedLink.index !== index
							? 'blurClass'
							: ''
					}`}
					onClick={handleMenuOpen}
					onMouseEnter={() => {
						setSelectedLink({ isActive: true, index });
					}}
					onMouseLeave={() => {
						setSelectedLink({ isActive: false, index });
					}}>
					{link.linkName}
				</Link>
			</li>
			{selectedLink.isActive && selectedLink.index === index ? (
				<motion.div
					className='menu-item--img'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					<img src={link.img} alt={link.linkName}></img>
				</motion.div>
			) : null}
		</>
	);
}
