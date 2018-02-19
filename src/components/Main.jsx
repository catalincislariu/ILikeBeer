import React from 'react'
import TinderContainer from '../containers/TinderContainer'
import Header from './Header'
import Menu from './Navigations/Menu'

class Main extends React.Component {
  constructor () {
    super()
    this.toggleMenu = this.toggleMenu.bind(this)
    this.state = {
      menu: { open: true }
    }
  }

  toggleMenu () {
    this.setState({ menu: { open: !this.state.menu.open } })
  }

  render () {
    return (
      <div id="page-wrap">
        <Menu
          pageWrapId="page-wrap"
          isOpen={this.state.menu.open}
          toggleMenu={this.toggleMenu}
        />

        <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#" target="_blank" rel="noopener noreferrer">Logo</a>
            </div>
            <ul className="nav navbar-nav pull-right">
              <li>
                <button onClick={this.toggleMenu} className="btn btn-lg btn-outline">
                  <i className="fa fa-heart" />
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <Header />

        <section id="beers">
          <div className="container">
            <TinderContainer />
          </div>
        </section>

        <footer className="text-center">
          <div className="footer-below">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <span>Copyright 2018</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Main
