import React, { forwardRef } from 'react';

import './card.styles.css';

//react-flip-move Does not work with stateless functional components without a React.forwardRef. This is because Flip Move uses refs to identify and apply styles to children, and stateless functional components cannot be given refs. Make sure the children you pass to <FlipMove> are either native DOM elements (like <div>), or class components.

export const Card = forwardRef((props, ref) => (
	<div ref={ref} className='card-container'>
		<img
			src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
			alt='monster'
		/>
		<h2>{props.monster.name}</h2>
		<p>{props.monster.email}</p>
	</div>
));
