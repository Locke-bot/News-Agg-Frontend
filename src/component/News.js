import spinner from '../spinner.gif';
import React, { Component } from 'react';

import SideHeader from '../component/sideHeader';
import NavHeader from '../component/header';
import NewsLetter from '../component/newsletter';

import 'jquery/src/jquery';

import '../css/bootstrap.min.css';
import '../css/font-icons.css';
import '../css/style.css';
import '../index.css'
import $ from 'jquery';
import axios from 'axios';

const API = "https://locke-news-agg.herokuapp.com/";
const noFromEach = 12;
const Newsletter = <NewsLetter />
const Tabs = {"us": 0, "ng": 1}
class News extends Component {

    constructor(props){
        super(props);
        let posts;
        this.state = {
            posts
        };
        // console.log(Tabs[this.props.code], "code", $($("a[role=tab]")[Tabs[this.props.code]]));
        // $($("a[role=tab]")[Tabs[this.props.code]]).closest("li").addClass("active")
    }

    addPosts(){
        if (this.state.posts == null){
            return <img src={ spinner } alt="loading..."/>
        }
        // the same number of articles must be taken from all newspapers
        // the Math.round is to take care of any floating point issues
        return [...Array(Math.round(this.state.posts.length-1)/noFromEach).keys()].map(
            item=>(
                <div className="row">
                    <div className="blog__content">
                        <section className="section tab-post mb-16">
                          <div className="row card-row mx-0">
                              <div className="col-md title-wrap title-wrap--line">
                                  <h3 className="section-title">{this.state.posts.slice(1)[item*noFromEach].name}</h3>
                              </div>
                            </div>
                            <div className="tabs__content tabs__content-trigger tab-post__tabs-content">
                                <div className="tabs__content-pane tabs__content-pane--active" id="tab-all">
                                    <div className="row card-row mx-0">
                                        {this.display(this.state.posts.slice(1).slice(item*noFromEach, noFromEach*(item+1)))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            )
        )
    }
    
    display(posts){
        return posts.map(function(item){
            return (<div className="col-md-4"
                      style={{
                        wordBreak: "break-word",
                      }}>
                        <article className="entry card">
                          <div className="entry__img-holder card__img-holder">
                            <a target="_blank" href={item.url}>
                              <div className="thumb-container thumb-70">
                                <img data-src={item.post_thumbnail} src={item.post_thumbnail} className="entry__img lazyloaded" alt=""/>
                              </div>
                            </a>
                          </div>
                    
                          <div className="entry__body card__body">
                            <div className="entry__header">
                              
                              <h2 className="entry__title">
                                <a target="_blank" href={item.url}>{item.title}</a>
                              </h2>
                              <ul className="entry__meta">
                                <li className="entry__meta-author">
                                  <span>by</span>&nbsp;
                                  <a target="_blank" href="#">{item.name}</a>
                                </li>
                                <li className="entry__meta-date">
                                  {item.published}
                                </li>
                              </ul>
                            </div>
                            <div className="entry__excerpt" dangerouslySetInnerHTML={{__html: item.excerpt}}>
                            </div>
                          </div>
                        </article>
                </div>)
        })
    }

    
    displayLatest(posts){
        if (this.state.posts == null){
            return
        }
        this.latest = this.state.posts[0]
        return(
            <article className="entry card featured-posts-grid__entry">
               <div className="entry__img-holder card__img-holder">
                  <a target="_blank" href={this.latest.url}>
                    <img src={this.latest.post_thumbnail} alt="" className="entry__img"/>
                  </a>
                </div>
    
                <div className="entry__body card__body">   
                  <h2 className="entry__title">
                    <a target="_blank" href={this.latest.url}>{this.latest.title}</a>
                  </h2>
                  <ul className="entry__meta">
                    <li className="entry__meta-author">
                      <span>by</span>&nbsp;
                      <a target="_blank" href={this.latest.url}>{this.latest.name}</a>
                    </li>
                    <li className="entry__meta-date">
                      {this.latest.published}
                    </li>
                  </ul>
              </div>
             </article>
        )}
    
    
    componentWillMount(){
        let fontLink = document.createElement('link');
        fontLink.rel = "stylesheet"
        fontLink.href = "https://fonts.googleapis.com/css?family=Montserrat:400,600,700%7CSource+Sans+Pro:400,600,700";
        document.head.appendChild(fontLink);
                
        // appendScript can't be used since lazysizes must be in the head tag
        const script = document.createElement("script");
        script.src = process.env.PUBLIC_URL + "js/lazysizes.min.js";
        document.head.appendChild(script);
        
    }

    appendScript = (scriptToAppend) => {
        const script = document.createElement("script");
        script.src = scriptToAppend;
        document.body.appendChild(script);
    }    
    
    componentDidMount(){
        axios.get(API + `api/${this.props.code}/` + noFromEach)
          .then(result => this.setState({
                posts: result.data,
          })).then(result=>console.log(result))
        console.log(Tabs[this.props.code], "code", $($("a[role=tab]")[Tabs[this.props.code]]));
        $($("a[role=tab]")[Tabs[this.props.code]]).closest("li").addClass("active")
        this.appendScript(process.env.PUBLIC_URL + "js/easing.min.js")
        this.appendScript(process.env.PUBLIC_URL + "js/owl-carousel.min.js")
        this.appendScript(process.env.PUBLIC_URL + "js/flickity.pkgd.min.js")
        this.appendScript(process.env.PUBLIC_URL + "js/twitterFetcher_min.js")
        this.appendScript(process.env.PUBLIC_URL + "js/jquery.newsTicker.min.js")
        this.appendScript(process.env.PUBLIC_URL + "js/modernizr.min.js")
        this.appendScript(process.env.PUBLIC_URL + "js/scripts.js")
        
    }
    
    render() {
        return (
        <body className="style-default style-rounded">
            <div className="content-overlay"></div>
            <main className="main oh text-center" id="main">
                <section className="featured-posts-grid pt-3">
                      <div className="container">
                        <div>                
                          <div>
                            <div className="featured-posts-grid__item featured-posts-grid__item--lg">
                                {this.displayLatest()}
                            </div>
                          </div>          
                
                        </div>
                      </div>
                    </section>
                <div className="main-container container pt-24" id="main-container">
                    {this.addPosts()}
                </div>
            </main>
        </body>
        );
    }
}
export default News;