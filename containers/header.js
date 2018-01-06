import { Component } from 'react'

import Banner from '../components/Banner'
import Navigator from '../components/Navigator'
import CategoryContainer from '../containers/Category'

export default class extends Component {
    render() {
        return (
            <div>
                <Navigator />
                {this.props.withbanner && <Banner />}
            </div>
        )
    }
}
