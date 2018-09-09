import React, { Component } from 'react';

import {BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import ListDescription from './ListDescription';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
//import InboxIcon from '@material-ui/icons/Inbox';
//import DraftsIcon from '@material-ui/icons/Drafts';

//import List from './List.jsx';

const Fragment = React.Fragment;

const history = createBrowserHistory();

const list = [
	{
		id: 1,
		name: "BMW",
		desc: "Основой нынешнего автомобильного завода стало предприятие по производству моторов, располагавшееся в Мюнхене. Спустя определенное время данное предприятие слилось с авиационным заводом, после чего приобрело нынешнее название компании. Если говорить о логотипах автомобильных марок, то у BMW тоже достаточно интересная история. На первой эмблеме автомобиля BMW был изображён пропеллер, однако она казалась сложной и мелкой, поэтому логотип претерпел трансформацию к 1920 году. Чтобы эмблемы автомобильной марки BMW выглядели красиво, то круг от пропеллера разделили на 4 четверти. На новом логотипе машин серебристо-белые сектора внутри черного ободка стали чередоваться с небесно-голубыми. Теперь логотип авто BMW выполнене в традиционных баварских цветах, изображенных на флаге Баварии.  Однако истинное значение логотипа от этих автопроизводителей знают немногие. Многим нравится миф о том, что логотип на авто BMW изображает пропеллер и небо. Но, на самом деле, это баварский флаг."
	},
	{
		id: 2,
		name: "Alfa Romeo",
		desc: "Законодателем знаменитой в современном мире автомобильной корпорации является Николо Ромео, который заработал свое первое состояние на реализации оборудования для транспортировки грунта. Чуть позже предприниматель меняет профессию, отдав предпочтение автомобильному бизнесу, где в скором времени становится главой крупной компании «Alfa». Впоследствии путём объединения названия компании и собственной фамилии возник популярный автомобильный бренд. Увидев эмблему машины Alfa Romeo, скорее всего, вы четко понимаете, что перед вами автомобиль премиум-класса. Логотип этих машин был разработан в 1910 году, чертежником Романо Кастелло. Автор автомобильного логотипа был впечатлен красным перекрестием флага Милана, который он увидел на фасаде дома Висконти. На доме находился герб с травяной змеей, которая заглатывает человека. Сам герб символизировал готовность к уничтожению врагов рода Висконти.Эмблема машины практически не претерпела изменений с момента создания, правда, отдавая дань моде, немного упразднялись мелкие витиеватые детали."
	},
	{
		id: 3,
		name: "Ferrari",
		desc: "Создателем известного автомобильного бренда, под которым выпускаются машины класса люкс, является Энцо Феррари, чья карьера в качестве автопроизводителя началось с создания команды гонщиков. Впоследствии был выбран столь узнаваемый значок для автомобилей. Как появилась такая эмблема для машины? На одной из гонок Энцо Феррари познакомился с графом Франческо Барака, на фюзеляже аэроплана которого был изображен гарцующий жеребец. Мать Франческо подарила Энцо семейный герб и порекомендовала изобразить на эмблеме автомобиля вздыбленную лошадь, которая, по ее словам, должна была принести удачу. Как видим, графиня Паолина Барака не соврала. Этот автомобильный логотип теперь вызывает у нас прочные ассоциации с роскошью, и даже само слово Ferrari стало символом богатства."
	}
]

//let linkTo = `/list/${list.name.trim().toLowerCase().replace(' ' , '-')}`;

const activeLink = {fontWeight: 'bold'};

function urlFriendly(path){
	return `/${path.trim().toLowerCase().replace(' ', '-')}`;
}


class Auto extends Component {
	constructor(props){
		super(props);
		
	}
	
  render() {
    return (
			<BrowserRouter>
				<Fragment>
					<div className="auto">
						<List component="nav">
							{list.map(item => 
								<Fragment>
									<ListItem key={item.id} button>
										<NavLink to={urlFriendly(`auto/${item.name}`)} activeStyle={activeLink}>
											<ListItemText primary={item.name} />
										</NavLink>
									</ListItem>
									<Route exact path={urlFriendly(`auto/${item.name}`)} render={()=><ListItemText style={{textAlign: "left", padding: "15px 50px", background: "#eee"}} primary={item.desc} />}></Route>
								</Fragment>
							)}
						</List>
					</div>
				</Fragment>
			</BrowserRouter>
    );
  }
}

export default Auto;
