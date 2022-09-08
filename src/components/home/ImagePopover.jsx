import React from "react";

export default class ImageComponent extends React.Component {

    constructor({source}){
      super();
      this.source = source;
    }
    state = { isOpen: false };
  
    handleShowDialog = () => {
      this.setState({ isOpen: !this.state.isOpen });
      console.log("clicked");
    };
  
    render() {
      return (
        <div>
          <b onClick={this.handleShowDialog}>Website Architecture</b>
          {this.state.isOpen && (
            <dialog
              className="dialog"
              style={{ position: "absolute" }}
              open
              onClick={this.handleShowDialog}
            >
              <img
                src={require("../../assets/img/architecture.png")}
                onClick={this.handleShowDialog}
                width='80%'
                height='80%'
                alt="none"
              />
            </dialog>
          )}
        </div>
      );
    }
}
  
