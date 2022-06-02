import React from "react";
import classes from "./mainPage.module.css";
import {News} from "../../components/news/News";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {status: false};
        this.closeBox = this.closeBox.bind(this);
    }

    closeBox() {
        this.setState({status: !this.state.status})
    }

    render() {
        return(
            <div>
                <h2 className={classes.word}>Page with News</h2>
                {this.state.status === true ? <News/> : ""}
                <div className={classes.submit}>
                    <button className={classes.menu} onClick={this.closeBox}>
                        News
                    </button>
                </div>
            </div>
        )
    }
}

export default MainPage;
