import React, { Component } from 'react';
import News from "./News";

export default class Header extends Component{
    render(){
        return (<div className="container">
            <div>
                <div>
                    <div className="tab" role="tabpanel">
                        {/* Nav tabs */}
                        <ul className="nav nav-tabs d-flex justify-content-center" role="tablist">
                            <li role="presentation"><a href="/us" role="tab">The US</a></li>
                            <li role="presentation"><a href="http://localhost:3000/ng" role="tab">Nigeria</a></li>
                        </ul>
                        {/* <a href="/us" >The US</a>
                        <a href="http://localhost:3000/ng" >Nigeria</a> */}
                        {/* Tab panes */}
                        <div className="tab-content tabs">
                            <News code={this.props.code} />
                        </div>
                    </div>
                </div>
            </div>
        </div>)}
}