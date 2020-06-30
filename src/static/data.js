import NodeIcon from './Tecnologias/nodejs-icon.svg';
import ReactIcon from './Tecnologias/reactjs-icon.svg';
import MongoIcon from './Tecnologias/mongodb-icon.svg';
import PostgresqlIcon from './Tecnologias/postgresql-icon.svg';
import SpringIcon from './Tecnologias/springio-icon.svg';
import MustacheIcon from './Tecnologias/mustache-icon.svg';
import MySQLIcon from './Tecnologias/mysql-icon.svg';
import WarningIcon from './warning.svg';

import React from 'react';


export const works = [
    
    {
        id: 0,
        name: 'ticketer',
        img: [
                'porfolio/Ticketer/01_yqe57z.png',
                'porfolio/Ticketer/05_ammfan.png',
                'porfolio/Ticketer/03_shmpi8.png',
                'porfolio/Ticketer/02_tz7izp.png',
                'porfolio/Ticketer/06_owl5oa.png',
                'porfolio/Ticketer/04_wbo3il.png',
            ],
        tec: [
            {
                id: "t02",
                icon: ReactIcon,
            },
            {
                id: "t04",
                icon: PostgresqlIcon
            },
            {
                id: "t05",
                icon: SpringIcon
            }
        ],
        text:<> 
                <div
                    className="warn"
                >
                    <WarningIcon />
                    <p>
                    Esta aplicación está alojada en un dyno gratis de Heroku, por lo tanto los tiempos de carga pueden ser lentos inicialmente
                    </p>
                </div>
                <p>
                Ticketer es una aplicación desarrollada en React.js del lado del frontend. Java, más específicamente Srping framework, del lado del backend. Y PostgresQL junto a Hibernate para la persistencia de datos.
                </p>
                <p>
                La misma nació bajo la necesidad de tener un medio para la organización de las actividades de un proyecto (tickets), de uno o más programadores durante la fase de desarrollo.
                </p>
            </>,
        url: "https://codeticketer.herokuapp.com/",
        git: "https://github.com/JoaquinNoguera/Ticketer/"
    },
    {
        id: 1,
        name: "am-montajes",
        img: [ 
                'porfolio/AyM/01_jhoqhl.png',
                'porfolio/AyM/04_xfechp.png',
                'porfolio/AyM/07_mvehuh.png',
                'porfolio/AyM/03_furfvt.png',
                'porfolio/AyM/02_omkuk1.png',
                'porfolio/AyM/06_qgpc0g.png',
                'porfolio/AyM/05_u5jzsq.png',
            ],
        tec: [
            {
                id: "t01",
                icon: NodeIcon,
            },
            {
                id: "t06",
                icon: MustacheIcon
            },
            {
                id: "t07",
                icon: MySQLIcon
            }
        ],
        text:<>
                <p>
                AyM es una página que consta de un server side render desarrollado en express.js. Un motor de plantillas como mustache para el manejo de vistas. Y MySQL para la persistencia de datos.
                </p>
                <p>
                La misma fue desarrollada para una empresa de mantenimiento y montaje de plantas de silos. Tiene la función de presentar a la empresa ante la sociedad y difundir su catálogo de productos que se encuentran al a venta.
                </p>
            </>,
        url: "https://aym-montajes.com/",
        git: null,
    }
    ,{
        id: 2,
        name: "corona-info",
        img: [ 
            'porfolio/CoronaInfo/01_gukxuw.png',
            'porfolio/CoronaInfo/03_nrk8xw.png',
            'porfolio/CoronaInfo/02_uidqlj.png',
            ],
        tec: [ {
                    id: "t01",
                    icon: NodeIcon,
                }, {
                    id: "t02",
                    icon: ReactIcon,
                }, {
                    id: "t03",
                    icon: MongoIcon,
                },],
        text:<>
                <div
                    className="warn"
                >
                    <WarningIcon />
                    <p>
                    Esta aplicación está alojada en un dyno gratis de Heroku, por lo tanto los tiempos de carga pueden ser lentos inicialmente
                    </p>
                </div>
                <p>
                Corona Info es una simple page aplication (SPA) desarrollada en React.js, cuyo objetivo es mostrar la evolución del virus Covid-19 a nivel global. En ella, mediante gráficos de torta, se pueden apreciar las proporciones de los enfermos, curados y muertos en base a la cantidad de contagiados total. Además, mediante gráficos de dispersión, se puede ver su evolución del mismo virus a lo largo del tiempo.
                 </p>
                 <p>
                 Para la persistencia de los datos se desarrolló un backend sencillo desarrollado en Express.js, que recolecta los datos que provee una api externa y los almacena en una base de datos MongoDB. </p>
             </>,
        url: "https://joaquinnoguera.github.io/CoronaInfo/",
        git: "https://github.com/JoaquinNoguera/CoronaInfo/"
    }
]
    