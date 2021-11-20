import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NoSelect = () => {
    return (
        <>
        <div className="pt-5">
            <h2 className="pt-1"> If you see destination page, </h2><h2>You at first select any transport for home menu</h2>
            <h3>Please Go to the Home</h3>
            <Button href="/home"className="btn btn-primary">Home</Button>
    
        </div>
        </>
    );
};

export default NoSelect;