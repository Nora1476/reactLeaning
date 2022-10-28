import React from "react";

const styles= {
  wrapper:{
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },

  imageContainer:{},
  image:{
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContiner: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  conmmentText:{
    color: "black",
    fontSize: 16,
  }
}

function Comment(props) {
  return(
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img src="https://koreajoongangdaily.joins.com/jmnet/koreajoongangdaily/_data/photo/2017/09/24220100.jpg" alt="라이언"
             style={styles.image}/>
      </div>

      <div style={styles.contentContiner}>
        <span style={styles.nameText}> {props.name} </span>
        <span style={styles.conmmentText}> {props.comment} </span>
      </div>
    </div>
  );
}

export default Comment;