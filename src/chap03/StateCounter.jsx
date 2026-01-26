import './StateCounter.css';

export default function StateCounter({ step, onUpdate }) {
    const handoleClick = () => onUpdate(step);

    return (
        <button className="cnt" onClick={handoleClick}>
            <span>{step}</span>
        </button>
    );
};
