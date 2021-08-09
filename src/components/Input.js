import React, { Component } from 'react'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchHealthCare, fetchConsumerGoods, fetchEnergy, fetchFinance } from '../actions';

import './Input.css';


export class Input extends Component {

    componentDidMount(){
        this.props.fetchHealthCare(this.props.id);
        this.props.fetchConsumerGoods(this.props.id);
        this.props.fetchEnergy(this.props.id);
        this.props.fetchFinance(this.props.id); 
    }
    

    constructor(props){
        super(props);
        this.state = {
            desiredIncome: 0,
            total: 0
        }
    }

    renderInput = formProps => {
        
        return <input 
            onChange={formProps.input.onChange}
            value={formProps.input.value}
            placeholder="  Enter your desired monthly income"  />
    }
    healthSum = () => (this.state.desiredIncome * 100) / this.props.healthCare.dividendYield;
    consumerGoodsSum = () => (this.state.desiredIncome * 100) / this.props.consumerGoods.dividendYield;
    energySum = () => (this.state.desiredIncome * 100) / this.props.energy.dividendYield;
    financeSum = () => (this.state.desiredIncome * 100) / this.props.finance.dividendYield;
    onSubmit = formValues => {
        
        this.setState({desiredIncome: ((formValues.sum * 12) / 4) / 4}, () => {
           console.log(this.state.desiredIncome); 
        }); 
        
        this.setState({total: this.healthSum() + this.consumerGoodsSum() + this.energySum() + this.financeSum()}, () => {
            console.log(this.state.total); 
        })
    }
    
    check(){
           if(this.state.desiredIncome !== 0){
            return (
                <div className="ui items">
                    <div className="item ">
                        <div className="ui small image">
                        <img src={this.props.healthCare.image} className="image" />
                        </div>
                        <div className="content">
                        <div className="header" style={{marginTop: '10px'}}>{this.props.healthCare.companyName}</div>
                        <div className="description">
                            <p>Stock price: {this.props.healthCare.stockPrice}$</p>
                            <p>Dividend Yield in month: {this.props.healthCare.dividendYield}%</p>
                        </div>
                        <div className="meta">
                            <span className="price">{Math.floor(this.healthSum() / this.props.healthCare.stockPrice)} shares</span>
                        </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="ui small image">
                        <img src={this.props.consumerGoods.image} className="image" />
                        </div>
                        <div className="content">
                        <div className="header">{this.props.consumerGoods.companyName}</div>
                        <div className="description">
                            <p>Stock price: {this.props.consumerGoods.stockPrice}$</p>
                            <p>Dividend Yield in month: {this.props.consumerGoods.dividendYield}%</p>
                        </div>
                        <div className="meta">
                            <span className="price">{Math.floor(this.consumerGoodsSum() / this.props.consumerGoods.stockPrice)} shares</span>
                        </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="ui small image">
                            <img src={this.props.energy.image} className="image" />
                        </div>
                        <div className="content">
                            <div className="header">{this.props.energy.companyName}</div>
                            <div className="description">
                                <p>Stock price: {this.props.energy.stockPrice}$</p>
                                <p>Dividend Yield in month: {this.props.energy.dividendYield}%</p>
                            </div>
                            <div className="meta">
                                <span className="price">{Math.floor(this.energySum() / this.props.energy.stockPrice)} shares</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="ui small image">
                        <img src={this.props.finance.image} className="image" />
                        </div>
                        <div className="content">
                            <div className="header">{this.props.finance.companyName}</div>
                            <div className="description">
                                <p>Stock price: {this.props.finance.stockPrice}$</p>
                                <p>Dividend Yield in month: {this.props.finance.dividendYield}%</p>
                            </div>
                            <div className="meta">
                                <span className="price">{Math.floor(this.financeSum() / this.props.finance.stockPrice)} shares</span>
                            </div>
                        </div>
                    </div>
                    <h2 style={{marginLeft: '10px', paddingBottom: '10px'}}>You should invest {Math.floor(this.state.total)}$ to earn {((this.state.desiredIncome * 4) * 4) / 12}$ monthly</h2>
                    
                </div>
            )
           }
       } 
    
    render(){
       
       return (
           <React.Fragment>
                <Container>
                    <Display>
                        <form autoComplete="off" onSubmit={this.props.handleSubmit(this.onSubmit)} >  
                            <Field  name="sum" component={this.renderInput}   />
                        </form>
                        <List>
                            {this.check()}
                        </List>
                    </Display>
                </Container>
                <h3 style={{display: 'flex',
                            justifyContent: 'center',
                            color: '#5a6268',
                            backgroundColor: 'whitesmoke',
                            width: '30rem',
                            marginLeft: '750px',
                            borderRadius: '0.75rem'}}>Made by Tursynbek Bauyrzhan</h3>
            </React.Fragment>
        ) 
    }
}

const Container = styled.div`
    display: flex;
    justify-content: center;
`
const Display = styled.div`
    display: flex;
    flex-direction: column;
`
const List = styled.div`
    margin-top: 70%;
    background-color: whitesmoke;
    border-radius: 0.75rem;
    width: 30rem;
`

const Wrap = reduxForm({
    form: 'sum'
})(Input)

const mapStateToProps = (state, ownProps) => {
    return {
        healthCare: state.healthCare.find(company => company.id === ownProps.id),
        energy: state.energy.find(company => company.id === ownProps.id),
        consumerGoods: state.consumerGoods.find(company => company.id === ownProps.id),
        finance: state.finance.find(company => company.id === ownProps.id)
    }
}

export default connect(mapStateToProps, { fetchHealthCare, fetchConsumerGoods, fetchEnergy, fetchFinance })(Wrap)
