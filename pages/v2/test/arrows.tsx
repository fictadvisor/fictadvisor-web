import styles from "styles/v2/local/pages/test.module.scss";

function arrows(){
    return(
        <div className = {styles["test-page-wrap"]}>
            <button className="arrow-desktop arrow-default-color">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 19L8 12L15 5" stroke="#FAFAFA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button className="arrow-mobile arrow-default-color">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.4993 15.8333L6.66602 9.99999L12.4993 4.16666" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    );
}

export default arrows;
