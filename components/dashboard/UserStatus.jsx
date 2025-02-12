import React from 'react';

const UserStatus = ({title, bgColor, count}) => {
    return (
        <div className={`card ${bgColor} shadow-xl`}>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <p>Jobs {title} Total </p>
                <p className="text-xl font-bold">{count} Job</p>
            </div>
        </div>
    );
};

export default UserStatus;