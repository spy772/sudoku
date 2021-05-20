import './Board.css';
import { Square } from './Square';
import { isItMine } from './Utility';
import { React, useState, useEffect } from 'react';

function Row(props) {
    var row = [];
    for (var i = 0; i < props.cells; i++) {
        row.push(<Square status={props.tiles[i][props.var]} key={i} squareEvent={ props.squareEvent } x={ i } y={ props.var }/>);
    }
    return <div className="board-row">{row}</div>;
}


export function Board(props) {
    useEffect(() => {
       // console.log('board props now are: ' + JSON.stringify(props));
    });
    return (
        <div>
            <Rows {...props}/>
        </div>
    );
}

function Rows(props) {
    var rows = [];
    for (var i = 0; i < props.rows; i++) {
        rows.push(<Row key={i} cells={props.columns} tiles={props.tiles} var={i} squareEvent={ props.squareEvent }/>);
}
    return <div className="board-row">{rows}</div>;
}
