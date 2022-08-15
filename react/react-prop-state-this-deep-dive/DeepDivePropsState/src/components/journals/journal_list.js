import React, { Component } from "react";
import { JournalEntry } from "./journal_entry";


const rawJournalData = [
    { title: "Post One", content: "Post content", status: "draft" },
    { title: "Post Two", content: "Post content", status: "published" },
    { title: "Post Three", content: "Post content", status: "published" },
    { title: "Post Four", content: "Post content", status: "published" }
];

// Class component 
export default class JournalList extends Component {
    constructor(props) {
        super();

        this.state = {
            journalData: rawJournalData,
            // greeting: "Hi there",
            isOpen: true 
        };

        // Putting these 3 methods in the constructir b/c arrow functions can
        // be done in any class method, byt not inside class declaration. Needs
        // to be in the constructor 
        this.clearEntries = () => {
            this.setState({ journalData: [], isOpen: false });
        };

        this.showAllEntries = () => {
            this.setState({ journalData: rawJournalData, isOpen: true });
        };

        this.toggleStatus = () => {
        if (this.state.isOpen) {
            this.setState({ journalData: [], isOpen: false})
        } else {
            this.setState({ journalData: [], isOpen: true})
        }
    }
    
    }

        
    render() {
        const journalEntries = this.state.journalData.map(journalEntry => {
            return (
                <div key = {journalEntry.title}>
                    <JournalEntry 
                    title={journalEntry.title} 
                    content={journalEntry.content} 
                    />
                </div>
            );
        });

        return (
            <div>
                <h2>{this.props.heading}</h2>
                { journalEntries }
                <button onClick={this.clearEntries}>Clear Journal Entries</button>
                <button onClick={this.showAllEntries}>Show All Entries</button>
                <button onClick={this.toggleStatus}>Toggle Entries</button>
            </div>
        );
    }
}

