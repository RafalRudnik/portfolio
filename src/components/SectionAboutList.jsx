import { motion } from 'framer-motion';

const data = [
	{
		titile: 'Studies',
		desc: 'I studied computer science at the Zielona Gora University. This educational background forms the basis of my proficiency in approaching technical challenges and contributing effectively to the field of computer science.',
		id: 1,
	},
	{
		titile: 'Passionate',
		desc: 'Passion for frontend and technology pushing me to explore, create, and innovate in the ever-evolving digital landscape. As an enthusiasts in this field i find joy in crafting visually appealing and user-friendly interfaces',
		id: 2,
	},
	{
		titile: 'Frontend Dev',
		desc: 'A React Frontend Developer specializes in creating user interfaces for web applications using the React JavaScript library. Leveraging a component-based architecture, JSX syntax, and a virtual DOM, they build interactive, scalable, and efficient interfaces.',
		id: 3,
	},
	{
		titile: 'After work',
		desc: 'Outside of work, I`m an avid NBA basketball enthusiast. As a dedicated Apple fanboy, I eagerly explore the latest innovations in technology. I`m a passionate LEGO fan, reveling in the creative process of building intricate structures. I cherish quality time playing and bonding with my son, engaging in activities that foster a strong parent-child connection and create lasting memories.',
		id: 4,
	},
];

function SectionAboutList() {
	return (
		<ul className='aboutList'>
			{data.map((item) => (
				<ListItem item={item} key={item.id} />
			))}
		</ul>
	);
}

export default SectionAboutList;

function ListItem({ item }) {
	return (
		<li className='aboutList-item'>
			<div className='aboutList-item--bg'></div>
			<div className='container'>
				<div className='aboutList-item--container'>
					<motion.div
						className='aboutList-item--title'
						initial={{ opacity: 0.2, y: 80 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true }}>
						{item.titile}
					</motion.div>
					<div className='aboutList-item--desc paragraph'>{item.desc}</div>
				</div>
			</div>
		</li>
	);
}
