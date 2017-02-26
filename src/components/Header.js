<div className="App-header">
  <img src={logo_6} className="App-logo" alt="logo" />
  <div className="MenuAlign">
    <Divider style={{width: "70%"}}/>
    <Menu className="Menu"
      style={{padding: "8px 10px"}}
      disableAutoFocus={this.state.menu}
    >
      <MenuItem primaryText="Home" value='home' disabled={this.state.menu.home} />
      <MenuItem primaryText="About" value='about' disabled={this.state.menu.about} />
      <MenuItem primaryText="Marathon" value='marathon' disabled={this.state.menu.marathon} />
      <MenuItem primaryText="Gallery" value='gallery' disabled={this.state.menu.gallery} />
      <MenuItem primaryText="Contact" value='contact' disabled={this.state.menu.contact}/>
    </Menu>
  </div>
</div>
