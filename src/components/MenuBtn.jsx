import { useData } from '../context/DataContext';

function MenuBtn() {
	const { menuOpen, handleMenuOpen, handleCursorEnter, handleCursorLeave } =
		useData();

	return (
		<div
			className='menuBtn'
			onClick={handleMenuOpen}
			onMouseEnter={handleCursorEnter}
			onMouseLeave={handleCursorLeave}>
			<p>{menuOpen ? 'Close' : 'Menu'}</p>
			<div className={`burgerBtn ${menuOpen ? 'burgerActive' : ''}`}></div>
		</div>
	);
}

export default MenuBtn;
