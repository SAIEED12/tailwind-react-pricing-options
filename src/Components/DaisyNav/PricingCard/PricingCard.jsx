import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {name,price,description,features} = pricing
    console.log(pricing)
    return (
        <div className='flex flex-col border bg-blue-600 rounded-2xl'>
            {/* Card header */}
            <div>
                <h1 className="text-7xl">{name}</h1>
                <h4 className='text-3xl'>${price}.99/month</h4>
            </div>
            {/* card body */}
            <div className='bg-blue-400 rounded-2xl mt-10 p-2 flex-1'>
                <p>{description}</p>
                {
                    features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                }
            </div>
            <button className="btn w-100 mt-4 ml-25">Subscribe</button>
        </div>
    );
};

export default PricingCard;