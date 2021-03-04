import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../atoms/Button';
import Span from '../atoms/Span';
import Div from '../atoms/StyledDiv';
import { articleProps } from '../interfaces';

const Article = (props: articleProps): JSX.Element => {
  const index = props.index;
  const title = props.title;
  const articleID = props.articleID;
  const trackUrl = props.trackUrl;

  return (
    <Div
      overflow="hidden"
      marginRight="20px"
      borderRadius="5px"
      marginBottom="20px"
      backgroundColor="rgb(241,240,240)"
    >
      <Link
        to={`${trackUrl}/articles/${articleID}`}
        style={{ fontSize: '30px' }}
      >
        <Button
          textAlign="left"
          height="41px"
          width="100%"
          marginBottom="0px"
          marginTop="0px"
        >
          <Span
            text={`${index + 1 < 10 ? '0' + (index + 1) : index + 1}. ` + title}
            paddingLeft="20px"
            fontSize="19px"
            width="100%"
          ></Span>
        </Button>
      </Link>
    </Div>
  );
};

export default Article;
