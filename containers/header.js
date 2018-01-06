import { Component } from 'react'

import Banner from '../components/Banner'
import Navigator from '../components/Navigator'
import CategoryContainer from '../containers/Category'
import CartContainer from '../containers/Cart'

export default class extends Component {
    render() {
        return (
            <div>
                <Navigator />
                <CategoryContainer/>

                <Banner />
            </div>
        )
    }
}
