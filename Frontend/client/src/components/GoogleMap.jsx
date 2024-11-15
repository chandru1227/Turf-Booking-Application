import React from 'react';

const GoogleMap = () => {
    const lat = 9.9250;
    const long = 78.1193;
    const name = 'Madurai';

    const mapUrl = `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${encodeURIComponent(name)}@${lat},${long}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;

    return (
        <div style={{ width: '100%' }}>
            <iframe
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src={mapUrl}
                title="Google Map"
            />
        </div>
    );
};


export default GoogleMap;
