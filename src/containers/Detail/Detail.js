import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getComments } from "../../redux/actions";
import { Card, CardBody, CardTitle, CardText, CardSubtitle } from "reactstrap";

const Detail = (props) => {
  useEffect(() => {
    props.getComments();
  }, []);

  return (
    <>
      <h1>{props.match.params.id} Numaralı Telefonun Yorumları</h1>
      {props.comments.map((comment) => {
        return (
          <Card className="m-4">
            <CardBody>
              <CardTitle className="h3">
                {comment.comment_author.toUpperCase()}
              </CardTitle>
              <CardSubtitle>{comment.comment_point} YILDIZ</CardSubtitle>
              <CardText>{comment.comment_detail}</CardText>
              <CardText>
        <small className="text-muted">Yorum Tarihi : {comment.comment_date}</small>
          </CardText>
            </CardBody>
          </Card>
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  const { comments } = state.commentsReducer;
  return {
    comments,
  };
};

const mapDispatchToProps = {
  getComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
