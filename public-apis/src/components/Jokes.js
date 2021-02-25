import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJoke } from '../actions/index';
import styled from 'styled-components';

const Jokes = (props) => {
    const { joke, error, isFetching } = props;

    const handleClick = () => {
        props.getJoke();
    }

    useEffect(() => {
        props.getJoke();
      }, []);

    if(isFetching){
        <h2>Your joke is loading!</h2>
    }

    if(error){
        <h2>Error: {error} </h2>
    }

    return (
        <>
            <H4>Wanna hear a joke?</H4>
            <Paragraph>{joke}</Paragraph>
            <Button onClick={handleClick}>Randomize</Button>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        joke: state.joke,
        isFetching: state.isFetching,
        error: state.error
    };
}

const H4 = styled.h4`
    font-size: 2rem;
    text-shadow: 1px 1px 5px white;
`;

const Paragraph = styled.h6`
    font-size: 1.25rem;
    /* padding-bottom: 2%; */
`;

const Button = styled.button`
    font-size: 1.25rem;
    color:white;
    background-color: #665D5F;
    padding: 1.5%;
    border-radius: 10px;
    text-shadow: 0.5px 0.5px 3px white;
`;

export default connect(mapStateToProps, { getJoke } )(Jokes);