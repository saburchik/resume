// == Base:
import React from 'react'
import { FormattedMessage } from 'react-intl'
// == Styles:
import './Articles/Article.css'
// == Images:
import republic_jpg from '../img/republic.jpg'
import republic_webp from '../img/republic.webp'
import chelsea_jpg from '../img/chelsea.jpg'
import chelsea_webp from '../img/chelsea.webp'
import helmda_jpg from '../img/helmda.jpg'
import helmda_webp from '../img/helmda.jpg'
import starwars from '../img/starwars.jpg'
import varcalc from '../img/varcalc.jpg'
import widget from '../img/widget.jpg'

const Portfolio = () => {
	return (
		<ul className='portfolio__inner'>
			<li className='portfolio__items'>
				<a
					className='portfolio__link'
					href='https://github.com/saburchik/rit'
					rel='noreferrer'
					target='_blank'
				>
					<picture className='images__inner'>
						<source srcSet={starwars} type='image/webp' />
						<img src={starwars} alt='Изоб-ние проекта' />
					</picture>
					<p className='portfolio__title'>— Star Wars API | 2022</p>
					<ul className='portfolio__stack-item'>
						<li className='portfolio__suptitle'>
							<p>
								<FormattedMessage id='stack' />:
							</p>
						</li>
						<li>Angular.js</li>
						<li>TailwindCSS</li>
						<li>TypeScript</li>
					</ul>
				</a>
			</li>
			<li className='portfolio__items'>
				<a
					className='portfolio__link'
					href='https://github.com/saburchik/variable-calculator'
					rel='noreferrer'
					target='_blank'
				>
					<picture className='images__inner'>
						<source srcSet={varcalc} type='image/webp' />
						<img src={varcalc} alt='Изоб-ние проекта' />
					</picture>
					<p className='portfolio__title'>— Variable Calculator | 2022</p>
					<ul className='portfolio__stack-item'>
						<li className='portfolio__suptitle'>
							<p>
								<FormattedMessage id='stack' />:
							</p>
						</li>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript(ES6+)</li>
						<li>OOP</li>
					</ul>
				</a>
			</li>
			<li className='portfolio__items'>
				<a
					className='portfolio__link'
					href='https://github.com/saburchik/range-roll-widget'
					rel='noreferrer'
					target='_blank'
				>
					<picture className='images__inner'>
						<source srcSet={widget} type='image/webp' />
						<img src={widget} alt='Изоб-ние проекта' />
					</picture>
					<p className='portfolio__title'>— Widget Range-Roll | 2022</p>
					<ul className='portfolio__stack-item'>
						<li className='portfolio__suptitle'>
							<p>
								<FormattedMessage id='stack' />:
							</p>
						</li>
						<li>React.js</li>
						<li>TypeScript</li>
					</ul>
				</a>
			</li>
			<li className='portfolio__items'>
				<a
					className='portfolio__link'
					href='https://saburchik-helmda.herokuapp.com/'
					rel='noreferrer'
					target='_blank'
				>
					<picture className='images__inner'>
						<source srcSet={helmda_webp} type='image/webp' />
						<img src={helmda_jpg} alt='Изоб-ние проекта' />
					</picture>
					<p className='portfolio__title'>— Web-application | HelmDA | 2022</p>
					<ul className='portfolio__stack-item'>
						<li className='portfolio__suptitle'>
							<p>
								<FormattedMessage id='stack' />:
							</p>
						</li>
						<li>React.js</li>
						<li>Webpack</li>
						<li>SCSS</li>
					</ul>
				</a>
			</li>
			<li className='portfolio__items'>
				<a
					className='portfolio__link'
					href='https://github.com/saburchik/chelsea-dev-environment'
					rel='noreferrer'
					target='_blank'
				>
					<picture className='images__inner'>
						<source srcSet={chelsea_webp} type='image/webp' />
						<img src={chelsea_jpg} alt='Изоб-ние проекта' />
					</picture>
					<p className='portfolio__title'>— Landing-Page FC Chelsea | 2021</p>
					<ul className='portfolio__stack-item'>
						<li className='portfolio__suptitle'>
							<p>
								<FormattedMessage id='stack' />:
							</p>
						</li>
						<li>HTML</li>
						<li>SCSS</li>
						<li>JS</li>
						<li>Gulp</li>
						<li>AnyChart.js</li>
					</ul>
				</a>
			</li>
			<li className='portfolio__items'>
				<a
					className='portfolio__link'
					href='https://github.com/saburchik/republic-sportmarket'
					rel='noreferrer'
					target='_blank'
				>
					<picture className='images__inner'>
						<source srcSet={republic_webp} type='image/webp' />
						<img src={republic_jpg} alt='Изоб-ние проекта' />
					</picture>
					<p className='portfolio__title'>
						— Shopping Market | Republic | 2021
					</p>
					<ul className='portfolio__stack-item'>
						<li className='portfolio__suptitle'>
							<p>
								<FormattedMessage id='stack' />:
							</p>
						</li>
						<li>React.js</li>
						<li>Redux.js</li>
						<li>SCSS</li>
					</ul>
				</a>
			</li>
		</ul>
	)
}

export default Portfolio
