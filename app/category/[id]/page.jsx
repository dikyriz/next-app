import React from 'react';

const DetailCategory = ({params}) => {
    console.log(params);
    return (
        <div>
            detail category {params.id}
        </div>
    );
};

export default DetailCategory;