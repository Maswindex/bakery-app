import React, {Component} from 'react';

class Bakery extends Component
{
    state = {
        goods: 0,
        tags: ["t1", "t2", "t3"]
    };

    //called upon creation
    //we have access to this in here
    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleIncrement() {
        // console.log('handleIncrement', this);
        this.setState({ goods: this.state.goods + 1 })
    }

    handleDecrement() {
        // console.log('handleIncrement', this);
        this.setState({ goods: this.state.goods - 1 })
    }

    render()
    {
        return (
            <div>
                <span className={this.getStyles()}>{this.state.goods}</span>
                <button onClick={this.handleIncrement} className='btn btn-primary btn-sm'>add to basket</button>
                <button onClick={this.handleDecrement} className='btn btn-primary btn-sm'>add to basket</button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </div>
        );
    }

    getStyles()
    {
        let classes = "m-3 badge badge-";
        classes += this.state.goods === 0 ? "warning" : "primary";
        return classes;
    }

}

export default Bakery;