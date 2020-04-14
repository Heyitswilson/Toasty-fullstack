const Arrow = ({ direction, clickFunction, glyph }) => (
    <div 
        className={direction}
        onClick={clickFunction}
    >
        {glyph}
    </div>
)

export default Arrow