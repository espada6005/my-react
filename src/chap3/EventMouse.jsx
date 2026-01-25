import { useState } from 'react';

export default function EventMouse({ defaultSrc, afterSrc, alt }) {
    const [current, setCurrent] = useState(defaultSrc);
    const handleEnter = () => setCurrent(afterSrc);
    const handoleLeave = () => setCurrent(defaultSrc);

    return(
        <img
            src={current}
            alt={alt}
            onMouseEnter={handleEnter}
            onMouseLeave={handoleLeave} />
    );

};
