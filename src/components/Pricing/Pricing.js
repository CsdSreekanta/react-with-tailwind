import React from 'react';
import PricingOptions from '../PricingOptions/PricingOptions';

const Pricing = () => {
    const pricingOptions =[
        {id:1, name:'Free', price:0, benefits: [
            'Unlimited Excess',
            'Full Support',
            'Quality Service',
            'Unlimited Deals'
        ]},
        {id:2, name:'Regular', price:9.99,  benefits: [
            'Unlimited Excess',
            'Full Support',
            'Quality Service',
            'Unlimited Deals'
        ]},
        {id:3, name:'Premium', price:19.9,  benefits: [
            'Unlimited Excess',
            'Full Support',
            'Quality Service',
            'Unlimited Deals'
        ]},
      
    ]
 
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-5xl font-bold text-white'>Best Deals of the Town</h1>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOptions.map(option=> <PricingOptions
                    key={option.id}
                    option={option}
                    ></PricingOptions>)
                }
           
            </div>
        </div>
    );
};

export default Pricing;