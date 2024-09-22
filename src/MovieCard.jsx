import React, { Component } from 'react'

export default class MovieCard extends Component {
    constructor(){
        super();
        this.state = {
            title:"The Avengers",
            plot:"The story of Avengers",
            price:100,
            rating:8.9,
            stars:0,
            fav:true,
            isInCart:false,
        }
    }

    decStars = ()=>{
        if(this.state.stars<=0)
            return;
        this.setState({
            stars : this.state.stars -= 0.5
        });
    }

    addStars = ()=>{  
        if(this.state.stars>=5)
            return; 
        this.setState({
            stars : this.state.stars += 0.5
        });
    }

    handleFav = ()=> {
        this.setState({
            fav:!this.state.fav,
        })
    }

    handleAddToCart = ()=> {
        this.setState({
            isInCart:!this.state.isInCart,
        })
    }

    render() {
        const {title, plot, price, rating, stars, fav, isInCart} = this.state;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src="../assets/poster1.jpg" alt="poster" />
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img src="../assets/minus.png" alt="decrease" onClick={this.decStars}  className="str-btn" />
                                <img src="../assets/star.png" alt="star" className='stars'/>
                                <img src="../assets/plus.png" alt="increase" onClick={this.addStars}  className="str-btn" />
                                <span>{stars}</span>
                            </div>
                            {fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button> : <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>}
                            
                            <button className="cart-btn" onClick={this.handleAddToCart}>{isInCart?"Remove from cart":"Add to cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
