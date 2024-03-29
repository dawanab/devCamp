import React, {Component} from "react";
import PortfolioItem from "./portfolio-item";
import axios from 'axios';


export default class PortfolioContainer extends Component {
	constructor() {
		super();
		
		this.state = {
			pageTitle: "Welcome to my portfolio",
			isLoading: false,
			data: []
			// data: [
			// 	{ title: "Quip", category: "eCommerce", slug: "quip" },
			// 	{ title: "Eventbrite", category: "Scheduling", slug: "eventbrite" }, 
			// 	{ title: "Ministry Safe", category: "Enterprise", slug: "ministry-safe" }, 
			// 	{ title:"SwingAway", category: "eCommerce", slug: "swingaway" }
			// ]
		};

		this.handleFilter = this.handleFilter.bind(this);
		this.getPortfolioItems = this.getPortfolioItems.bind(this);

		// Demonstration only ----->
		/* this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this); */
	}

	/* filter the categories in the data list */
	handleFilter(filter) {
		if (filter === "CLEAR_FILTERS") {
			this.getPortfolioItems();
		} else {
			this.getPortfolioItems(filter);
		}
	}

	getPortfolioItems(filter = null) {
		axios
			.get("https://bakerdawana.devcamp.space/portfolio/portfolio_items")
			.then(response => {
				if (filter) {
					this.setState({
						data: response.data.portfolio_items.filter(item => {
							return item.category === filter;
						})
					});
				} else {
					this.setState({
						data: response.data.portfolio_items
					});
				}
			})
			.catch(error => {
				console.log(error);
			});
	}

	portfolioItems() {
		return this.state.data.map(item => {
			return <PortfolioItem key={item.id} item={item} />;
		});
	}

	componentDidMount() {
		this.getPortfolioItems();
	}

	render() {
		if (this.state.isLoading) {
			return <div>Loading...</div>;
		}

		return (
			<div className="homepage-wrapper">
				<div className="filter-links">
				<button className="btn" onClick={() => this.handleFilter("eCommerce")}>eCommerce</button>
					<button className="btn" onClick={() => this.handleFilter("Scheduling")}>Scheduling</button>
					<button className="btn" onClick={() => this.handleFilter("Enterprise")}>Enterprise</button>
					<button className="btn" onClick={() => this.handleFilter("CLEAR_FILTERS")}>All</button>
				</div>
				<div className="portfolio-items-wrapper">
		

					{this.portfolioItems()}
				</div>
			</div>
		);
	}
}