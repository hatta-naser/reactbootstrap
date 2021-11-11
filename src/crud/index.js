import React, { Component } from 'react'
import Formulir from './Formulir'
import NavBarComponent from './NavBarComponent'
import Tabel from './Tabel'

export default class Crud extends Component {
    render() {
        return (
            <div>
                <NavBarComponent />
                <div className="container mt-6">
                    <Tabel />
                    <Formulir />
                </div>
            </div>
        )
    }
}
