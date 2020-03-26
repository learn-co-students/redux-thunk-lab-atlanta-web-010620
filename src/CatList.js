// write your CatList component here
import React from 'react'

class CatList extends React.Component {
    render() {
        return(
            <div>
                {this.props.catPics.map(pic => <img src={pic}/>)}
            </div>
        )
    }
}

export default CatList