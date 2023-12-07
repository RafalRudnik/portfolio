import { createContext, useContext, useReducer } from 'react';

const initialState = {
	reactIcon: false,
	viteIcon: false,
	htmlIcon: false,
	sassIcon: false,
	reduxIcon: false,
	tailwindIcon: false,
	jsIcon: false,
};

function reducer(state, action) {
	switch (action.type) {
		case 'react':
			return { ...state, reactIcon: true };
		case 'sass':
			return { ...state, sassIcon: true };
		case 'vite':
			return { ...state, viteIcon: true };
		case 'html':
			return { ...state, htmlIcon: true };
		case 'js':
			return { ...state, jsIcon: true };
		case 'redux':
			return { ...state, reduxIcon: true };
		case 'tailwind':
			return { ...state, tailwindIcon: true };
		default:
			throw new Error('unkown action type');
	}
}

const IconContext = createContext();

function IconsProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const {
		reactIcon,
		viteIcon,
		htmlIcon,
		sassIcon,
		reduxIcon,
		tailwindIcon,
		jsIcon,
	} = state;

	return (
		<IconContext.Provider
			value={{
				dispatch,
				reactIcon,
				viteIcon,
				htmlIcon,
				sassIcon,
				reduxIcon,
				tailwindIcon,
				jsIcon,
			}}>
			{children}
		</IconContext.Provider>
	);
}

function useIcons() {
	const context = useContext(IconContext);
	if (context === undefined)
		throw new Error('useIcons was used outside provider');
	return context;
}

export { IconsProvider, useIcons };
