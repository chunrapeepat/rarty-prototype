import { Component } from 'react'

import Banner from '../components/Banner'
import Navigator from '../components/Navigator'
<<<<<<< HEAD

=======
>>>>>>> af7956ebb5a6b0595d11f3177b6ff4019e030840

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
