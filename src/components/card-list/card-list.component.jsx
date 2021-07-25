import React from 'react';

import { Card } from '../card/card.component';

import FlipMove from 'react-flip-move';

import './card-list.styles.css';

export const CardList = (props) => (
	<FlipMove
		staggerDurationBy='30'
		duration={800}
		enterAnimation='elevator'
		leaveAnimation='elevator'
		className='card-list'>
		{props.monsters.map((monster) => (
			<Card key={monster.id} monster={monster} />
		))}
	</FlipMove>
);
