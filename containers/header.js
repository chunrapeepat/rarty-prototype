import { Component } from 'react'

import Banner from '../components/Banner'
import Navigator from '../components/Navigator'

export default class extends Component {
    render() {
        return (
            <div>
                <Navigator />
                <Banner />
            </div>
        )
    }
}
