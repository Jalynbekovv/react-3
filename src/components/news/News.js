import classes from "./news.module.css";

export const News = () => {
    return(
        <div>
            <h1 className={classes.main}>
                <a href="address">
                    <li>News</li>
                    <li>Contacts</li>
                    <li>Gmail</li>
                    <li>Address</li>
                </a>
            </h1>
        </div>
    )
}