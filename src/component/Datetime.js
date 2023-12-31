import React, { useState, useEffect } from 'react';

const Datetime = () => {
    const [showdate, setShowdate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setShowdate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedDate = showdate.toLocaleDateString() + ',' + (showdate.getHours() < 10 ? '0' + showdate.getHours() : showdate.getHours()) + ':' + (showdate.getMinutes() < 10 ? '0' + showdate.getMinutes() : showdate.getMinutes()) + ':' + (showdate.getSeconds() < 10 ? '0' + showdate.getSeconds() : showdate.getSeconds());

    return (
        <div>
            <button style={{ backgroundColor: '#dc3545', padding: '0.32rem', border: 'none', borderRadius: '2px', cursor: 'pointer', color: 'white', fontSize: '14px', marginTop: '5px' }}>
                Reset Number of Persons
            </button><br />
            <input type='text' value={formattedDate} readOnly='true' style={{ backgroundColor: '#dc3545', padding: '0.32rem', border: 'none', borderRadius: '2px', cursor: 'pointer', color: 'white', fontSize: '28px', width: '260px' }} />
        </div>
    );

}

export default Datetime;