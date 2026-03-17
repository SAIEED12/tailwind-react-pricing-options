import React from 'react';
import { BadgeCheck } from 'lucide-react';

const PricingFeature = ({feature}) => {
    return (
        <p className='flex mt-4'><BadgeCheck className='mr-2'></BadgeCheck> {feature}</p>
    );
};

export default PricingFeature;