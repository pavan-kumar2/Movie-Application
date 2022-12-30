import React, { useState } from 'react'
import './style.css'

export const Header = ({ searchApi, apiUrl, getApi }) => {

    const [search, setSearch] = useState('');

    const searchFunc = (e) => {
        e.preventDefault()
        if (search && search !== '') {
            getApi(searchApi + search);
        } else {
            getApi(apiUrl);
        }
    }

    return (
        <div>
            <header>
                <div>
                    <h1>Movie App</h1>
                </div>
                <div className='body-form'>
                    <form onSubmit={searchFunc}>
                        <input type='submit' value='Search' className='submit' />
                        <input type='search' value={search} onChange={e => { setSearch(e.target.value) }} id='search' className='search' placeholder='Search' />
                    </form>
                </div>
            </header>
        </div>
    )
}
