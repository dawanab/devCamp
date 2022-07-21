import React, { Component } from "react";

const rawJournalData = [
    { title: "Post One", contnet: "Post content", status: "draft" },
    { title: "Post One", contnet: "Post content", status: "published" },
    { title: "Post One", contnet: "Post content", status: "published" },
    { title: "Post One", contnet: "Post content", status: "published" }
];

// Class component 
export default class JournalList extends Component {
    constructor(props) {
        super();

        this.state = {
            journalData: rawJournalData,
            greeting: "Hi there",
            isOpen: true 
        };
    }

    render() {
        return (
            <h2>{this.props.heading}</h2>
        );
    }
}