import LinearProgress from "@material-ui/core/LinearProgress";

function Loading() {
    return (
        <center style={{display: "grid", placeItems: "center", height: "90vh"}}>
            <div>
                <img src="chat.png" height={200} width={200} style={{marginBottom: 10 }} />
                <LinearProgress color="primary" style={{width: 250, height: "1.5px"}}/>
            </div>
        </center>
    )
}

export default Loading
