import React from 'react';

const Location= () => {
    return (
        <div className="location_wrapper">

        <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074.1854062194!2d-104.89653828462873!3d39.600505679468334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c86885aa69d39%3A0xbfc66b3a3b2aaf9c!2sFiddler&#39;s+Green+Amphitheatre!5e0!3m2!1ses!2smx!4v1562720903201!5m2!1ses!2smx" 
             width="100%" 
             height="500px" 
             frameBorder="0" 
             allowfullScreen
             >
             </iframe>
          <div className="location_tag">
              <div>Location</div>
          </div>
        </div>
    );
};

export default Location;