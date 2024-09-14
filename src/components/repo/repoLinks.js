import React from 'react'
import { useThemeContext } from '../../context/themeContext';
import { Link } from 'react-router-dom';

const RepoLinks = () => {
    const { pageTheme } = useThemeContext()

    const gitRepos = [
        {
            title: 'Bookstore Application',
            link: 'https://github.com/Ola157/bookstore.git'
        },

        {
            title: 'AI Journey Application',
            link: 'https://github.com/Ola157/tripbuddy.git'
        },
        {
            title: 'Inventory Application',
            link: 'https://github.com/Ola157/app_inventory.git'
        },
        {
            title: 'Invoice Application',
            link: 'https://github.com/Ola157/invoice-app.git'
        },
        {
            title: 'School Application',
            link: 'https://github.com/Ola157/react-school-portal.git'
        },
        {
            title: 'Exchange Application',
            link: 'https://github.com/Ola157/currencyXchange.git'
        },
        {
            title: 'Todo Application',
            link: 'https://github.com/Ola157/todoApp.git'
        },
        {
            title: 'Portfolio Application',
            link: 'https://github.com/Ola157/Portfolio.git'
        },
        {
            title: 'School Server',
            link: 'https://github.com/Ola157/reactSchoolAppBackEnd.git'
        },
        {
            title: 'Inventory Server',
            link: 'https://github.com/Ola157/inventoryBE.git'
        },
        {
            title: 'Bookstore Server',
            link: 'https://github.com/Ola157/bookStoreBackEnd.git'
        },
        {
            title: 'Invoice Server',
            link: 'https://github.com/Ola157/invoiceBackEnd.git'
        },
        {
            title: 'Tradex Application',
            link: 'https://github.com/Ola157/tradeX.git'
        },
        {
            title: 'Tradex Server',
            link: 'https://github.com/Ola157/tradeXserver.git'
        }

    ];

    return (
        <section className={pageTheme === 'lightmode' ?
            'repo-section-lightmode' : 'repo-section-darkmode'}>

            {gitRepos.map((git, index) => (
                <Link to={git.link} key={index}>
                    <span>{git.title}</span>
                </Link>
            ))}

        </section>
    )
}

export default RepoLinks
