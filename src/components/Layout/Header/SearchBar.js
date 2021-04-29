import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function SearchBar( {searchBarOpen, setSearchBarOpen} ) {

    return (
        <div className={searchBarOpen ? "modal fade show" : "modal fade"} id="search-modal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-remove">
                <button onClick={() => setSearchBarOpen(!searchBarOpen)}>
                    <i><FontAwesomeIcon icon={['far', 'window-close']}/></i>
                </button>
            </div>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <form>
                        <input type="text" placeholder="Search here..." />
                            <button>
                                <i><FontAwesomeIcon icon={['fas', 'search']}/></i>
                            </button>
                    </form>
                </div>
            </div>
        </div>
    )
}