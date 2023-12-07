import { useState, createContext, useContext } from 'react';

const DataContext = createContext();

function DataProvider({ children }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [cursorVariant, setCursorVariant] = useState('default');
	const [selectedWork, setSelectedWork] = useState(null);
	const [cookie, setCookie] = useState(false);

	function handleMenuOpen() {
		setMenuOpen((menuOpen) => !menuOpen);
	}

	function handleCursorEnter() {
		setCursorVariant('text');
	}
	function handleCursorLeave() {
		setCursorVariant('default');
	}
	function handleCursorHeader() {
		setCursorVariant('header');
	}

	function handleCloseCookie() {
		localStorage.setItem('cookie', 'true');
		setCookie(true);
	}

	return (
		<DataContext.Provider
			value={{
				menuOpen,
				handleMenuOpen,
				mousePosition,
				setMousePosition,
				cursorVariant,
				handleCursorEnter,
				handleCursorLeave,
				handleCursorHeader,
				setMenuOpen,
				selectedWork,
				setSelectedWork,
				cookie,
				handleCloseCookie,
				setCookie,
			}}>
			{children}
		</DataContext.Provider>
	);
}

function useData() {
	const context = useContext(DataContext);
	if (context === undefined)
		throw new Error('useData was used outside provider');
	return context;
}

export { DataProvider, useData };
